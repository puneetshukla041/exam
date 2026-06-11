export const runtime = "nodejs";
export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
import { getTopicQuestionJson } from "@/lib/paper1Learning";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ topicId: string }> }) {
  const { topicId } = await params;
  return NextResponse.json(getTopicQuestionJson(topicId), {
    headers: {
      "Content-Disposition": `attachment; filename="${topicId}-100-questions.json"`,
    },
  });
}
