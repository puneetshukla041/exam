"use client";

import Link from "next/link";

export default function AppError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="card mx-auto mt-10 max-w-2xl p-6 text-center">
      <p className="text-sm text-muted">Something failed while loading this page.</p>
      <p className="mt-3 text-sm leading-6 text-soft">{error?.message || "Unexpected error"}</p>
      <div className="mt-5 flex justify-center gap-3">
        <button type="button" onClick={reset} className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white">Try again</button>
        <Link href="/learn" className="rounded-xl border px-4 py-2 text-sm font-medium" style={{ borderColor: "var(--border)" }}>Open Learn</Link>
      </div>
    </div>
  );
}
