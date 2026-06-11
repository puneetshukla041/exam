export const dynamic = "force-dynamic";

import Link from "next/link";
import QuizEngine from "@/components/QuizEngine";
import { getAttemptData } from "@/lib/serverData";

export default async function AttemptPage({ params }: { params: Promise<{ attemptId: string }> }) {
  const { attemptId } = await params;
  const data = await getAttemptData(attemptId);
  if (!data) return <div className="card p-8 text-center">Attempt not found</div>;
  if (data.attempt.status === "submitted") {
    return (
      <div className="card p-8 text-center">
        <p className="text-lg font-medium">This test is already submitted.</p>
        <Link href={`/review/${attemptId}`} className="mt-5 inline-block rounded-xl bg-blue-600 px-5 py-3 font-medium text-white">Open Review</Link>
      </div>
    );
  }
  return <QuizEngine attempt={data.attempt} questions={data.questions} answers={data.answers} />;
}
