export const dynamic = "force-dynamic";
import Link from "next/link";
import { paper1LearningTopics } from "@/lib/paper1Learning";

const buckets = Array.from(new Set(paper1LearningTopics.map((t) => t.bucket)));

export default function LearnPage() {
  return (
    <div className="space-y-5">
      <section className="card p-5">
        <p className="text-sm text-muted">50-day Paper 1 learning system</p>
        <p className="mt-2 max-w-5xl leading-7 text-soft">
          Read one topic deeply during the day, then practise its 100-question JSON at night. Each lesson has theory, fixed memory facts, PYQ traps, mistakes, revision method and a micro quiz.
        </p>
      </section>
      {buckets.map((bucket) => (
        <section key={bucket} className="space-y-3">
          <p className="px-1 text-sm text-muted">{bucket}</p>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {paper1LearningTopics.filter((topic) => topic.bucket === bucket).map((topic) => (
              <Link key={topic.id} href={`/learn/${topic.id}`} className="card hover-lift block p-5">
                <p className="text-xs text-muted">Day {topic.day} · {topic.priority}</p>
                <p className="mt-2 text-base leading-6">{topic.title}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {topic.concepts.slice(0, 4).map((concept) => <span key={concept} className="rounded-full border px-2 py-1 text-xs text-muted" style={{ borderColor: "var(--border)" }}>{concept}</span>)}
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
