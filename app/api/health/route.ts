export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({
    ok: true,
    router: "app",
    time: new Date().toISOString(),
    hasMongoUri: Boolean(process.env.MONGODB_URI),
  });
}
