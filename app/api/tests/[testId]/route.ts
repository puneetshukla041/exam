import { connectDB } from "@/lib/mongodb";
import { updateTestSchema } from "@/lib/validators";
import { ok, fail, handleApiError } from "@/lib/response";
import { rateLimit, getClientIp } from "@/lib/rateLimit";
import { TestModel } from "@/models/Test";
import { QuestionModel } from "@/models/Question";
import { UsedQuestionModel } from "@/models/UsedQuestion";
import { AttemptModel } from "@/models/Attempt";
import { AnswerModel } from "@/models/Answer";
import { AuditLogModel } from "@/models/AuditLog";
import { getTestManageData } from "@/lib/serverData";
import { getDayNumber, makeDayKey, normalizeDateString } from "@/lib/date";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(_request: Request, context: { params: Promise<{ testId: string }> }) {
  try {
    const { testId } = await context.params;
    const data = await getTestManageData(testId);
    if (!data) return fail("Test not found.", 404);
    return ok(data);
  } catch (error) {
    return handleApiError(error, "GET /api/tests/[testId]");
  }
}

export async function PATCH(request: Request, context: { params: Promise<{ testId: string }> }) {
  const limited = rateLimit(request, "update-test");
  if (limited) return limited;
  try {
    await connectDB();
    const { testId } = await context.params;
    const data = updateTestSchema.parse(await request.json());
    const normalizedDate = data.date ? normalizeDateString(data.date) : undefined;
    const updateData = normalizedDate ? { ...data, date: normalizedDate, dayNumber: getDayNumber(normalizedDate), dayKey: makeDayKey(normalizedDate) } : data;
    const test = await TestModel.findByIdAndUpdate(testId, updateData, { new: true });
    if (!test) return fail("Test not found.", 404);
    await AuditLogModel.create({ userId: process.env.NEXT_PUBLIC_DEFAULT_USER_ID || "default-user", action: "UPDATE_TEST", entity: "Test", entityId: testId, details: updateData, ip: getClientIp(request) });
    return ok({ test });
  } catch (error) {
    return handleApiError(error, "PATCH /api/tests/[testId]");
  }
}

export async function DELETE(request: Request, context: { params: Promise<{ testId: string }> }) {
  const limited = rateLimit(request, "delete-test");
  if (limited) return limited;
  try {
    await connectDB();
    const { testId } = await context.params;
    const test = await TestModel.findById(testId);
    if (!test) return fail("Test not found.", 404);
    await Promise.all([
      QuestionModel.deleteMany({ testId }),
      UsedQuestionModel.deleteMany({ testId }),
      AnswerModel.deleteMany({ testId }),
      AttemptModel.deleteMany({ testId }),
      TestModel.findByIdAndDelete(testId),
    ]);
    await AuditLogModel.create({ userId: process.env.NEXT_PUBLIC_DEFAULT_USER_ID || "default-user", action: "DELETE_TEST", entity: "Test", entityId: testId, details: { title: test.title }, ip: getClientIp(request) });
    return ok({ deleted: true });
  } catch (error) {
    return handleApiError(error, "DELETE /api/tests/[testId]");
  }
}
