import { connectDB } from "@/lib/mongodb";
import { answerSchema } from "@/lib/validators";
import { ok, fail, handleApiError } from "@/lib/response";
import { rateLimit } from "@/lib/rateLimit";
import { AttemptModel } from "@/models/Attempt";
import { QuestionModel } from "@/models/Question";
import { AnswerModel } from "@/models/Answer";
import { recalcAttempt } from "@/lib/analyticsService";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request, context: { params: Promise<{ attemptId: string }> }) {
  const limited = rateLimit(request, "save-answer");
  if (limited) return limited;
  try {
    await connectDB();
    const { attemptId } = await context.params;
    const data = answerSchema.parse(await request.json());
    const attempt = await AttemptModel.findById(attemptId);
    if (!attempt) return fail("Attempt not found.", 404);
    if (attempt.status === "submitted") return fail("Attempt is already submitted.", 409);
    const question = await QuestionModel.findById(data.questionId);
    if (!question) return fail("Question not found.", 404);
    const selectedOption = data.isSkipped ? undefined : data.selectedOption;
    const isCorrect = Boolean(selectedOption && selectedOption === question.answer);
    const answer = await AnswerModel.findOneAndUpdate(
      { userId: attempt.userId, attemptId, questionId: question._id },
      {
        userId: attempt.userId,
        attemptId,
        testId: attempt.testId,
        questionId: question._id,
        questionOrder: question.order,
        selectedOption,
        correctOption: question.answer,
        isCorrect,
        isSkipped: data.isSkipped,
        isBookmarked: data.isBookmarked,
        timeSpentSeconds: data.timeSpentSeconds,
        subject: question.subject,
        chapter: question.chapter,
        topic: question.topic,
        subtopic: question.subtopic,
        difficulty: question.difficulty,
      },
      { upsert: true, new: true }
    );
    const updatedAttempt = await recalcAttempt(attemptId);
    return ok({ answer, attempt: updatedAttempt, correctOption: question.answer, explanation: question.explanation });
  } catch (error) {
    return handleApiError(error, "POST /api/attempts/[attemptId]/answers");
  }
}
