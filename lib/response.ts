import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { ErrorLogModel } from "@/models/ErrorLog";

export function ok<T>(data: T, init?: ResponseInit) {
  return NextResponse.json({ success: true, data }, init);
}

export function fail(message: string, status = 400, details?: unknown) {
  return NextResponse.json({ success: false, message, details }, { status });
}

export async function handleApiError(error: unknown, where: string) {
  console.error(where, error);
  try {
    await ErrorLogModel.create({
      where,
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
  } catch {}

  if (error instanceof ZodError) {
    return fail("Validation failed. Check JSON format and required fields.", 400, error.flatten());
  }

  const message = error instanceof Error ? error.message : "Internal server error.";
  return fail(message, 500, { where });
}
