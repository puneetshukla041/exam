import { AnswerModel } from "@/models/Answer";
import { AttemptModel } from "@/models/Attempt";
import { AnalyticsModel } from "@/models/Analytics";
import { UserStatsModel } from "@/models/UserStats";
import { calculateNegativeMarkScore, masteryScore, percentage, readinessScore } from "@/lib/scoring";
import { daysBetween, getTodayDateOnly } from "@/lib/date";

export async function recalcAttempt(attemptId: string) {
  const answers = await AnswerModel.find({ attemptId }).lean();
  const attempted = answers.filter((a: any) => a.selectedOption).length;
  const skipped = answers.filter((a: any) => a.isSkipped).length;
  const bookmarked = answers.filter((a: any) => a.isBookmarked).length;
  const correct = answers.filter((a: any) => a.isCorrect).length;
  const wrong = attempted - correct;
  const accuracy = percentage(correct, attempted);
  const score = calculateNegativeMarkScore(correct, wrong);
  const elapsedSeconds = answers.reduce((sum: number, a: any) => sum + (a.timeSpentSeconds || 0), 0);
  const attempt = await AttemptModel.findByIdAndUpdate(attemptId, { attempted, skipped, bookmarked, correct, wrong, accuracy, score, elapsedSeconds, lastActivityAt: new Date() }, { new: true });
  return attempt;
}

export async function rebuildUserAnalytics(userId: string) {
  const answers = await AnswerModel.find({ userId }).lean();
  const submittedAttempts = await AttemptModel.find({ userId, status: "submitted" }).lean();
  const attempted = answers.filter((a: any) => a.selectedOption).length;
  const correct = answers.filter((a: any) => a.isCorrect).length;
  const wrong = attempted - correct;
  const accuracy = percentage(correct, attempted);
  const totalTimeSeconds = answers.reduce((s: number, a: any) => s + (a.timeSpentSeconds || 0), 0);

  const groups = new Map<string, any>();
  function add(scope: string, key: string, a: any) {
    const id = `${scope}:${key}`;
    const g = groups.get(id) || { scope, key, userId, attempted: 0, correct: 0, wrong: 0, skipped: 0, bookmarked: 0, totalTimeSeconds: 0, paper: undefined, subject: undefined, chapter: undefined, topic: undefined, difficulty: undefined };
    if (a.selectedOption) g.attempted += 1;
    if (a.isCorrect) g.correct += 1;
    if (a.selectedOption && !a.isCorrect) g.wrong += 1;
    if (a.isSkipped) g.skipped += 1;
    if (a.isBookmarked) g.bookmarked += 1;
    g.totalTimeSeconds += a.timeSpentSeconds || 0;
    groups.set(id, g);
  }

  for (const a of answers as any[]) {
    add("overall", "overall", a);
    add("topic", `${a.subject} > ${a.topic}`, a);
    add("difficulty", a.difficulty || "unknown", a);
  }

  for (const g of groups.values()) {
    if (g.scope === "topic") {
      const [subject, topic] = g.key.split(" > ");
      g.subject = subject;
      g.topic = topic;
    }
    if (g.scope === "difficulty") g.difficulty = g.key;
    g.accuracy = percentage(g.correct, g.attempted);
    g.averageTimeSeconds = g.attempted ? Math.round(g.totalTimeSeconds / g.attempted) : 0;
    g.mastery = masteryScore(g.accuracy, Math.min(100, g.attempted * 4), g.attempted);
    await AnalyticsModel.findOneAndUpdate({ userId, scope: g.scope, key: g.key }, g, { upsert: true, new: true });
  }

  const today = getTodayDateOnly();
  const current = await (UserStatsModel as any).findOne({ userId }).lean();
  let dailyStreak = current?.dailyStreak || 0;
  if (!current?.lastStudyDate) dailyStreak = submittedAttempts.length ? 1 : 0;
  else {
    const diff = daysBetween(new Date(`${today}T00:00:00`), new Date(`${current.lastStudyDate}T00:00:00`));
    if (diff === 1 && submittedAttempts.length) dailyStreak += 1;
    else if (diff > 1) dailyStreak = submittedAttempts.length ? 1 : 0;
  }
  const bestStreak = Math.max(current?.bestStreak || 0, dailyStreak);
  const mockAttempts = submittedAttempts.filter((a: any) => a.mode === "mock");
  const mockAverage = mockAttempts.length ? Math.round(mockAttempts.reduce((s: number, a: any) => s + (a.accuracy || 0), 0) / mockAttempts.length) : accuracy;
  const coverage = Math.min(100, new Set(answers.map((a: any) => `${a.subject}-${a.topic}`)).size * 4);
  const readiness = readinessScore({ accuracy, coverage, consistency: Math.min(100, dailyStreak * 10), mockAverage });

  const rankPrediction = readiness >= 80 ? "Selection-range ready" : readiness >= 65 ? "Competitive, needs weak-topic polish" : readiness >= 45 ? "Foundation ready, increase mocks" : "High risk, focus on high ROI topics";
  await UserStatsModel.findOneAndUpdate({ userId }, { userId, totalTestsAttempted: submittedAttempts.length, totalQuestionsSolved: attempted, correct, wrong, accuracy, totalTimeSeconds, dailyStreak, bestStreak, lastStudyDate: submittedAttempts.length ? today : current?.lastStudyDate, readinessScore: readiness, rankPrediction }, { upsert: true, new: true });
}
