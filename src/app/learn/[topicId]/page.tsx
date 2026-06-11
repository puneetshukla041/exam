export const dynamic = "force-dynamic";
import Link from "next/link";
import LearningTopicClient from "@/components/LearningTopicClient";
import { getLearningTopic, getTopicQuestionJson, paper1LearningTopics } from "@/lib/paper1Learning";

export default async function TopicPage({ params }: { params: Promise<{ topicId: string }> }) {
  const { topicId } = await params;
  const topic = getLearningTopic(topicId);
  const quiz = getTopicQuestionJson(topic.id).questions.slice(0, 10);
  return (
    <div className="space-y-5">
      <div className="no-print flex flex-wrap items-center justify-between gap-3">
        <Link href="/learn" className="rounded-xl border px-4 py-2 text-sm font-medium" style={{ borderColor: "var(--border)" }}>All topics</Link>
        <div className="flex flex-wrap gap-2">
          {paper1LearningTopics.filter((t) => Math.abs(t.day - topic.day) <= 1 && t.id !== topic.id).map((t) => <Link key={t.id} href={`/learn/${t.id}`} className="rounded-xl border px-3 py-2 text-xs text-muted" style={{ borderColor: "var(--border)" }}>Day {t.day}</Link>)}
        </div>
      </div>
      <LearningTopicClient topic={topic} microQuiz={quiz} />
    </div>
  );
}
