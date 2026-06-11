export const dynamic = "force-dynamic";
import Link from "next/link";
import { paper1LearningTopics } from "@/lib/paper1Learning";

export default function PlanPage() {
  return (
    <div className="space-y-5">
      <section className="card p-5">
        <p className="text-sm text-muted">50-day rank plan</p>
        <p className="mt-2 max-w-5xl leading-7 text-soft">
          Day reading is for theory and memory tables. Night practice is for 100 MCQs from the same topic. Every morning revise yesterday's wrong and bookmarked questions before starting the new topic.
        </p>
      </section>
      <section className="grid gap-3 md:grid-cols-2">
        {paper1LearningTopics.map((topic) => (
          <Link key={topic.id} href={`/learn/${topic.id}`} className="mini-card hover-lift p-4">
            <p className="text-xs text-muted">Day {topic.day} · {topic.bucket}</p>
            <p className="mt-1 leading-6">{topic.title}</p>
            <p className="mt-2 text-sm text-muted">Reading: notes + tables. Night: 100 Q JSON + wrong review.</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
