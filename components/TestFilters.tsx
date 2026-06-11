"use client";

import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { formatDateForDisplay, getTodayDateOnly } from "@/lib/date";

type DateMode = "all" | "today" | "custom";

function readParams(params: URLSearchParams) {
  const existingDate = params.get("date") || "";
  return {
    q: params.get("q") || "",
    paper: params.get("paper") || "",
    mode: params.get("mode") || "",
    subject: params.get("subject") || "",
    status: params.get("status") || "",
    dateMode: existingDate ? (existingDate === getTodayDateOnly() ? "today" : "custom") as DateMode : "all" as DateMode,
    date: existingDate,
  };
}

export default function TestFilters({ filters }: { filters?: any }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [form, setForm] = useState(() => readParams(searchParams));
  const dateRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setForm(readParams(searchParams));
  }, [searchParams]);

  const subjectOptions = useMemo(() => filters?.subjects || [], [filters]);

  useEffect(() => {
    const id = window.setTimeout(() => {
      const params = new URLSearchParams();
      if (form.q) params.set("q", form.q);
      if (form.paper) params.set("paper", form.paper);
      if (form.mode) params.set("mode", form.mode);
      if (form.subject) params.set("subject", form.subject);
      if (form.status) params.set("status", form.status);
      if (form.dateMode === "today") params.set("date", getTodayDateOnly());
      if (form.dateMode === "custom" && form.date) params.set("date", form.date);
      startTransition(() => router.replace(`/tests${params.toString() ? `?${params.toString()}` : ""}`, { scroll: false }));
    }, 220);

    return () => window.clearTimeout(id);
  }, [form, router]);

  const update = (key: keyof typeof form, value: string) => {
    setForm((prev) => {
      if (key === "dateMode") {
        if (value === "today") return { ...prev, dateMode: "today", date: getTodayDateOnly() };
        if (value === "all") return { ...prev, dateMode: "all", date: "" };
        return { ...prev, dateMode: "custom", date: prev.date || getTodayDateOnly() };
      }
      return { ...prev, [key]: value };
    });
  };
  const reset = () => setForm({ q: "", paper: "", mode: "", subject: "", status: "", dateMode: "all", date: "" });
  const openCalendar = () => {
    update("dateMode", "custom");
    setTimeout(() => {
      const picker = dateRef.current as HTMLInputElement & { showPicker?: () => void };
      if (picker?.showPicker) picker.showPicker();
      else picker?.focus();
    }, 0);
  };

  const inputClass = "rounded-xl border px-4 py-3 text-sm outline-none";
  const dateLabel = form.dateMode === "all" ? "All dates" : form.date ? formatDateForDisplay(form.date) : "Select date";

  return (
    <div className="card p-4">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <input
          value={form.q}
          onChange={(event) => update("q", event.target.value)}
          placeholder="Search title, topic, subject, tag..."
          className={`${inputClass} xl:col-span-2`}
        />
        <select value={form.paper} onChange={(event) => update("paper", event.target.value)} className={inputClass}>
          <option value="">All tests</option>
          <option value="paper1">Paper 1</option>
          <option value="paper2">Paper 2</option>
        </select>
        <select value={form.mode} onChange={(event) => update("mode", event.target.value)} className={inputClass}>
          <option value="">All modes</option>
          <option value="daily">Daily</option>
          <option value="mock">Mock</option>
          <option value="topic">Topic</option>
          <option value="weak">Weak</option>
          <option value="random">Random</option>
        </select>
        <select value={form.subject} onChange={(event) => update("subject", event.target.value)} className={inputClass}>
          <option value="">All topics</option>
          {subjectOptions.map((item: string) => <option key={item} value={item}>{item}</option>)}
        </select>
        <select value={form.status} onChange={(event) => update("status", event.target.value)} className={inputClass}>
          <option value="">All status</option>
          <option value="not-started">Not started</option>
          <option value="in-progress">In progress</option>
          <option value="submitted">Submitted</option>
        </select>
        <select value={form.dateMode} onChange={(event) => update("dateMode", event.target.value)} className={inputClass}>
          <option value="all">All dates</option>
          <option value="today">Today</option>
          <option value="custom">Choose date</option>
        </select>
        <div className="flex gap-2">
          <input
            ref={dateRef}
            type="date"
            value={form.dateMode === "all" ? "" : form.date}
            onClick={openCalendar}
            onFocus={() => form.dateMode === "all" && update("dateMode", "custom")}
            onChange={(event) => setForm((prev) => ({ ...prev, dateMode: "custom", date: event.target.value }))}
            className={`${inputClass} flex-1`}
          />
          <button type="button" onClick={() => update("dateMode", "today")} className="rounded-xl border px-3 text-xs font-medium" style={{ borderColor: "var(--border)" }}>Today</button>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted">{dateLabel}. Filters update automatically. Reset shows every available test.</p>
        <button type="button" onClick={reset} className="rounded-xl border px-4 py-2 text-sm font-medium" style={{ borderColor: "var(--border)" }}>Reset</button>
      </div>
      {isPending ? <p className="mt-2 text-xs text-muted">Updating...</p> : null}
    </div>
  );
}
