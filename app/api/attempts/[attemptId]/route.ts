import { connectDB } from "@/lib/mongodb";
import { ok, fail, handleApiError } from "@/lib/response";
import { rateLimit } from "@/lib/rateLimit";
import { AttemptModel } from "@/models/Attempt";
import { recalcAttempt, rebuildUserAnalytics } from "@/lib/analyticsService";
import { getAttemptData } from "@/lib/serverData";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request, context: { params: Promise<{ attemptId: string }> }) {
  const limited = rateLimit(request, "get-attempt");
  if (limited) return limited;
  try {
    const { attemptId } = await context.params;
    const data = await getAttemptData(attemptId);
    if (!data) return fail("Attempt not found.", 404);
    return ok(data);
  } catch (error) {
    return handleApiError(error, "GET /api/attempts/[attemptId]");
  }
}

export async function PATCH(request: Request, context: { params: Promise<{ attemptId: string }> }) {
  const limited = rateLimit(request, "patch-attempt");
  if (limited) return limited;
  try {
    await connectDB();
    const { attemptId } = await context.params;
    const body = await request.json();
    if (body.action === "submit") {
      const attempt = await recalcAttempt(attemptId);
      if (!attempt) return fail("Attempt not found.", 404);
      attempt.status = "submitted";
      attempt.submittedAt = new Date();
      await attempt.save();
      await rebuildUserAnalytics((attempt as any).userId);
      return ok({ attempt });
    }
    const attempt = await AttemptModel.findByIdAndUpdate(attemptId, { elapsedSeconds: body.elapsedSeconds, lastActivityAt: new Date() }, { new: true });
    if (!attempt) return fail("Attempt not found.", 404);
    return ok({ attempt });
  } catch (error) {
    return handleApiError(error, "PATCH /api/attempts/[attemptId]");
  }
}
