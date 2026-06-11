import { buildDailyTitle, extractDateFromText, getPaperByDate, getPaperLabel, getTodayDateOnly, normalizeDateString } from "@/lib/date";

const MAX_QUESTIONS = 1000;

function clean(value: unknown, fallback = "") {
  const text = value === undefined || value === null ? fallback : String(value);
  return text.replace(/\s+/g, " ").trim();
}

function toNumber(value: unknown, fallback: number) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  const parsed = Number(String(value ?? "").replace(/[^0-9.]/g, ""));
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}


function normalizePaper(value: unknown, fallbackDate?: string) {
  const source = clean(value).toLowerCase();
  const compact = source.replace(/[\s_-]+/g, "");
  if (/\bpaper\s*(2|ii)\b/.test(source) || ["paper2", "paperii", "second", "p2"].includes(compact)) return "paper2" as const;
  if (/\bpaper\s*(1|i)\b/.test(source) || ["paper1", "paperi", "first", "p1"].includes(compact)) return "paper1" as const;
  if (/^2$|^ii$/i.test(source)) return "paper2" as const;
  if (/^1$|^i$/i.test(source)) return "paper1" as const;
  return fallbackDate ? getPaperByDate(fallbackDate) : "paper1";
}

function normalizeMode(value: unknown) {
  const text = clean(value || "daily").toLowerCase().replace(/[\s_-]+/g, "");
  if (["mock", "fullmock", "fulltest", "exam"].includes(text)) return "mock";
  if (["topic", "sectional", "chapter"].includes(text)) return "topic";
  if (["weak", "weaktopic", "wrong"].includes(text)) return "weak";
  if (["random", "mixed"].includes(text)) return "random";
  return "daily";
}

function normalizeDifficulty(value: unknown) {
  const text = clean(value || "medium").toLowerCase();
  if (text.startsWith("e") || text === "low") return "easy";
  if (text.startsWith("h") || text === "tough") return "hard";
  return "medium";
}

function normalizeImportance(value: unknown) {
  const text = clean(value || "medium").toLowerCase();
  if (text.startsWith("h") || text === "very high") return "high";
  if (text.startsWith("l")) return "low";
  return "medium";
}

function normalizeAnswer(value: unknown, options: Record<string, string>) {
  const raw = clean(value).toUpperCase();
  if (["A", "B", "C", "D"].includes(raw)) return raw;
  const optionMatch = raw.match(/OPTION\s*([ABCD])|^([ABCD])[).:-]/);
  const key = optionMatch?.[1] || optionMatch?.[2];
  if (key && ["A", "B", "C", "D"].includes(key)) return key;
  const answerText = clean(value).toLowerCase();
  for (const optionKey of ["A", "B", "C", "D"] as const) {
    if (clean(options[optionKey]).toLowerCase() === answerText) return optionKey;
  }
  return "A";
}

function pickOptions(raw: any) {
  const source = raw?.options ?? raw?.option ?? raw?.choices ?? raw?.answers ?? raw;
  if (Array.isArray(source)) {
    return {
      A: clean(source[0]),
      B: clean(source[1]),
      C: clean(source[2]),
      D: clean(source[3]),
    };
  }
  return {
    A: clean(source?.A ?? source?.a ?? source?.optionA ?? source?.option_a ?? source?.[0]),
    B: clean(source?.B ?? source?.b ?? source?.optionB ?? source?.option_b ?? source?.[1]),
    C: clean(source?.C ?? source?.c ?? source?.optionC ?? source?.option_c ?? source?.[2]),
    D: clean(source?.D ?? source?.d ?? source?.optionD ?? source?.option_d ?? source?.[3]),
  };
}

function normalizeQuestion(raw: any, index: number, meta: any) {
  const options = pickOptions(raw);
  const question = clean(
    raw?.question ?? raw?.questionText ?? raw?.question_text ?? raw?.text ?? raw?.q ?? raw?.prompt,
    `Question ${index + 1}`
  );
  const answer = normalizeAnswer(
    raw?.answer ?? raw?.correctAnswer ?? raw?.correct_answer ?? raw?.correct ?? raw?.ans,
    options
  );
  return {
    question,
    options,
    answer,
    explanation: clean(
      raw?.explanation ?? raw?.solution ?? raw?.reason ?? raw?.answerExplanation,
      "Review this concept from the uploaded source material."
    ),
    subject: clean(raw?.subject ?? raw?.section ?? meta.subject, meta.paper === "paper2" ? "Computer Science" : "Paper 1"),
    chapter: clean(raw?.chapter ?? raw?.unit ?? raw?.area ?? meta.category, meta.paper === "paper2" ? "Computer Instructor Paper 2" : "Computer Instructor Paper 1"),
    topic: clean(raw?.topic ?? raw?.subTopic ?? raw?.subtopic ?? raw?.tag, "Mixed Practice"),
    subtopic: clean(raw?.subtopic ?? raw?.subTopic ?? raw?.microTopic ?? ""),
    difficulty: normalizeDifficulty(raw?.difficulty ?? raw?.level),
    importance: normalizeImportance(raw?.importance ?? raw?.priority ?? raw?.weightage),
    sourceHint: clean(raw?.sourceHint ?? raw?.source ?? raw?.askedIn ?? raw?.pyq ?? ""),
  };
}

function extractQuestions(raw: any) {
  if (Array.isArray(raw)) return raw;
  if (Array.isArray(raw?.questions)) return raw.questions;
  if (Array.isArray(raw?.items)) return raw.items;
  if (Array.isArray(raw?.data)) return raw.data;
  if (Array.isArray(raw?.mcqs)) return raw.mcqs;
  if (Array.isArray(raw?.rows)) return raw.rows;
  return [];
}

export function normalizeRawUploadPayload(rawInput: any) {
  const raw = Array.isArray(rawInput) ? { questions: rawInput } : rawInput || {};
  const fallbackYear = Number(process.env.NEXT_PUBLIC_STUDY_START_DATE?.slice(0, 4)) || 2026;
  const detectedDate =
    normalizeDateString(raw.date ?? raw.exam_date ?? raw.examDate, fallbackYear) ||
    extractDateFromText(raw.title ?? raw.testName ?? raw.test_name ?? raw.name, fallbackYear) ||
    getTodayDateOnly();

  const rawPaperLike = raw.paper ?? raw.paperName ?? raw.paper_name ?? raw.paperType ?? raw.category ?? raw.title ?? raw.testName ?? raw.subject;
  const paper = normalizePaper(rawPaperLike, detectedDate);
  const paperName = clean(raw.paperName ?? raw.paper_name ?? raw.paperType, getPaperLabel(paper));
  const examName = clean(raw.examName ?? raw.exam_name ?? raw.exam ?? raw.name, "Rajasthan Computer Instructor");
  const category = clean(raw.category ?? raw.type ?? paperName, paperName);
  const subject = clean(raw.subject ?? raw.section ?? category, paperName);
  const title = clean(raw.title ?? raw.testName ?? raw.test_name, buildDailyTitle(detectedDate, paper));
  const durationMinutes = toNumber(raw.durationMinutes ?? raw.duration_minutes ?? raw.duration ?? raw.examDuration, 120);
  const totalMarks = toNumber(raw.totalMarks ?? raw.total_marks ?? raw.marks, 100);
  const mode = normalizeMode(raw.mode ?? raw.testMode ?? raw.test_mode);
  const questionsRaw = extractQuestions(raw).slice(0, MAX_QUESTIONS);
  const meta = { paper, paperName, category, subject };
  const tags = Array.isArray(raw.tags)
    ? raw.tags.map((tag: unknown) => clean(tag)).filter(Boolean)
    : clean(raw.tags)
        .split(",")
        .map((tag) => clean(tag))
        .filter(Boolean);

  const defaultTags = [mode, paper, subject, detectedDate]
    .map((tag) => clean(tag).toLowerCase().replace(/\s+/g, "-"))
    .filter(Boolean);

  return {
    title,
    examName,
    paperName,
    description: clean(raw.description ?? raw.desc ?? ""),
    paper,
    date: detectedDate,
    durationMinutes,
    mode,
    category,
    subject,
    totalMarks,
    negativeMarking: clean(raw.negativeMarking ?? raw.negative_marking ?? raw.negative, "1/3"),
    tags: Array.from(new Set([...tags, ...defaultTags])),
    questions: questionsRaw.map((item: any, index: number) => normalizeQuestion(item, index, meta)),
  };
}
