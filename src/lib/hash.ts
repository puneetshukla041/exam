import crypto from "crypto";

export function normalizeText(value: string) {
  return value
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .trim();
}

export function sha256(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

export function questionHash(question: string) {
  return sha256(normalizeText(question));
}

export function optionsHash(options: Record<string, string>) {
  return sha256(Object.entries(options).map(([k, v]) => `${k}:${normalizeText(v)}`).join("|"));
}

export function testFingerprint(title: string, paper: string, hashes: string[]) {
  return sha256(`${normalizeText(title)}|${paper}|${hashes.sort().join("|")}`);
}
