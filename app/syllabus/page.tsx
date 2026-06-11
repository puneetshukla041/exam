export const dynamic = "force-dynamic";
import Link from "next/link";
import { paper1LearningTopics } from "@/lib/paper1Learning";

const official = [
  "Paper 1 has 100 MCQs, 100 marks and 2 hours.",
  "Negative marking is one-third for each wrong answer.",
  "Coverage: Rajasthan Art & Culture, History, Geography, General Science and Rajasthan Current Affairs.",
  "General Ability: Logical Reasoning, Decision Making, Mental Ability, Class X Numeracy and Data Interpretation.",
  "Rank plan: 7 hours reading during day + 100 topic-wise MCQs at night + next-morning wrong revision.",
];

const buckets = Array.from(new Set(paper1LearningTopics.map((t) => t.bucket)));

export default function SyllabusPage() {
  return (
    <div className="space-y-5">
      <section className="card p-5">
        <p className="text-sm text-muted">Paper 1 syllabus map</p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {official.map((item) => <div key={item} className="note-box p-4 text-sm leading-6">{item}</div>)}
        </div>
      </section>

      <section className="card p-5">
        <p className="mb-4 text-sm text-muted">50-day complete topic coverage</p>
        <div className="grid gap-3 md:grid-cols-2">
          {paper1LearningTopics.map((topic) => (
            <Link key={topic.id} href={`/learn/${topic.id}`} className="mini-card hover-lift block p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm">Day {topic.day}</p>
                <span className="rounded-full border px-2 py-1 text-xs text-muted" style={{ borderColor: "var(--border)" }}>{topic.priority}</span>
              </div>
              <p className="mt-2 leading-6">{topic.title}</p>
              <p className="mt-2 text-sm text-muted">{topic.concepts.slice(0, 5).join(" · ")}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {buckets.map((bucket) => (
          <details key={bucket} className="card p-5" open>
            <summary className="text-sm">{bucket}</summary>
            <div className="mt-3 space-y-3">
              {paper1LearningTopics.filter((t) => t.bucket === bucket).map((topic) => (
                <div key={topic.id} className="note-box p-4">
                  <p className="text-sm">{topic.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{topic.why}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {topic.concepts.slice(0, 7).map((concept) => <span key={concept} className="rounded-full border px-2 py-1 text-xs" style={{ borderColor: "var(--border)" }}>{concept}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </details>
        ))}
      </section>
    </div>
  );
}
