"use client";

import { useEffect, useMemo, useState, useTransition, type ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { getTodayDateOnly, getPaperByDate, getPaperLabel, buildDailyTitle, formatDateForDisplay } from "@/lib/date";
import { normalizeRawUploadPayload } from "@/lib/uploadNormalizer";
import { useToast } from "./ToastProvider";

const MAX_UPLOAD_QUESTIONS = 100;
const sampleDate = getTodayDateOnly();
const samplePaper = getPaperByDate(sampleDate);

const sample = normalizeRawUploadPayload({
  exam_name: "Rajasthan Computer Instructor",
  paper: getPaperLabel(samplePaper),
  date: sampleDate,
  durationMinutes: 120,
  mode: "daily",
  title: buildDailyTitle(sampleDate, samplePaper),
  category: getPaperLabel(samplePaper),
  subject: samplePaper === "paper1" ? "Rajasthan GK" : "Computer Science",
  totalMarks: 100,
  negativeMarking: "1/3",
  questions: [
    {
      question: "Which is the largest salt water lake of Rajasthan?",
      options: { A: "Pushkar Lake", B: "Sambhar Lake", C: "Nakki Lake", D: "Jaisamand Lake" },
      answer: "B",
      explanation: "Sambhar Lake is the largest inland salt water lake of Rajasthan.",
      subject: "Rajasthan GK",
      chapter: "Rajasthan Geography",
      topic: "Lakes",
      difficulty: "easy",
      importance: "high",
      sourceHint: "Rajasthan geography PYQ pattern"
    }
  ]
});

const sampleText = JSON.stringify(sample, null, 2);

type MetaState = {
  title: string;
  examName: string;
  paper: "paper1" | "paper2";
  paperName: string;
  date: string;
  durationMinutes: number;
  mode: "daily" | "mock" | "topic" | "weak" | "random";
  category: string;
  subject: string;
  totalMarks: number;
  negativeMarking: string;
  tags: string;
};

function metaFromPayload(payload: any): MetaState {
  return {
    title: payload?.title || "Untitled Test",
    examName: payload?.examName || "Rajasthan Computer Instructor",
    paper: payload?.paper === "paper2" ? "paper2" : "paper1",
    paperName: payload?.paperName || (payload?.paper === "paper2" ? "Paper 2" : "Paper 1"),
    date: payload?.date || getTodayDateOnly(),
    durationMinutes: Number(payload?.durationMinutes || 120),
    mode: payload?.mode || "daily",
    category: payload?.category || (payload?.paper === "paper2" ? "Paper 2" : "Paper 1"),
    subject: payload?.subject || (payload?.paper === "paper2" ? "Paper 2" : "Paper 1"),
    totalMarks: Number(payload?.totalMarks || 100),
    negativeMarking: payload?.negativeMarking || "1/3",
    tags: Array.isArray(payload?.tags) ? payload.tags.join(", ") : "daily",
  };
}

function normalizeQuestionText(text: unknown) {
  return String(text || "").toLowerCase().replace(/\s+/g, " ").replace(/[^a-z0-9\s]/g, "").trim();
}

function getLocalDuplicateQuestions(questions: any[]) {
  const seen = new Map<string, number>();
  const duplicates: string[] = [];
  questions.forEach((item, index) => {
    const normalized = normalizeQuestionText(item?.question);
    if (!normalized) return;
    if (seen.has(normalized)) duplicates.push(`Q${seen.get(normalized)} and Q${index + 1}`);
    else seen.set(normalized, index + 1);
  });
  return duplicates;
}

function getTopicCoverage(questions: any[]) {
  const map = new Map<string, number>();
  questions.forEach((item) => {
    const key = `${item?.subject || "Unknown"} / ${item?.topic || "Unknown"}`;
    map.set(key, (map.get(key) || 0) + 1);
  });
  return Array.from(map.entries()).map(([topic, count]) => ({ topic, count })).sort((a, b) => b.count - a.count);
}

function csvToRows(text: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    const next = text[i + 1];
    if (ch === '"' && quoted && next === '"') { cell += '"'; i += 1; continue; }
    if (ch === '"') { quoted = !quoted; continue; }
    if (ch === "," && !quoted) { row.push(cell); cell = ""; continue; }
    if ((ch === "\n" || ch === "\r") && !quoted) {
      if (ch === "\r" && next === "\n") i += 1;
      row.push(cell); rows.push(row); row = []; cell = ""; continue;
    }
    cell += ch;
  }
  row.push(cell); rows.push(row);
  return rows.filter((r) => r.some((c) => c.trim()));
}

function rowsToPayload(rows: any[]) {
  if (!rows.length) return { questions: [] };
  const headers = Object.keys(rows[0]).length ? Object.keys(rows[0]) : [];
  const questions = rows.map((row: any) => ({
    question: row.question || row.Question || row.text || row.Text || row[headers[0]],
    options: {
      A: row.A || row.OptionA || row.optionA || row[headers[1]],
      B: row.B || row.OptionB || row.optionB || row[headers[2]],
      C: row.C || row.OptionC || row.optionC || row[headers[3]],
      D: row.D || row.OptionD || row.optionD || row[headers[4]],
    },
    answer: row.answer || row.Answer || row.correctAnswer || row.Correct || row[headers[5]],
    explanation: row.explanation || row.Explanation || row.solution || row.Solution || "Review this explanation.",
    subject: row.subject || row.Subject || "Paper 1",
    chapter: row.chapter || row.Chapter || "Mixed",
    topic: row.topic || row.Topic || "Mixed Practice",
    subtopic: row.subtopic || row.Subtopic || "",
    difficulty: row.difficulty || row.Difficulty || "medium",
    importance: row.importance || row.Importance || "medium",
    sourceHint: row.sourceHint || row.Source || "",
  }));
  return { questions };
}

function isPaperLike(value: string) {
  return !value || /^paper\s*[12]$/i.test(value.trim()) || /^paper[12]$/i.test(value.trim());
}

function applyDailyAutoMeta(prev: MetaState, date: string): MetaState {
  const paper = getPaperByDate(date);
  const paperName = getPaperLabel(paper);
  return {
    ...prev,
    date,
    paper,
    paperName,
    mode: prev.mode || "daily",
    title: buildDailyTitle(date, paper),
    category: isPaperLike(prev.category) ? paperName : prev.category,
    subject: isPaperLike(prev.subject) ? paperName : prev.subject,
    tags: Array.from(new Set([...(prev.tags || "").split(",").map((tag) => tag.trim()).filter(Boolean), "daily", paper, date])).join(", "),
  };
}

export default function UploadWizard({ replaceTestId }: { replaceTestId?: string }) {
  const [text, setText] = useState(sampleText);
  const [parsed, setParsed] = useState<any>(sample);
  const [meta, setMeta] = useState<MetaState>(() => metaFromPayload(sample));
  const [isParsing, setIsParsing] = useState(false);
  const [validation, setValidation] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [loadingLabel, setLoadingLabel] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    setIsParsing(true);
    const id = window.setTimeout(() => {
      try {
        const raw = JSON.parse(text);
        const normalized = normalizeRawUploadPayload(raw);
        setParsed(normalized);
        setMeta(metaFromPayload(normalized));
      } catch {
        setParsed(null);
      } finally {
        setIsParsing(false);
      }
    }, 160);
    return () => window.clearTimeout(id);
  }, [text]);

  const allQuestions = useMemo(() => (Array.isArray(parsed?.questions) ? parsed.questions : []), [parsed]);
  const uploadQuestions = useMemo(() => allQuestions.slice(0, MAX_UPLOAD_QUESTIONS), [allQuestions]);
  const originalCount = allQuestions.length;
  const acceptedCount = uploadQuestions.length;
  const ignoredCount = Math.max(0, originalCount - MAX_UPLOAD_QUESTIONS);
  const willTrim = ignoredCount > 0;
  const localDuplicates = useMemo(() => getLocalDuplicateQuestions(uploadQuestions), [uploadQuestions]);
  const topicCoverage = useMemo(() => getTopicCoverage(uploadQuestions), [uploadQuestions]);

  const finalPayload = useMemo(() => ({
    ...parsed,
    title: meta.title,
    examName: meta.examName,
    paper: meta.paper,
    paperName: meta.paperName,
    date: meta.date,
    durationMinutes: Number(meta.durationMinutes || 120),
    mode: meta.mode,
    category: meta.category,
    subject: meta.subject,
    totalMarks: Number(meta.totalMarks || 100),
    negativeMarking: meta.negativeMarking,
    tags: meta.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
    questions: uploadQuestions,
  }), [parsed, meta, uploadQuestions]);

  const serverValidationFailed = validation?.valid === false;
  const canUpload = Boolean(parsed) && acceptedCount > 0 && localDuplicates.length === 0 && !serverValidationFailed && !isParsing && !loading;

  const runServer = async (url: string) => {
    const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(finalPayload) });
    const json = await res.json();
    if (!res.ok) throw Object.assign(new Error(json.message || "Request failed"), { details: json.details || json.data || json });
    return json.data || json;
  };

  const validate = async () => {
    if (!parsed) return toast.push("Invalid JSON. Check brackets, commas and quotes.", "error");
    if (!acceptedCount) return toast.push("No questions detected in this file.", "error");
    if (localDuplicates.length) {
      const data = { valid: false, reason: `Duplicate questions detected inside first 100 questions: ${localDuplicates.length}`, duplicateInside: localDuplicates };
      setValidation(data);
      return toast.push(data.reason, "error");
    }
    setLoading(true); setLoadingLabel("Validating test and metadata...");
    try {
      const data = await runServer("/api/tests/validate");
      setValidation(data);
      if (data.valid === false) toast.push(data.reason || "Validation failed", "error");
      else toast.push(data.warnings?.[0] || "Validation complete. Ready to upload.", data.warnings?.length ? "info" : "success");
    } catch (error: any) {
      setValidation(error.details || null);
      toast.push(error.message || "Validation failed", "error");
    } finally {
      setLoading(false); setLoadingLabel("");
    }
  };

  const upload = async () => {
    if (!parsed) return toast.push("Invalid JSON. Check brackets, commas and quotes.", "error");
    if (!acceptedCount) return toast.push("No questions found.", "error");
    if (localDuplicates.length) return toast.push("Duplicate questions found inside first 100 questions.", "error");
    if (serverValidationFailed) return toast.push(validation?.reason || "Fix validation error before upload.", "error");
    setLoading(true); setLoadingLabel(replaceTestId ? "Replacing test..." : "Uploading test...");
    try {
      const url = replaceTestId ? `/api/tests/${replaceTestId}/replace` : "/api/tests";
      await runServer(url);
      toast.push(willTrim ? `Uploaded first ${MAX_UPLOAD_QUESTIONS} questions. Extra ${ignoredCount} ignored.` : "Test uploaded successfully", "success");
      startTransition(() => { router.push("/tests"); router.refresh(); });
    } catch (error: any) {
      setValidation(error.details || null);
      toast.push(error.message || "Upload failed", "error");
    } finally {
      setLoading(false); setLoadingLabel("");
    }
  };

  const readFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setLoading(true); setLoadingLabel(`Reading ${file.name}...`); setValidation(null);
    try {
      const name = file.name.toLowerCase();
      if (name.endsWith(".json")) {
        setText(await file.text());
        toast.push("JSON file loaded", "success");
      } else if (name.endsWith(".csv")) {
        const rows = csvToRows(await file.text());
        const [header, ...body] = rows;
        const objects = body.map((row) => Object.fromEntries(header.map((h, i) => [h.trim(), row[i] || ""])));
        setText(JSON.stringify(normalizeRawUploadPayload(rowsToPayload(objects)), null, 2));
        toast.push("CSV converted to JSON", "success");
      } else if (name.endsWith(".xlsx") || name.endsWith(".xls")) {
        const XLSX = await import("xlsx");
        const workbook = XLSX.read(await file.arrayBuffer(), { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(sheet, { defval: "" });
        setText(JSON.stringify(normalizeRawUploadPayload(rowsToPayload(rows)), null, 2));
        toast.push("Excel converted to JSON", "success");
      } else {
        toast.push("Upload JSON, CSV or Excel file. For ZIP, extract it first and upload the JSON/Excel inside.", "error");
      }
    } catch {
      toast.push("Could not read this file.", "error");
    } finally {
      setLoading(false); setLoadingLabel(""); event.target.value = "";
    }
  };

  const inputClass = "mt-2 w-full rounded-xl border px-3 py-2 text-sm outline-none";

  return (
    <div className="relative grid gap-6 lg:grid-cols-[1fr_410px]">
      {(loading || isParsing || isPending) ? (
        <div className="absolute inset-0 z-20 flex min-h-80 items-start justify-center rounded-[24px] bg-white/75 pt-24 backdrop-blur-sm dark:bg-black/85">
          <div className="card w-full max-w-sm p-6 text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
            <p className="mt-4 font-medium">{loadingLabel || (isParsing ? "Reading JSON..." : "Loading...")}</p>
            <p className="mt-1 text-sm text-muted">Large files stay responsive while the app parses data.</p>
          </div>
        </div>
      ) : null}

      <div className="space-y-5">
        <div className="card p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-lg font-medium">{replaceTestId ? "Replace Test" : "Upload Test"}</p>
              <p className="text-sm text-muted">Paste JSON or upload JSON/CSV/Excel. Metadata is auto-detected and editable before saving.</p>
            </div>
            <span className={`rounded-full px-3 py-1 text-sm font-medium ${willTrim ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"}`}>{isParsing ? "Reading..." : `${originalCount} Q`}</span>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            <label className="text-sm font-bold">Exam Name<input value={meta.examName} onChange={(e) => setMeta({ ...meta, examName: e.target.value })} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} /></label>
            <label className="text-sm font-bold">Paper Type<select value={meta.paper} onChange={(e) => setMeta({ ...meta, paper: e.target.value as any, paperName: e.target.value === "paper2" ? "Paper 2" : "Paper 1" })} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }}><option value="paper1">Paper 1</option><option value="paper2">Paper 2</option></select></label>
            <label className="text-sm font-bold">Date<input type="date" value={meta.date} onChange={(e) => setMeta((prev) => applyDailyAutoMeta(prev, e.target.value))} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} /></label>
            <label className="text-sm font-bold xl:col-span-2">Title<input value={meta.title} onChange={(e) => setMeta({ ...meta, title: e.target.value })} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} /></label>
            <label className="text-sm font-bold">Duration<input type="number" value={meta.durationMinutes} onChange={(e) => setMeta({ ...meta, durationMinutes: Number(e.target.value) })} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} /></label>
            <label className="text-sm font-bold">Category<input value={meta.category} onChange={(e) => setMeta({ ...meta, category: e.target.value })} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} /></label>
            <label className="text-sm font-bold">Subject<input value={meta.subject} onChange={(e) => setMeta({ ...meta, subject: e.target.value })} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} /></label>
            <label className="text-sm font-bold">Mode<select value={meta.mode} onChange={(e) => setMeta({ ...meta, mode: e.target.value as any })} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }}><option value="daily">Daily</option><option value="mock">Mock</option><option value="topic">Topic</option><option value="weak">Weak</option><option value="random">Random</option></select></label>
            <label className="text-sm font-bold">Total Marks<input type="number" value={meta.totalMarks} onChange={(e) => setMeta({ ...meta, totalMarks: Number(e.target.value) })} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} /></label>
            <label className="text-sm font-bold">Negative Marking<input value={meta.negativeMarking} onChange={(e) => setMeta({ ...meta, negativeMarking: e.target.value })} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} /></label>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border p-3 text-sm" style={{ borderColor: "var(--border)", background: "var(--panel-2)" }}>
            <button type="button" onClick={() => setMeta((prev) => applyDailyAutoMeta(prev, getTodayDateOnly()))} className="rounded-xl bg-emerald-600 px-4 py-2 font-medium text-white">Auto Today + Paper</button>
            <span className="font-bold text-muted">Auto daily plan: {formatDateForDisplay(meta.date)} = {meta.paperName}. Changing date updates Paper 1/Paper 2 automatically.</span>
          </div>
        </div>

        <div className="card p-5">
          {willTrim ? <div className="mb-4 rounded-2xl border border-orange-200 bg-orange-50 p-4 text-sm font-bold text-orange-700 dark:border-orange-900/40 dark:bg-orange-950/30 dark:text-orange-300">This file has {originalCount} questions. App will upload first {MAX_UPLOAD_QUESTIONS}; extra {ignoredCount} ignored.</div> : null}
          {localDuplicates.length ? <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-300">Duplicate questions detected inside first 100: {localDuplicates.length}</div> : null}
          {validation?.valid === false ? <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-300">{validation.reason || "Validation failed."}</div> : null}

          <textarea value={text} onChange={(e) => { setText(e.target.value); setValidation(null); }} spellCheck={false} className="h-[58vh] w-full rounded-2xl border bg-black p-4 font-mono text-sm text-white outline-none focus:ring-2 focus:ring-blue-500" style={{ borderColor: "var(--border)" }} />

          <div className="mt-4 flex flex-wrap gap-3">
            <label className="cursor-pointer rounded-xl border px-5 py-3 text-sm font-medium" style={{ borderColor: "var(--border)" }}>Choose File<input type="file" accept="application/json,.json,.csv,.xlsx,.xls" className="sr-only" disabled={loading || isParsing} onChange={readFile} /></label>
            <button disabled={loading || isParsing} onClick={validate} className="rounded-xl border px-5 py-3 text-sm font-medium disabled:opacity-50" style={{ borderColor: "var(--border)" }}>{loading ? "Checking..." : "Validate"}</button>
            <button disabled={!canUpload} onClick={upload} className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50">{replaceTestId ? "Replace" : "Upload First 100"}</button>
            <button disabled={loading || isParsing} onClick={() => { setText(sampleText); setValidation(null); }} className="rounded-xl border px-5 py-3 text-sm font-medium disabled:opacity-50" style={{ borderColor: "var(--border)" }}>Reset Sample</button>
          </div>
        </div>
      </div>

      <aside className="space-y-4">
        <div className="card p-5">
          <p className="text-lg font-medium">Preview</p>
          <div className="mt-3 space-y-1 text-sm text-muted">
            <p>Title: <b>{meta.title || "-"}</b></p><p>Exam: <b>{meta.examName}</b></p><p>Paper: <b>{meta.paperName}</b></p><p>Date: <b>{formatDateForDisplay(meta.date)} ({meta.date})</b></p><p>Duration: <b>{meta.durationMinutes} min</b></p><p>Mode: <b>{meta.mode}</b></p><p>JSON Questions: <b>{originalCount}</b></p><p>Questions to Upload: <b>{acceptedCount}</b></p><p>Extra Ignored: <b>{ignoredCount}</b></p>
          </div>
        </div>

        <div className="card p-5">
          <p className="text-lg font-medium">First Question Check</p>
          {uploadQuestions[0] ? <div className="mt-3 rounded-2xl bg-slate-100 dark:bg-zinc-950 p-3 text-sm dark:bg-black"><p className="font-medium">{uploadQuestions[0].question}</p><p className="mt-2 text-muted">A. {uploadQuestions[0].options?.A}</p><p className="text-muted">B. {uploadQuestions[0].options?.B}</p><p className="text-muted">C. {uploadQuestions[0].options?.C}</p><p className="text-muted">D. {uploadQuestions[0].options?.D}</p><p className="mt-2 font-bold text-green-600">Answer: {uploadQuestions[0].answer}</p></div> : <p className="mt-2 text-sm text-muted">No question detected.</p>}
        </div>

        <div className="card p-5">
          <p className="text-lg font-medium">Topic Coverage</p>
          {topicCoverage.length ? <div className="mt-3 max-h-64 space-y-2 overflow-auto text-sm">{topicCoverage.slice(0, 20).map((item) => <div key={item.topic} className="flex items-center justify-between gap-3 rounded-xl bg-slate-100 dark:bg-zinc-950 px-3 py-2 dark:bg-black"><span className="text-muted">{item.topic}</span><b>{item.count}</b></div>)}</div> : <p className="mt-2 text-sm text-muted">No topics detected.</p>}
        </div>

        <div className="card p-5">
          <p className="text-lg font-medium">Validation Stats</p>
          {validation ? <div className="mt-3 space-y-2 text-sm"><p>Valid: <b>{String(validation.valid ?? false)}</b></p>{validation.reason ? <p className="rounded-xl bg-red-50 p-3 font-bold text-red-700 dark:bg-red-950/30 dark:text-red-300">{validation.reason}</p> : null}{validation.warnings?.map((w: string) => <p key={w} className="rounded-xl bg-orange-50 p-3 font-bold text-orange-700 dark:bg-orange-950/30 dark:text-orange-300">{w}</p>)}<p>Accepted: <b>{validation.stats?.acceptedQuestionCount || acceptedCount}</b></p><p>Original: <b>{validation.stats?.originalQuestionCount || originalCount}</b></p><p>Ignored: <b>{validation.stats?.ignoredQuestionCount || ignoredCount}</b></p><p>Already seen warning: <b>{validation.used?.length || 0}</b></p></div> : <p className="mt-2 text-sm text-muted">Click validate to see upload stats.</p>}
        </div>
      </aside>
    </div>
  );
}
