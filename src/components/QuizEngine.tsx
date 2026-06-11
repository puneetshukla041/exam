"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "./ToastProvider";

type Option = "A" | "B" | "C" | "D";
type StudyMode = "learning" | "exam";

export default function QuizEngine({ attempt, questions, answers }: { attempt: any; questions: any[]; answers: any[] }) {
  const [index, setIndex] = useState(0);
  const [answerMap, setAnswerMap] = useState<Record<string, any>>(() => Object.fromEntries(answers.map((a: any) => [String(a.questionId), a])));
  const [elapsed, setElapsed] = useState(attempt.elapsedSeconds || 0);
  const [full, setFull] = useState(false);
  const [studyMode, setStudyMode] = useState<StudyMode>("learning");
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const timeOnQuestion = useRef(0);
  const elapsedRef = useRef(attempt.elapsedSeconds || 0);
  const submittedRef = useRef(false);
  const router = useRouter();
  const toast = useToast();

  const q = questions[index];
  const a = q ? answerMap[String(q._id)] : null;
  const remaining = Math.max(0, (attempt.durationMinutes || 120) * 60 - elapsed);
  const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
  const ss = String(remaining % 60).padStart(2, "0");

  const stats = useMemo(() => {
    const vals = Object.values(answerMap);
    const attempted = vals.filter((x: any) => x.selectedOption).length;
    const correct = vals.filter((x: any) => x.isCorrect).length;
    const skipped = vals.filter((x: any) => x.isSkipped).length;
    const bookmarked = vals.filter((x: any) => x.isBookmarked).length;
    return { attempted, correct, skipped, bookmarked, wrong: attempted - correct };
  }, [answerMap]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`bci-notes-${attempt._id}`);
      if (saved) setNotes(JSON.parse(saved));
      const mode = localStorage.getItem("bci-study-mode");
      if (mode === "exam" || mode === "learning") setStudyMode(mode);
    } catch {}
  }, [attempt._id]);

  useEffect(() => {
    try { localStorage.setItem(`bci-notes-${attempt._id}`, JSON.stringify(notes)); } catch {}
  }, [notes, attempt._id]);

  useEffect(() => {
    try { localStorage.setItem("bci-study-mode", studyMode); } catch {}
  }, [studyMode]);

  useEffect(() => {
    const id = setInterval(() => {
      elapsedRef.current += 1;
      setElapsed(elapsedRef.current);
      timeOnQuestion.current += 1;
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      fetch(`/api/attempts/${attempt._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ elapsedSeconds: elapsedRef.current }),
      }).catch(() => null);
    }, 12000);
    return () => clearInterval(id);
  }, [attempt._id]);

  useEffect(() => {
    if (remaining === 0 && !submittedRef.current) submit(true);
  }, [remaining]);

  if (!q) return <div className="card p-8 text-center">No questions found in this test.</div>;

  const save = async (payload: any) => {
    const timeSpentSeconds = (a?.timeSpentSeconds || 0) + timeOnQuestion.current;
    timeOnQuestion.current = 0;
    const optimistic = {
      ...(a || {}),
      questionId: q._id,
      selectedOption: payload.isSkipped ? undefined : payload.selectedOption ?? a?.selectedOption,
      isSkipped: Boolean(payload.isSkipped),
      isBookmarked: payload.isBookmarked ?? a?.isBookmarked ?? false,
      correctOption: q.answer,
      isCorrect: Boolean(!payload.isSkipped && (payload.selectedOption ?? a?.selectedOption) === q.answer),
      timeSpentSeconds,
    };
    setAnswerMap((prev) => ({ ...prev, [String(q._id)]: optimistic }));

    const res = await fetch(`/api/attempts/${attempt._id}/answers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ questionId: q._id, timeSpentSeconds, ...payload }),
    });
    const json = await res.json();
    if (!res.ok) return toast.push(json.message || "Answer not saved", "error");
    setAnswerMap((prev) => ({ ...prev, [String(q._id)]: json.data.answer }));
  };

  const submit = async (force = false) => {
    if (submittedRef.current || submitting) return;
    if (!force && !confirm("Submit test now?")) return;
    submittedRef.current = true;
    setSubmitting(true);
    const res = await fetch(`/api/attempts/${attempt._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "submit", elapsedSeconds: elapsedRef.current }),
    });
    if (res.ok) {
      toast.push(force ? "Time over. Test submitted." : "Test submitted", "success");
      router.push(`/review/${attempt._id}`);
    } else {
      submittedRef.current = false;
      setSubmitting(false);
      toast.push("Submit failed", "error");
    }
  };

  const Container = ({ children }: { children: ReactNode }) => <div className={full ? "fullscreen-exam" : ""}>{children}</div>;
  const answered = Boolean(a?.selectedOption);
  const isCorrect = Boolean(answered && a?.selectedOption === q.answer);
  const noteKey = String(q._id);

  const optionStyle = (key: Option) => {
    const selected = a?.selectedOption === key;
    const correct = q.answer === key;
    if (studyMode === "learning" && answered) {
      if (correct) return { borderColor: "#16a34a", background: "rgba(22,163,74,.14)" };
      if (selected && !correct) return { borderColor: "#dc2626", background: "rgba(220,38,38,.14)" };
    }
    return { borderColor: selected ? "#2563eb" : "var(--border)", background: selected ? "rgba(37,99,235,.12)" : "var(--panel)" };
  };

  const navStyle = (question: any, i: number) => {
    const ans = answerMap[String(question._id)];
    if (i === index) return { background: "#2563eb", color: "white" };
    if (ans?.selectedOption) {
      if (ans.selectedOption === question.answer) return { background: "#dcfce7", color: "#166534" };
      return { background: "#fee2e2", color: "#991b1b" };
    }
    if (ans?.isSkipped) return { background: "#fef3c7", color: "#92400e" };
    if (ans?.isBookmarked) return { background: "#ede9fe", color: "#6d28d9" };
    return { background: "var(--panel-2)", color: "var(--text)" };
  };

  const goNext = () => setIndex((current) => Math.min(questions.length - 1, current + 1));
  const goPrev = () => setIndex((current) => Math.max(0, current - 1));

  const skipAndNext = async () => {
    await save({ isSkipped: true, isBookmarked: a?.isBookmarked });
    goNext();
  };

  return (
    <Container>
      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="card p-5">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-muted">{attempt.testTitle} • Q {index + 1}/{questions.length}</p>
              <p className="text-lg font-medium">{studyMode === "learning" ? "Learning Mode" : "Exam Mode"}</p>
            </div>
            <div className="flex items-center gap-3">
              <select value={studyMode} onChange={(e) => setStudyMode(e.target.value as StudyMode)} className="rounded-xl border px-3 py-2 text-sm font-medium" style={{ background: "var(--panel-2)", borderColor: "var(--border)" }}>
                <option value="learning">Learning Mode</option>
                <option value="exam">Exam Mode</option>
              </select>
              <div className="rounded-2xl bg-red-100 px-4 py-2 text-lg font-medium text-red-700">{mm}:{ss}</div>
            </div>
          </div>

          <div className="mini-card p-5">
            <div className="mb-3 flex flex-wrap gap-2 text-xs font-medium">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">{q.subject}</span>
              <span className="rounded-full bg-slate-200 dark:bg-zinc-900 px-3 py-1 text-zinc-700 dark:text-zinc-100">{q.topic}</span>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-700">{q.difficulty}</span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">{q.importance}</span>
            </div>
            <p className="text-base font-medium leading-8">{q.question}</p>
          </div>

          <div className="mt-5 grid gap-3">
            {(["A", "B", "C", "D"] as Option[]).map((key) => (
              <button key={key} onClick={() => save({ selectedOption: key, isSkipped: false, isBookmarked: a?.isBookmarked })} className="rounded-2xl border p-4 text-left font-bold hover:scale-[1.005]" style={optionStyle(key)}>
                <span className="mr-3 rounded-full bg-slate-100 dark:bg-zinc-950 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-100">{key}</span>
                {q.options[key]}
              </button>
            ))}
          </div>

          {studyMode === "learning" && answered ? (
            <div className={`mt-5 rounded-2xl border p-4 ${isCorrect ? "border-green-200 bg-green-50 text-green-800 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-200" : "border-red-200 bg-red-50 text-red-800 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-200"}`}>
              <p className="text-lg font-medium">{isCorrect ? "Correct" : `Wrong. Correct answer is ${q.answer}`}</p>
              <p className="mt-2 text-sm"><b>Explanation:</b> {q.explanation || "No explanation available."}</p>
              {q.sourceHint ? <p className="mt-2 text-xs"><b>Source:</b> {q.sourceHint}</p> : null}
            </div>
          ) : null}

          <div className="mt-5 rounded-2xl border p-4" style={{ borderColor: "var(--border)" }}>
            <label className="text-sm font-medium">Personal Note</label>
            <textarea value={notes[noteKey] || ""} onChange={(e) => setNotes((prev) => ({ ...prev, [noteKey]: e.target.value }))} placeholder="Write memory trick / doubt / revision note here..." className="mt-2 w-full rounded-xl border px-3 py-2 text-sm outline-none" style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} />
          </div>

          <div className="mt-5 flex flex-wrap justify-between gap-3">
            <button onClick={goPrev} className="rounded-xl border px-5 py-3 font-medium" style={{ borderColor: "var(--border)" }}>Previous</button>
            <div className="flex flex-wrap gap-3">
              <button onClick={skipAndNext} className="rounded-xl border px-5 py-3 font-medium" style={{ borderColor: "var(--border)" }}>Skip & Next</button>
              <button onClick={() => save({ isSkipped: a?.isSkipped, selectedOption: a?.selectedOption, isBookmarked: !a?.isBookmarked })} className="rounded-xl border px-5 py-3 font-medium" style={{ borderColor: "var(--border)" }}>{a?.isBookmarked ? "Unbookmark" : "Bookmark"}</button>
              <button onClick={goNext} className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white">Next</button>
            </div>
          </div>
        </div>

        <aside className="card p-5">
          <div className="flex gap-2">
            <button onClick={() => setFull(!full)} className="rounded-xl border px-4 py-2 text-sm font-medium" style={{ borderColor: "var(--border)" }}>{full ? "Exit Full Screen" : "Full Screen"}</button>
            <button onClick={() => submit(false)} disabled={submitting} className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-50">Submit</button>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 text-center">
            <div className="mini-card p-3"><b>{stats.attempted}</b><p className="text-xs text-muted">Attempted</p></div>
            <div className="mini-card p-3"><b>{questions.length - stats.attempted}</b><p className="text-xs text-muted">Not Attempted</p></div>
            <div className="mini-card p-3"><b>{stats.correct}</b><p className="text-xs text-muted">Correct</p></div>
            <div className="mini-card p-3"><b>{stats.wrong}</b><p className="text-xs text-muted">Wrong</p></div>
            <div className="mini-card p-3"><b>{stats.skipped}</b><p className="text-xs text-muted">Skipped</p></div>
            <div className="mini-card p-3"><b>{stats.bookmarked}</b><p className="text-xs text-muted">Bookmarked</p></div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold text-muted">
            <span className="rounded-full bg-green-100 px-2 py-1 text-green-700">Green correct</span>
            <span className="rounded-full bg-red-100 px-2 py-1 text-red-700">Red wrong</span>
            <span className="rounded-full bg-yellow-100 px-2 py-1 text-yellow-700">Yellow skipped</span>
            <span className="rounded-full bg-blue-100 px-2 py-1 text-blue-700">Blue current</span>
          </div>

          <div className="mt-5 grid grid-cols-5 gap-2">
            {questions.map((question: any, i: number) => (
              <button key={question._id} onClick={() => setIndex(i)} className="h-10 rounded-xl text-sm font-medium" style={navStyle(question, i)}>{i + 1}</button>
            ))}
          </div>
        </aside>
      </div>
    </Container>
  );
}
