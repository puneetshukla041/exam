"use client";

import { useEffect, useMemo, useState } from "react";
import type { LearningTopic, LearningQuestion } from "@/lib/paper1Learning";

function keyFor(topicId: string) { return `bci-learning-progress-${topicId}`; }

export default function LearningTopicClient({ topic, microQuiz }: { topic: LearningTopic; microQuiz: LearningQuestion[] }) {
  const [completed, setCompleted] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [note, setNote] = useState("");
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const score = useMemo(() => microQuiz.reduce((sum, q, i) => sum + (answers[i] === q.answer ? 1 : 0), 0), [answers, microQuiz]);

  useEffect(() => {
    const saved = localStorage.getItem(keyFor(topic.id));
    if (!saved) return;
    try {
      const data = JSON.parse(saved);
      setCompleted(Boolean(data.completed));
      setBookmarked(Boolean(data.bookmarked));
      setNote(data.note || "");
      setAnswers(data.answers || {});
    } catch {}
  }, [topic.id]);

  useEffect(() => {
    localStorage.setItem(keyFor(topic.id), JSON.stringify({ completed, bookmarked, note, answers, updatedAt: new Date().toISOString() }));
  }, [topic.id, completed, bookmarked, note, answers]);

  return (
    <div className="space-y-5">
      <div className="card p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            <p className="text-xs text-muted">Day {topic.day} · {topic.bucket} · {topic.priority}</p>
            <p className="text-lg font-medium">{topic.title}</p>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <button onClick={() => setBookmarked((v) => !v)} className="rounded-xl border px-4 py-2 font-medium" style={{ borderColor: "var(--border)" }}>{bookmarked ? "Bookmarked" : "Bookmark"}</button>
            <button onClick={() => setCompleted((v) => !v)} className="rounded-xl border px-4 py-2 font-medium" style={{ borderColor: "var(--border)" }}>{completed ? "Completed" : "Mark complete"}</button>
            <a href={`/api/learning/${topic.id}/questions`} target="_blank" className="rounded-xl bg-blue-600 px-4 py-2 font-medium text-white">100 Q JSON</a>
            <button onClick={() => window.print()} className="rounded-xl border px-4 py-2 font-medium" style={{ borderColor: "var(--border)" }}>Print/PDF</button>
          </div>
        </div>
      </div>

      <section className="card p-5 space-y-5">
        <div className="note-box p-4">
          <p className="text-sm text-muted">Why this matters</p>
          <p className="mt-2 leading-7">{topic.why}</p>
        </div>

        <div>
          <p className="mb-3 text-sm text-muted">Concepts to master</p>
          <div className="flex flex-wrap gap-2">
            {topic.concepts.map((concept) => <span key={concept} className="rounded-full border px-3 py-1 text-sm" style={{ borderColor: "var(--border)" }}>{concept}</span>)}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_380px]">
          <div className="space-y-4">
            {topic.notes.map((noteBlock) => (
              <article key={noteBlock.heading} className="note-box p-4">
                <p className="text-sm font-medium text-muted">{noteBlock.heading}</p>
                <p className="mt-2 whitespace-pre-line leading-8">{noteBlock.body}</p>
              </article>
            ))}
          </div>
          <aside className="space-y-4">
            {topic.tables.map((table) => (
              <div key={table.title} className="rounded-2xl border p-4" style={{ borderColor: "var(--border)" }}>
                <p className="mb-3 text-sm font-medium text-muted">{table.title}</p>
                <div className="overflow-x-auto">
                  <table className="table-clean text-sm">
                    <thead><tr>{table.headers.map((h) => <th key={h}>{h}</th>)}</tr></thead>
                    <tbody>{table.rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              </div>
            ))}
          </aside>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="note-box p-4"><p className="text-sm font-medium text-muted">PYQ patterns</p><ul className="mt-3 list-disc space-y-2 pl-5 text-sm">{topic.pyqPatterns.map((x) => <li key={x}>{x}</li>)}</ul></div>
          <div className="note-box p-4"><p className="text-sm font-medium text-muted">Common mistakes</p><ul className="mt-3 list-disc space-y-2 pl-5 text-sm">{topic.mistakes.map((x) => <li key={x}>{x}</li>)}</ul></div>
          <div className="note-box p-4"><p className="text-sm font-medium text-muted">Exam tips</p><ul className="mt-3 list-disc space-y-2 pl-5 text-sm">{topic.tips.map((x) => <li key={x}>{x}</li>)}</ul></div>
        </div>

        <div className="note-box p-4">
          <label className="text-sm font-medium text-muted">Personal note for this topic</label>
          <textarea value={note} onChange={(e) => setNote(e.target.value)} className="mt-3 min-h-28 w-full rounded-xl border px-3 py-2 outline-none" placeholder="Write your own memory trick, doubt, or one-line revision here." />
        </div>
      </section>

      <section className="card p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <p className="text-base font-medium">Micro quiz</p>
          <p className="text-sm text-muted">Score {score}/{microQuiz.length}</p>
        </div>
        <div className="space-y-4">
          {microQuiz.map((q, i) => {
            const selected = answers[i];
            const locked = Boolean(selected);
            return (
              <div key={q.question} className="mini-card p-4">
                <p className="leading-7">{i + 1}. {q.question.replace(/^\d+\.\s*/, "")}</p>
                <div className="mt-3 grid gap-2 md:grid-cols-2">
                  {(["A", "B", "C", "D"] as const).map((key) => {
                    const isCorrect = q.answer === key;
                    const isSelected = selected === key;
                    const color = locked && isCorrect ? "border-green-500 bg-green-500/10" : locked && isSelected && !isCorrect ? "border-red-500 bg-red-500/10" : "";
                    return <button key={key} onClick={() => !locked && setAnswers((prev) => ({ ...prev, [i]: key }))} className={`rounded-xl border p-3 text-left text-sm ${color}`} style={{ borderColor: locked && (isCorrect || isSelected) ? undefined : "var(--border)" }}><span className="mr-2 text-xs text-muted">{key}</span>{q.options[key]}</button>;
                  })}
                </div>
                {locked ? <p className="mt-3 text-sm text-muted">Answer: {q.answer}. {q.explanation}</p> : null}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
