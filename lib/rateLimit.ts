import { fail } from "./response";

const buckets = new Map<string, { count: number; resetAt: number }>();

export function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "local";
}

export function rateLimit(request: Request, key = "default") {
  const limit = Number(process.env.APP_RATE_LIMIT_PER_MINUTE || 120);
  const now = Date.now();
  const ip = getClientIp(request);
  const id = `${key}:${ip}`;
  const bucket = buckets.get(id);
  if (!bucket || bucket.resetAt < now) {
    buckets.set(id, { count: 1, resetAt: now + 60_000 });
    return null;
  }
  bucket.count += 1;
  if (bucket.count > limit) {
    return fail("Too many requests. Try again in a minute.", 429);
  }
  return null;
}
