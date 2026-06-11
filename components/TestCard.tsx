"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "./ToastProvider";
import ProgressBar from "./ProgressBar";
import { formatDateForDisplay } from "@/lib/date";

type Props = { test: any };

export default function TestCard({ test }: Props) {
  const router = useRouter();
  const toast = useToast();
  const attempt = test.latestAttempt;

  const start = async () => {
    const res = await fetch("/api/attempts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ testId: test._id, mode: test.mode }),
    });
    const json = await res.json();
    if (!res.ok) return toast.push(json.message || "Could not start test", "error");
    router.push(`/attempt/${json.data.attempt._id}`);
  };

  const deleteTest = async () => {
    if (!confirm("Delete this test and all attempts?")) return;
    const res = await fetch(`/api/tests/${test._id}`, { method: "DELETE" });
    if (res.ok) {
      toast.push("Test deleted", "success");
      router.refresh();
    } else {
      toast.push("Delete failed", "error");
    }
  };

  const paperLabel = test.paper === "paper1" ? "Paper 1" : "Paper 2";
  const topics = (test.topicCoverage || []).slice(0, 3).map((row: any) => row.topic).filter(Boolean);

  return (
    <div className="card p-5 animate-in">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase text-muted">
            {paperLabel} • {test.mode || "daily"} • {test.questionCount || 0} Q
          </p>
          <p className="mt-1 line-clamp-2 text-base font-medium">{test.title || "Untitled Test"}</p>
          <p className="mt-1 text-sm text-muted">
            {test.examName || "Rajasthan Computer Instructor"} • {formatDateForDisplay(test.date)} • {test.durationMinutes || 120} min
          </p>
        </div>
        <span className="shrink-0 rounded-full px-3 py-1 text-xs font-medium" style={{ background: test.paper === "paper1" ? "rgba(37,99,235,.12)" : "rgba(5,150,105,.12)", color: test.paper === "paper1" ? "#2563eb" : "#059669" }}>
          {paperLabel}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted">
        <span className="rounded-full bg-slate-100 dark:bg-zinc-950 px-3 py-1 dark:bg-zinc-950">{test.category || test.paperName || paperLabel}</span>
        <span className="rounded-full bg-slate-100 dark:bg-zinc-950 px-3 py-1 dark:bg-zinc-950">{test.subject || "Mixed"}</span>
        <span className="rounded-full bg-slate-100 dark:bg-zinc-950 px-3 py-1 dark:bg-zinc-950">Marks {test.totalMarks || 100}</span>
        <span className="rounded-full bg-slate-100 dark:bg-zinc-950 px-3 py-1 dark:bg-zinc-950">Neg {test.negativeMarking || "1/3"}</span>
      </div>

      {topics.length ? <p className="mt-3 text-sm text-muted">Top topics: {topics.join(", ")}</p> : null}

      <div className="mt-4">
        <ProgressBar value={attempt?.accuracy || 0} label={attempt ? "Last accuracy" : "Not attempted"} />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 text-center text-sm">
        <div className="mini-card p-3"><span className="font-medium">{attempt?.attempted || 0}</span><p className="text-xs text-muted">Attempted</p></div>
        <div className="mini-card p-3"><span className="font-medium">{attempt?.score ?? "-"}</span><p className="text-xs text-muted">Score</p></div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <button onClick={start} className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          {attempt?.status === "in-progress" ? "Resume" : "Start Learning"}
        </button>
        <Link href={`/tests/${test._id}`} className="rounded-xl border px-4 py-2 text-sm font-medium" style={{ borderColor: "var(--border)" }}>Manage</Link>
        {attempt?.status === "submitted" ? <Link href={`/review/${attempt._id}`} className="rounded-xl border px-4 py-2 text-sm font-medium" style={{ borderColor: "var(--border)" }}>Review</Link> : null}
        <button onClick={deleteTest} className="rounded-xl border px-4 py-2 text-sm font-medium text-red-600" style={{ borderColor: "var(--border)" }}>Delete</button>
      </div>
    </div>
  );
}
