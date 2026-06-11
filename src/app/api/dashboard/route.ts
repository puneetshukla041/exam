import { ok, handleApiError } from "@/lib/response";
import { rateLimit } from "@/lib/rateLimit";
import { getDashboardData } from "@/lib/serverData";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const limited = rateLimit(request, "dashboard");
  if (limited) return limited;
  try {
    return ok(await getDashboardData());
  } catch (error) {
    return handleApiError(error, "GET /api/dashboard");
  }
}
