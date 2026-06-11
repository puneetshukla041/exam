import { connectDB } from "@/lib/mongodb";
import { startAttemptSchema } from "@/lib/validators";
import { ok, fail, handleApiError } from "@/lib/response";
import { rateLimit } from "@/lib/rateLimit";
import { TestModel } from "@/models/Test";
import { QuestionModel } from "@/models/Question";
import { AttemptModel } from "@/models/Attempt";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const limited = rateLimit(request, "list-attempts");
  if (limited) return limited;
  try {
    await connectDB();
    const userId = process.env.NEXT_PUBLIC_DEFAULT_USER_ID || "default-user";
    const attempts = await AttemptModel.find({ userId }).sort({ updatedAt: -1 }).limit(100).lean();
    return ok({ attempts });
  } catch (error) {
    return handleApiError(error, "GET /api/attempts");
  }
}

export async function POST(request: Request) {
  const limited = rateLimit(request, "start-attempt");
  if (limited) return limited;
  try {
    await connectDB();
    const userId = process.env.NEXT_PUBLIC_DEFAULT_USER_ID || "default-user";
    const { testId, mode } = startAttemptSchema.parse(await request.json());
    const test = await TestModel.findById(testId).lean();
    if (!test) return fail("Test not found.", 404);
    const questionsCount = await QuestionModel.countDocuments({ testId });
    let attempt = await AttemptModel.findOne({ userId, testId, status: "in-progress" });
    if (!attempt) {
      attempt = await AttemptModel.create({ userId, testId, testTitle: (test as any).title, paper: (test as any).paper, mode: mode || (test as any).mode, durationMinutes: (test as any).durationMinutes, totalQuestions: questionsCount });
    }
    return ok({ attempt });
  } catch (error) {
    return handleApiError(error, "POST /api/attempts");
  }
}
