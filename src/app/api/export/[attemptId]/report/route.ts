import { ok, fail, handleApiError } from "@/lib/response";
import { getReportData } from "@/lib/serverData";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(_request: Request, context: { params: Promise<{ attemptId: string }> }) {
  try {
    const { attemptId } = await context.params;
    const data = await getReportData(attemptId);
    if (!data) return fail("Attempt not found.", 404);
    return ok(data);
  } catch (error) {
    return handleApiError(error, "GET /api/export/[attemptId]/report");
  }
}
