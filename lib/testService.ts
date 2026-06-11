import type { TestUploadInput } from "@/types/exam";
import { optionsHash, questionHash, testFingerprint } from "@/lib/hash";
import { makeDayKey, getDayNumber } from "@/lib/date";
import { TestModel } from "@/models/Test";
import { QuestionModel } from "@/models/Question";
import { UsedQuestionModel } from "@/models/UsedQuestion";
import { AuditLogModel } from "@/models/AuditLog";

export const MAX_UPLOAD_QUESTIONS = 100;

export function isMongoDuplicateKeyError(error: unknown) {
  return typeof error === "object" && error !== null && "code" in error && (error as { code?: number }).code === 11000;
}

function clean(value: unknown, fallback = "") {
  const text = value === undefined || value === null ? fallback : String(value);
  return text.replace(/\s+/g, " ").trim();
}

export function normalizeUploadData(data: TestUploadInput): TestUploadInput {
  return {
    ...data,
    examName: clean(data.examName, "Rajasthan Computer Instructor"),
    paperName: clean(data.paperName, data.paper === "paper2" ? "Paper 2" : "Paper 1"),
    category: clean(data.category, data.paper === "paper2" ? "Paper 2" : "Paper 1"),
    subject: clean(data.subject, data.paper === "paper2" ? "Paper 2" : "Paper 1"),
    totalMarks: data.totalMarks || 100,
    negativeMarking: clean(data.negativeMarking, "1/3"),
    questions: Array.isArray(data.questions) ? data.questions.slice(0, MAX_UPLOAD_QUESTIONS) : [],
  };
}

export function getTrimInfo(data: TestUploadInput) {
  const originalQuestionCount = Array.isArray(data.questions) ? data.questions.length : 0;
  const acceptedQuestionCount = Math.min(originalQuestionCount, MAX_UPLOAD_QUESTIONS);
  const ignoredQuestionCount = Math.max(0, originalQuestionCount - MAX_UPLOAD_QUESTIONS);
  return { originalQuestionCount, acceptedQuestionCount, ignoredQuestionCount, maxAllowedQuestions: MAX_UPLOAD_QUESTIONS, wasTrimmed: ignoredQuestionCount > 0 };
}

export function computeCoverage(questions: TestUploadInput["questions"]) {
  const topicMap = new Map<string, { subject: string; chapter: string; topic: string; count: number }>();
  const difficultyCoverage = { easy: 0, medium: 0, hard: 0 };

  for (const q of questions) {
    const subject = q.subject || "Unknown";
    const chapter = q.chapter || "Unknown";
    const topic = q.topic || "Unknown";
    const key = `${subject}|||${chapter}|||${topic}`;
    const current = topicMap.get(key) || { subject, chapter, topic, count: 0 };
    current.count += 1;
    topicMap.set(key, current);
    if (q.difficulty === "easy") difficultyCoverage.easy += 1;
    if (q.difficulty === "medium") difficultyCoverage.medium += 1;
    if (q.difficulty === "hard") difficultyCoverage.hard += 1;
  }

  return { topicCoverage: [...topicMap.values()], difficultyCoverage };
}

function toSimpleExistingTest(test: any) {
  if (!test) return null;
  return { _id: String(test._id), title: test.title, paper: test.paper, date: test.date || "", mode: test.mode || "", questionCount: test.questionCount || 0 };
}

function toSimpleUsedQuestions(items: any[]) {
  return items.slice(0, 25).map((item) => ({ _id: item._id ? String(item._id) : "", testId: item.testId ? String(item.testId) : "", questionHash: item.questionHash, question: item.question, topic: item.topic || "" }));
}

export async function validateUploadPayload(data: TestUploadInput, allowExistingTestId?: string) {
  const trimInfo = getTrimInfo(data);
  const normalizedData = normalizeUploadData(data);
  const questionHashes = normalizedData.questions.map((q) => questionHash(q.question));
  const optionHashes = normalizedData.questions.map((q) => optionsHash(q.options));
  const seenHashes = new Set<string>();
  const duplicateInside = new Set<string>();

  for (const hash of questionHashes) {
    if (seenHashes.has(hash)) duplicateInside.add(hash);
    else seenHashes.add(hash);
  }

  const fingerprint = testFingerprint(normalizedData.title, normalizedData.paper, questionHashes);
  const existingTest = await TestModel.findOne({
    fingerprint,
    ...(allowExistingTestId ? { _id: { $ne: allowExistingTestId } } : {}),
  }).lean();

  const used = questionHashes.length
    ? await UsedQuestionModel.find({
        questionHash: { $in: questionHashes },
        ...(allowExistingTestId ? { testId: { $ne: allowExistingTestId } } : {}),
      })
        .select("question questionHash testId topic")
        .lean()
    : [];

  const simpleExistingTest = toSimpleExistingTest(existingTest);
  const simpleUsed = toSimpleUsedQuestions(used);
  const valid = duplicateInside.size === 0 && !simpleExistingTest;

  let reason = "";
  if (duplicateInside.size > 0) reason = "Duplicate questions found inside the first 100 questions.";
  else if (simpleExistingTest) reason = "This exact test already exists. Delete it, replace it, or change title/questions.";

  return {
    valid,
    reason,
    fingerprint,
    questionHashes,
    optionHashes,
    duplicateInside: [...duplicateInside],
    existingTest: simpleExistingTest,
    used: simpleUsed,
    warnings: simpleUsed.length ? [`${simpleUsed.length} question(s) were seen in earlier tests. Upload is still allowed for revision.`] : [],
    trimInfo,
    stats: {
      questionCount: normalizedData.questions.length,
      originalQuestionCount: trimInfo.originalQuestionCount,
      acceptedQuestionCount: trimInfo.acceptedQuestionCount,
      ignoredQuestionCount: trimInfo.ignoredQuestionCount,
      maxAllowedQuestions: trimInfo.maxAllowedQuestions,
      wasTrimmed: trimInfo.wasTrimmed,
      ...computeCoverage(normalizedData.questions),
    },
  };
}

function buildTestUpdate(normalizedData: TestUploadInput, validation: Awaited<ReturnType<typeof validateUploadPayload>>, userId?: string) {
  const { topicCoverage, difficultyCoverage } = computeCoverage(normalizedData.questions);
  const dayNumber = normalizedData.date ? getDayNumber(normalizedData.date) : undefined;
  const dayKey = normalizedData.date ? makeDayKey(normalizedData.date) : undefined;

  return {
    title: normalizedData.title,
    examName: normalizedData.examName || "Rajasthan Computer Instructor",
    paperName: normalizedData.paperName || (normalizedData.paper === "paper2" ? "Paper 2" : "Paper 1"),
    description: normalizedData.description || "",
    paper: normalizedData.paper,
    mode: normalizedData.mode || "daily",
    category: normalizedData.category || "",
    subject: normalizedData.subject || "",
    date: normalizedData.date,
    dayNumber,
    dayKey,
    durationMinutes: normalizedData.durationMinutes || 120,
    totalMarks: normalizedData.totalMarks || 100,
    negativeMarking: normalizedData.negativeMarking || "1/3",
    questionCount: normalizedData.questions.length,
    fingerprint: validation.fingerprint,
    tags: normalizedData.tags || [],
    topicCoverage,
    difficultyCoverage,
    ...(userId ? { createdBy: userId } : {}),
  };
}

function buildQuestionDocs(testId: any, normalizedData: TestUploadInput, validation: Awaited<ReturnType<typeof validateUploadPayload>>) {
  return normalizedData.questions.map((q, index) => ({
    testId,
    order: index + 1,
    question: q.question,
    questionHash: validation.questionHashes[index],
    optionHash: validation.optionHashes[index],
    options: q.options,
    answer: q.answer,
    explanation: q.explanation,
    subject: q.subject,
    chapter: q.chapter,
    topic: q.topic,
    subtopic: q.subtopic || "",
    difficulty: q.difficulty,
    importance: q.importance,
    sourceHint: q.sourceHint || "",
  }));
}

export async function createTestFromUpload(data: TestUploadInput, userId: string, ip = "") {
  const trimInfo = getTrimInfo(data);
  const normalizedData = normalizeUploadData(data);
  const validation = await validateUploadPayload(data);

  if (!validation.valid) return { ok: false as const, validation };

  let createdTestId: any = null;
  try {
    const test = await TestModel.create(buildTestUpdate(normalizedData, validation, userId));
    createdTestId = test._id;
    const questionDocs = buildQuestionDocs(test._id, normalizedData, validation);

    await QuestionModel.insertMany(questionDocs, { ordered: true });
    await UsedQuestionModel.insertMany(
      questionDocs.map((q) => ({ questionHash: q.questionHash, optionHash: q.optionHash, question: q.question, testId: test._id, paper: test.paper, topic: q.topic })),
      { ordered: false }
    ).catch(() => null);

    await AuditLogModel.create({
      userId,
      action: "CREATE_TEST",
      entity: "Test",
      entityId: String(test._id),
      details: { title: test.title, originalQuestionCount: trimInfo.originalQuestionCount, acceptedQuestionCount: trimInfo.acceptedQuestionCount, ignoredQuestionCount: trimInfo.ignoredQuestionCount, storedQuestionCount: normalizedData.questions.length },
      ip,
    });

    return { ok: true as const, test, validation: { ...validation, trimInfo, stats: { ...validation.stats, originalQuestionCount: trimInfo.originalQuestionCount, acceptedQuestionCount: trimInfo.acceptedQuestionCount, ignoredQuestionCount: trimInfo.ignoredQuestionCount, wasTrimmed: trimInfo.wasTrimmed } } };
  } catch (error) {
    if (createdTestId) {
      await Promise.allSettled([TestModel.findByIdAndDelete(createdTestId), QuestionModel.deleteMany({ testId: createdTestId }), UsedQuestionModel.deleteMany({ testId: createdTestId })]);
    }
    throw error;
  }
}

export async function replaceTestQuestions(testId: string, data: TestUploadInput, userId: string, ip = "") {
  const trimInfo = getTrimInfo(data);
  const normalizedData = normalizeUploadData(data);
  const validation = await validateUploadPayload(data, testId);

  if (!validation.valid) return { ok: false as const, validation };

  await QuestionModel.deleteMany({ testId });
  await UsedQuestionModel.deleteMany({ testId });

  const test = await TestModel.findByIdAndUpdate(testId, buildTestUpdate(normalizedData, validation), { new: true });
  if (!test) return { ok: false as const, validation: { ...validation, valid: false, reason: "Test not found for replacement." } };

  const questionDocs = buildQuestionDocs(testId, normalizedData, validation);

  try {
    await QuestionModel.insertMany(questionDocs, { ordered: true });
    await UsedQuestionModel.insertMany(
      questionDocs.map((q) => ({ questionHash: q.questionHash, optionHash: q.optionHash, question: q.question, testId, paper: normalizedData.paper, topic: q.topic })),
      { ordered: false }
    ).catch(() => null);

    await AuditLogModel.create({
      userId,
      action: "REPLACE_TEST",
      entity: "Test",
      entityId: testId,
      details: { title: normalizedData.title, originalQuestionCount: trimInfo.originalQuestionCount, acceptedQuestionCount: trimInfo.acceptedQuestionCount, ignoredQuestionCount: trimInfo.ignoredQuestionCount, storedQuestionCount: normalizedData.questions.length },
      ip,
    });

    return { ok: true as const, test, validation: { ...validation, trimInfo, stats: { ...validation.stats, originalQuestionCount: trimInfo.originalQuestionCount, acceptedQuestionCount: trimInfo.acceptedQuestionCount, ignoredQuestionCount: trimInfo.ignoredQuestionCount, wasTrimmed: trimInfo.wasTrimmed } } };
  } catch (error) {
    await Promise.allSettled([QuestionModel.deleteMany({ testId }), UsedQuestionModel.deleteMany({ testId })]);
    throw error;
  }
}
