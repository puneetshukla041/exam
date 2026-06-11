import { connectDB } from "@/lib/mongodb";
import { uploadTestSchema } from "@/lib/validators";
import { normalizeRawUploadPayload } from "@/lib/uploadNormalizer";
import { ok, fail, handleApiError } from "@/lib/response";
import { rateLimit, getClientIp } from "@/lib/rateLimit";
import { replaceTestQuestions, isMongoDuplicateKeyError } from "@/lib/testService";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request, context: { params: Promise<{ testId: string }> }) {
  const limited = rateLimit(request, "replace-test");
  if (limited) return limited;
  try {
    await connectDB();
    const { testId } = await context.params;
    const raw = await request.json();
    const normalized = normalizeRawUploadPayload(raw);
    const data = uploadTestSchema.parse(normalized);
    const result = await replaceTestQuestions(testId, data, process.env.NEXT_PUBLIC_DEFAULT_USER_ID || "default-user", getClientIp(request));
    if (!result.ok) return fail(result.validation.reason || "Replacement rejected.", 409, result.validation);
    return ok({ test: result.test, validation: result.validation });
  } catch (error) {
    if (isMongoDuplicateKeyError(error)) return fail("Replacement rejected because duplicate questions exist.", 409, { code: "DUPLICATE_KEY" });
    return handleApiError(error, "POST /api/tests/[testId]/replace");
  }
}
