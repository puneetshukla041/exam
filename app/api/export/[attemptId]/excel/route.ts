import * as XLSX from "xlsx";
import { connectDB } from "@/lib/mongodb";
import { fail, handleApiError } from "@/lib/response";
import { AttemptModel } from "@/models/Attempt";
import { QuestionModel } from "@/models/Question";
import { AnswerModel } from "@/models/Answer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(_request: Request, context: { params: Promise<{ attemptId: string }> }) {
  try {
    await connectDB();
    const { attemptId } = await context.params;
    const attempt = await AttemptModel.findById(attemptId).lean();
    if (!attempt) return fail("Attempt not found.", 404);
    const [answers, questions] = await Promise.all([
      AnswerModel.find({ attemptId }).sort({ questionOrder: 1 }).lean(),
      QuestionModel.find({ testId: (attempt as any).testId }).sort({ order: 1 }).lean(),
    ]);
    const answerMap = new Map(answers.map((a: any) => [String(a.questionId), a]));
    const rows = questions.map((q: any) => {
      const a: any = answerMap.get(String(q._id));
      return { No: q.order, Subject: q.subject, Topic: q.topic, Difficulty: q.difficulty, Question: q.question, Selected: a?.selectedOption || "", Correct: q.answer, Result: a?.isCorrect ? "Correct" : a?.selectedOption ? "Wrong" : "Not Attempted", TimeSeconds: a?.timeSpentSeconds || 0, Explanation: q.explanation };
    });
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(rows);
    XLSX.utils.book_append_sheet(wb, ws, "Result");
    const buffer = XLSX.write(wb, { bookType: "xlsx", type: "buffer" });
    return new Response(buffer, { headers: { "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "Content-Disposition": `attachment; filename="attempt-${attemptId}.xlsx"` } });
  } catch (error) {
    return handleApiError(error, "GET /api/export/[attemptId]/excel");
  }
}
