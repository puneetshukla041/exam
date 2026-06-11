import { connectDB } from "@/lib/mongodb";
import { uploadTestSchema } from "@/lib/validators";
import { normalizeRawUploadPayload } from "@/lib/uploadNormalizer";
import { ok, fail, handleApiError } from "@/lib/response";
import { rateLimit, getClientIp } from "@/lib/rateLimit";
import { createTestFromUpload, isMongoDuplicateKeyError } from "@/lib/testService";
import { getTestsData } from "@/lib/serverData";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const limited = rateLimit(request, "list-tests");
  if (limited) return limited;
  try {
    const { searchParams } = new URL(request.url);
    return ok(await getTestsData(Object.fromEntries(searchParams)));
  } catch (error) {
    return handleApiError(error, "GET /api/tests");
  }
}

export async function POST(request: Request) {
  const limited = rateLimit(request, "create-test");
  if (limited) return limited;
  try {
    await connectDB();
    const raw = await request.json();
    const normalized = normalizeRawUploadPayload(raw);
    const data = uploadTestSchema.parse(normalized);
    const userId = process.env.NEXT_PUBLIC_DEFAULT_USER_ID || "default-user";
    const result = await createTestFromUpload(data, userId, getClientIp(request));

    if (!result.ok) {
      return fail(result.validation.reason || "Upload rejected. Duplicate test or duplicate questions found.", 409, result.validation);
    }

    return ok({ test: result.test, validation: result.validation });
  } catch (error) {
    if (isMongoDuplicateKeyError(error)) {
      return fail("Upload rejected because this exact test already exists.", 409, { code: "DUPLICATE_KEY" });
    }
    return handleApiError(error, "POST /api/tests");
  }
}
