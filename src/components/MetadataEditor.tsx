"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "./ToastProvider";
import { buildDailyTitle, formatDateForDisplay, getPaperByDate, getPaperLabel, getTodayDateOnly } from "@/lib/date";

export default function MetadataEditor({ test }: { test: any }) {
  const [form, setForm] = useState({
    title: test.title || "",
    examName: test.examName || "Rajasthan Computer Instructor",
    paperName: test.paperName || (test.paper === "paper2" ? "Paper 2" : "Paper 1"),
    description: test.description || "",
    date: test.date || "",
    durationMinutes: test.durationMinutes || 120,
    category: test.category || "",
    subject: test.subject || "",
    totalMarks: test.totalMarks || 100,
    negativeMarking: test.negativeMarking || "1/3",
    tags: (test.tags || []).join(", "),
    isPublished: Boolean(test.isPublished),
  });
  const router = useRouter();
  const toast = useToast();

  const save = async () => {
    const payload = {
      ...form,
      durationMinutes: Number(form.durationMinutes),
      totalMarks: Number(form.totalMarks),
      tags: form.tags.split(",").map((x: string) => x.trim()).filter(Boolean),
    };
    const res = await fetch(`/api/tests/${test._id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const json = await res.json();
    if (!res.ok) return toast.push(json.message || "Update failed", "error");
    toast.push("Metadata updated", "success");
    router.refresh();
  };

  const inputClass = "mt-2 w-full rounded-xl border px-4 py-3 outline-none";
  const autoToday = () => {
    const date = getTodayDateOnly();
    const paper = getPaperByDate(date);
    const paperName = getPaperLabel(paper);
    setForm((prev) => ({ ...prev, date, paperName, title: buildDailyTitle(date, paper), category: paperName }));
  };

  return (
    <div className="card p-5">
      <p className="text-base font-medium">Edit Metadata</p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <label className="font-bold xl:col-span-2">Title<input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} /></label>
        <label className="font-bold">Date<input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} /></label>
        <label className="font-bold">Exam Name<input value={form.examName} onChange={(e) => setForm({ ...form, examName: e.target.value })} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} /></label>
        <label className="font-bold">Paper Name<input value={form.paperName} onChange={(e) => setForm({ ...form, paperName: e.target.value })} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} /></label>
        <label className="font-bold">Duration Minutes<input type="number" value={form.durationMinutes} onChange={(e) => setForm({ ...form, durationMinutes: Number(e.target.value) })} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} /></label>
        <label className="font-bold">Category<input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} /></label>
        <label className="font-bold">Subject<input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} /></label>
        <label className="font-bold">Total Marks<input type="number" value={form.totalMarks} onChange={(e) => setForm({ ...form, totalMarks: Number(e.target.value) })} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} /></label>
        <label className="font-bold">Negative Marking<input value={form.negativeMarking} onChange={(e) => setForm({ ...form, negativeMarking: e.target.value })} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} /></label>
        <label className="font-bold">Tags<input value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} /></label>
        <label className="font-bold md:col-span-2 xl:col-span-3">Description<textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className={inputClass} style={{ background: "var(--panel-2)", borderColor: "var(--border)" }} /></label>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border p-3 text-sm" style={{ borderColor: "var(--border)", background: "var(--panel-2)" }}>
        <button type="button" onClick={autoToday} className="rounded-xl bg-emerald-600 px-4 py-2 font-medium text-white">Auto Today Date</button>
        <span className="font-bold text-muted">Current selected date: {formatDateForDisplay(form.date)}</span>
      </div>
      <button onClick={save} className="mt-5 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white">Save Metadata</button>
    </div>
  );
}
