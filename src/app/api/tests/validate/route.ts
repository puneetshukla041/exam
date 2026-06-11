import { connectDB } from "@/lib/mongodb";
import { uploadTestSchema } from "@/lib/validators";
import { normalizeRawUploadPayload } from "@/lib/uploadNormalizer";
import { ok, handleApiError } from "@/lib/response";
import { rateLimit } from "@/lib/rateLimit";
import { validateUploadPayload } from "@/lib/testService";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const limited = rateLimit(request, "validate-test");
  if (limited) return limited;
  try {
    await connectDB();
    const raw = await request.json();
    const normalized = normalizeRawUploadPayload(raw);
    const data = uploadTestSchema.parse(normalized);
    const validation = await validateUploadPayload(data);
    return ok(validation);
  } catch (error) {
    return handleApiError(error, "POST /api/tests/validate");
  }
}
