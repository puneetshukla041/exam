import { connectDB } from "@/lib/mongodb";
import { percentage } from "@/lib/scoring";
import { normalizeDateString } from "@/lib/date";
import { AnalyticsModel } from "@/models/Analytics";
import { AnswerModel } from "@/models/Answer";
import { AttemptModel } from "@/models/Attempt";
import { QuestionModel } from "@/models/Question";
import { TestModel } from "@/models/Test";
import { UserStatsModel } from "@/models/UserStats";

const DEFAULT_USER_ID = process.env.NEXT_PUBLIC_DEFAULT_USER_ID || "default-user";
const TEST_LIST_LIMIT = 24;

function hasMongoUri() {
  return Boolean(process.env.MONGODB_URI);
}

function logServerDataError(scope: string, error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`[serverData:${scope}] ${message}`);
}

export function emptyDashboard() {
  return {
    summary: {
      totalTestsUploaded: 0,
      totalQuestionBank: 0,
      totalTestsAttempted: 0,
      totalQuestionsSolved: 0,
      correct: 0,
      wrong: 0,
      accuracy: 0,
      dailyStreak: 0,
      bestStreak: 0,
      readinessScore: 0,
      rankPrediction: hasMongoUri() ? "MongoDB is not reachable" : "Add MongoDB URI to enable tracking",
      totalTimeSeconds: 0,
    },
    paperWise: [
      { paper: "paper1", tests: 0, attempted: 0, correct: 0, wrong: 0, accuracy: 0 },
      { paper: "paper2", tests: 0, attempted: 0, correct: 0, wrong: 0, accuracy: 0 },
    ],
    strongestTopics: [],
    weakestTopics: [],
    difficultyWise: [],
    trends: [],
    weeklyProgress: [],
    monthlyProgress: [],
  };
}

function emptyTestsData(searchParams: Record<string, string> = {}) {
  return {
    tests: [],
    total: 0,
    page: Math.max(1, Number(searchParams.page || 1)),
    pages: 1,
    filters: {
      q: searchParams.q || "",
      paper: searchParams.paper || "",
      mode: searchParams.mode || "",
      subject: searchParams.subject || "",
      status: searchParams.status || "",
      date: searchParams.date || "",
      dateFrom: searchParams.dateFrom || "",
      dateTo: searchParams.dateTo || "",
      subjects: [],
    },
  };
}

function toPlain<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export async function getDashboardData(userId = DEFAULT_USER_ID): Promise<any> {
  if (!hasMongoUri()) return emptyDashboard();
  try {
    await connectDB();
    const [totalTestsUploaded, totalQuestionBank, paperStats, trendRows, answerStats, stats, analytics] = await Promise.all([
      TestModel.estimatedDocumentCount(),
      QuestionModel.estimatedDocumentCount(),
      AttemptModel.aggregate([
        { $match: { userId, status: "submitted" } },
        {
          $group: {
            _id: "$paper",
            tests: { $sum: 1 },
            attempted: { $sum: "$attempted" },
            correct: { $sum: "$correct" },
          },
        },
      ]),
      AttemptModel.aggregate([
        { $match: { userId, status: "submitted" } },
        {
          $project: {
            date: {
              $dateToString: {
                format: "%Y-%m-%d",
                date: { $ifNull: ["$updatedAt", "$startedAt"] },
              },
            },
            correct: { $ifNull: ["$correct", 0] },
            wrong: { $ifNull: ["$wrong", 0] },
            attempted: { $ifNull: ["$attempted", 0] },
            score: { $ifNull: ["$score", 0] },
          },
        },
        {
          $group: {
            _id: "$date",
            attempts: { $sum: 1 },
            correct: { $sum: "$correct" },
            wrong: { $sum: "$wrong" },
            questions: { $sum: "$attempted" },
            score: { $sum: "$score" },
          },
        },
        { $sort: { _id: -1 } },
        { $limit: 30 },
        { $sort: { _id: 1 } },
      ]),
      AnswerModel.aggregate([
        { $match: { userId, selectedOption: { $exists: true, $ne: null } } },
        { $group: { _id: "$isCorrect", count: { $sum: 1 } } },
      ]),
      (UserStatsModel as any).findOne({ userId })
        .select("dailyStreak bestStreak readinessScore rankPrediction totalTimeSeconds")
        .lean(),
      AnalyticsModel.find({ userId, scope: { $in: ["topic", "difficulty"] } })
        .select("scope key attempted correct wrong accuracy mastery averageTimeSeconds")
        .lean(),
    ]);

    const correct = answerStats.find((row: any) => row._id === true)?.count || 0;
    const attemptedAnswers = answerStats.reduce((sum: number, row: any) => sum + row.count, 0);
    const wrong = attemptedAnswers - correct;
    const paperWise = ["paper1", "paper2"].map((paper) => {
      const row = paperStats.find((item: any) => item._id === paper);
      const attempted = row?.attempted || 0;
      const correct = row?.correct || 0;
      const tests = row?.tests || 0;
      return { paper, tests, attempted, correct, wrong: attempted - correct, accuracy: percentage(correct, attempted) };
    });
    const topicRows = analytics.filter((a: any) => a.scope === "topic").sort((a: any, b: any) => b.attempted - a.attempted);
    const strongestTopics = [...topicRows].filter((t: any) => t.attempted >= 3).sort((a: any, b: any) => b.accuracy - a.accuracy).slice(0, 8);
    const weakestTopics = [...topicRows].filter((t: any) => t.attempted >= 3).sort((a: any, b: any) => a.accuracy - b.accuracy).slice(0, 8);
    const difficultyWise = analytics.filter((a: any) => a.scope === "difficulty").sort((a: any, b: any) => a.key.localeCompare(b.key));
    const trends = trendRows.map((row: any) => ({
      date: row._id,
      attempts: row.attempts,
      correct: row.correct,
      wrong: row.wrong,
      questions: row.questions,
      score: row.score,
    }));
    const totalTestsAttempted = paperWise.reduce((sum, row) => sum + row.tests, 0);

    return toPlain({
      summary: {
        totalTestsUploaded,
        totalQuestionBank,
        totalTestsAttempted,
        totalQuestionsSolved: attemptedAnswers,
        correct,
        wrong,
        accuracy: percentage(correct, attemptedAnswers),
        dailyStreak: stats?.dailyStreak || 0,
        bestStreak: stats?.bestStreak || 0,
        readinessScore: stats?.readinessScore || 0,
        rankPrediction: stats?.rankPrediction || "Insufficient data",
        totalTimeSeconds: stats?.totalTimeSeconds || 0,
      },
      paperWise,
      strongestTopics,
      weakestTopics,
      difficultyWise,
      trends,
      weeklyProgress: trends.slice(-7),
      monthlyProgress: trends,
    });
  } catch (error) {
    logServerDataError("dashboard", error);
    return emptyDashboard();
  }
}

export async function getTestsData(searchParams: Record<string, string> = {}, userId = DEFAULT_USER_ID): Promise<any> {
  if (!hasMongoUri()) return emptyTestsData(searchParams);
  try {
    await connectDB();

    const q = (searchParams.q || "").trim();
    const paper = searchParams.paper || "";
    const mode = searchParams.mode || "";
    const subject = searchParams.subject || "";
    const status = searchParams.status || "";
    const date = normalizeDateString(searchParams.date || "") || "";
    const dateFrom = normalizeDateString(searchParams.dateFrom || "") || "";
    const dateTo = normalizeDateString(searchParams.dateTo || "") || "";
    const page = Math.max(1, Number(searchParams.page || 1));
    const limit = Math.min(100, Math.max(1, Number(searchParams.limit || TEST_LIST_LIMIT)));
    const and: Record<string, any>[] = [];

    const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    if (q) {
      const regex = new RegExp(escapeRegex(q), "i");
      and.push({
        $or: [
          { title: regex },
          { description: regex },
          { examName: regex },
          { paperName: regex },
          { subject: regex },
          { tags: regex },
          { "topicCoverage.subject": regex },
          { "topicCoverage.chapter": regex },
          { "topicCoverage.topic": regex },
        ],
      });
    }

    if (paper) and.push({ paper });
    if (mode) and.push({ mode });
    if (subject) {
      const regex = new RegExp(escapeRegex(subject), "i");
      and.push({ $or: [{ subject: regex }, { "topicCoverage.subject": regex }, { "topicCoverage.topic": regex }] });
    }
    if (date) and.push({ date });
    else if (dateFrom || dateTo) {
      const dateFilter: Record<string, string> = {};
      if (dateFrom) dateFilter.$gte = dateFrom;
      if (dateTo) dateFilter.$lte = dateTo;
      and.push({ date: dateFilter });
    }

    const filter = and.length ? { $and: and } : {};

    const rawTests = await TestModel.find(filter)
      .select("title examName paperName paper mode category subject date durationMinutes totalMarks negativeMarking questionCount createdAt topicCoverage difficultyCoverage tags")
      .sort({ date: -1, createdAt: -1 })
      .limit(500)
      .lean();

    const testIds = rawTests.map((test: any) => test._id);
    const attempts = testIds.length
      ? await AttemptModel.find({ userId, testId: { $in: testIds } })
          .select("testId status accuracy score attempted correct wrong updatedAt")
          .sort({ updatedAt: -1 })
          .lean()
      : [];

    const attemptMap = new Map();
    for (const attempt of attempts as any[]) {
      const key = String(attempt.testId);
      if (!attemptMap.has(key)) attemptMap.set(key, attempt);
    }

    let merged = rawTests.map((test: any) => ({ ...test, latestAttempt: attemptMap.get(String(test._id)) || null }));
    if (status) {
      merged = merged.filter((test: any) => {
        const attempt = test.latestAttempt;
        if (status === "not-started") return !attempt;
        return attempt?.status === status;
      });
    }

    const total = merged.length;
    const paged = merged.slice((page - 1) * limit, page * limit);

    const allTestsForFilters = await TestModel.find({}).select("subject topicCoverage").limit(2000).lean();
    const subjectSet = new Set<string>();
    for (const test of allTestsForFilters as any[]) {
      if (test.subject) subjectSet.add(test.subject);
      for (const row of test.topicCoverage || []) {
        if (row.subject) subjectSet.add(row.subject);
        if (row.topic) subjectSet.add(row.topic);
      }
    }

    return toPlain({
      tests: paged,
      total,
      page,
      pages: Math.ceil(total / limit) || 1,
      filters: { q, paper, mode, subject, status, date, dateFrom, dateTo, subjects: Array.from(subjectSet).sort() },
    });
  } catch (error) {
    logServerDataError("tests", error);
    return emptyTestsData(searchParams);
  }
}

export async function getTestManageData(testId: string): Promise<any | null> {
  if (!hasMongoUri()) return null;
  try {
    await connectDB();
    const [test, questions] = await Promise.all([
      (TestModel as any).findById(testId).lean(),
      QuestionModel.find({ testId })
        .select("order question options answer explanation subject chapter topic difficulty importance sourceHint")
        .sort({ order: 1 })
        .lean(),
    ]);
    if (!test) return null;
    return toPlain({ test, questions });
  } catch (error) {
    logServerDataError("testManage", error);
    return null;
  }
}

export async function getAttemptData(attemptId: string): Promise<any | null> {
  if (!hasMongoUri()) return null;
  try {
    await connectDB();
    const attempt = await (AttemptModel as any).findById(attemptId).lean();
    if (!attempt) return null;
    const [questions, answers] = await Promise.all([
      QuestionModel.find({ testId: (attempt as any).testId }).sort({ order: 1 }).lean(),
      AnswerModel.find({ attemptId }).lean(),
    ]);
    return toPlain({ attempt, questions, answers });
  } catch (error) {
    logServerDataError("attempt", error);
    return null;
  }
}

export async function getReportData(attemptId: string): Promise<any | null> {
  if (!hasMongoUri()) return null;
  try {
    await connectDB();
    const attempt = await (AttemptModel as any).findById(attemptId).lean();
    if (!attempt) return null;
    const [answers, questions] = await Promise.all([
      AnswerModel.find({ attemptId }).sort({ questionOrder: 1 }).lean(),
      QuestionModel.find({ testId: (attempt as any).testId }).sort({ order: 1 }).lean(),
    ]);
    return toPlain({ attempt, answers, questions });
  } catch (error) {
    logServerDataError("report", error);
    return null;
  }
}
