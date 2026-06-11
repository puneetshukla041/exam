export const dynamic = "force-dynamic";

import Link from "next/link";
import UploadWizard from "@/components/UploadWizard";
import MetadataEditor from "@/components/MetadataEditor";
import { formatDateForDisplay } from "@/lib/date";
import { getTestManageData } from "@/lib/serverData";

export default async function TestManagePage({ params }: { params: Promise<{ testId: string }> }) {
  const { testId } = await params;
  const data = await getTestManageData(testId);
  if (!data) return <div className="card p-8 text-center">Test not found</div>;
  const { test, questions } = data;

  return (
    <div className="space-y-6">
      <div className="card p-6">
        <p className="text-sm font-medium uppercase text-muted">Manage Test</p>
        <p className="mt-1 text-base font-medium">{test.title}</p>
        <p className="mt-2 text-muted">
          {test.paperName || test.paper} • {formatDateForDisplay(test.date)} • {test.mode} • {test.questionCount} questions • {test.durationMinutes} min
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/tests" className="rounded-xl border px-4 py-2 font-medium" style={{ borderColor: "var(--border)" }}>Back</Link>
          <Link href="/upload" className="rounded-xl bg-blue-600 px-4 py-2 font-medium text-white">Upload New</Link>
        </div>
      </div>

      <MetadataEditor test={JSON.parse(JSON.stringify(test))} />

      <section className="card p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-base font-medium">Question Preview</p>
            <p className="text-sm text-muted">Questions, options, answers and explanations are visible here after upload.</p>
          </div>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">{questions.length} Q</span>
        </div>
        <div className="mt-4 max-h-[680px] space-y-4 overflow-auto pr-1">
          {questions.map((q: any) => (
            <div key={q._id} className="mini-card p-4">
              <p className="font-medium leading-7">{q.order}. {q.question}</p>
              <div className="mt-3 grid gap-2 text-sm md:grid-cols-2">
                {(["A", "B", "C", "D"] as const).map((key) => (
                  <p key={key} className={`rounded-xl border px-3 py-2 ${q.answer === key ? "border-green-300 bg-green-50 font-medium text-green-800 dark:border-green-900/60 dark:bg-green-950/30 dark:text-green-200" : ""}`} style={{ borderColor: q.answer === key ? undefined : "var(--border)" }}>
                    {key}. {q.options?.[key] || "-"}
                  </p>
                ))}
              </div>
              <p className="mt-3 text-sm text-muted"><b>Topic:</b> {q.subject} / {q.chapter} / {q.topic} / {q.difficulty}</p>
              <p className="mt-2 text-sm"><b>Explanation:</b> {q.explanation || "No explanation available."}</p>
              {q.sourceHint ? <p className="mt-1 text-xs text-muted"><b>Source:</b> {q.sourceHint}</p> : null}
            </div>
          ))}
        </div>
      </section>

      <UploadWizard replaceTestId={testId} />
    </div>
  );
}
