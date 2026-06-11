import type { PaperType } from "@/types/exam";

export const STUDY_START_DATE = process.env.NEXT_PUBLIC_STUDY_START_DATE || "2026-03-10";
export const STUDY_DAYS = Number(process.env.NEXT_PUBLIC_STUDY_DAYS || 65);
export const STUDY_TIME_ZONE = process.env.NEXT_PUBLIC_STUDY_TIME_ZONE || "Asia/Kolkata";

const MONTHS: Record<string, number> = {
  jan: 1,
  january: 1,
  feb: 2,
  february: 2,
  mar: 3,
  march: 3,
  apr: 4,
  april: 4,
  may: 5,
  jun: 6,
  june: 6,
  jul: 7,
  july: 7,
  aug: 8,
  august: 8,
  sep: 9,
  sept: 9,
  september: 9,
  oct: 10,
  october: 10,
  nov: 11,
  november: 11,
  dec: 12,
  december: 12,
};

const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function pad2(value: number | string) {
  return String(value).padStart(2, "0");
}

function safeYear() {
  const fromStart = Number(STUDY_START_DATE.slice(0, 4));
  if (Number.isFinite(fromStart) && fromStart > 1900) return fromStart;
  return new Date().getFullYear();
}

export function toDateOnly(date: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: STUDY_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const year = parts.find((part) => part.type === "year")?.value || String(date.getFullYear());
  const month = parts.find((part) => part.type === "month")?.value || pad2(date.getMonth() + 1);
  const day = parts.find((part) => part.type === "day")?.value || pad2(date.getDate());
  return `${year}-${month}-${day}`;
}

export function getTodayDateOnly() {
  return toDateOnly(new Date());
}

export function normalizeDateString(value: unknown, fallbackYear = safeYear()) {
  const text = String(value ?? "").trim();
  if (!text) return undefined;

  const iso = text.match(/\b(\d{4})-(\d{1,2})-(\d{1,2})\b/);
  if (iso) return `${iso[1]}-${pad2(iso[2])}-${pad2(iso[3])}`;

  const dmy = text.match(/\b(\d{1,2})[\/\-.\s](\d{1,2})[\/\-.\s](\d{4})\b/);
  if (dmy) return `${dmy[3]}-${pad2(dmy[2])}-${pad2(dmy[1])}`;

  const dayMonthYear = text.match(/\b(\d{1,2})(?:st|nd|rd|th)?\s+([A-Za-z]+)\s*,?\s*(\d{4})?\b/);
  if (dayMonthYear) {
    const month = MONTHS[dayMonthYear[2].toLowerCase()];
    if (month) return `${dayMonthYear[3] || fallbackYear}-${pad2(month)}-${pad2(dayMonthYear[1])}`;
  }

  const monthDayYear = text.match(/\b([A-Za-z]+)\s+(\d{1,2})(?:st|nd|rd|th)?\s*,?\s*(\d{4})?\b/);
  if (monthDayYear) {
    const month = MONTHS[monthDayYear[1].toLowerCase()];
    if (month) return `${monthDayYear[3] || fallbackYear}-${pad2(month)}-${pad2(monthDayYear[2])}`;
  }

  return undefined;
}

export function extractDateFromText(value: unknown, fallbackYear = safeYear()) {
  return normalizeDateString(value, fallbackYear);
}

export function formatDateForDisplay(dateString?: string) {
  const normalized = normalizeDateString(dateString);
  if (!normalized) return "No date";
  const [, month, day] = normalized.split("-");
  return `${Number(day)} ${MONTH_LABELS[Number(month) - 1]} ${normalized.slice(0, 4)}`;
}

export function getDayNumber(dateString: string) {
  const normalizedDate = normalizeDateString(dateString) || getTodayDateOnly();
  const normalizedStart = normalizeDateString(STUDY_START_DATE) || "2026-03-10";
  const start = new Date(`${normalizedStart}T00:00:00+05:30`);
  const current = new Date(`${normalizedDate}T00:00:00+05:30`);
  return Math.floor((current.getTime() - start.getTime()) / 86400000) + 1;
}

export function getPaperByDay(dayNumber: number): PaperType {
  return dayNumber % 2 === 1 ? "paper1" : "paper2";
}

export function getPaperByDate(dateString: string): PaperType {
  return getPaperByDay(getDayNumber(dateString));
}

export function getPaperLabel(paper: PaperType | string) {
  return paper === "paper2" ? "Paper 2" : "Paper 1";
}

export function makeDayKey(dateString: string) {
  const dayNumber = getDayNumber(dateString);
  return `day-${String(dayNumber).padStart(2, "0")}`;
}

export function buildDailyTitle(dateString: string, paper?: PaperType | string) {
  const normalized = normalizeDateString(dateString) || getTodayDateOnly();
  const dayNumber = getDayNumber(normalized);
  const resolvedPaper = (paper === "paper1" || paper === "paper2" ? paper : getPaperByDate(normalized)) as PaperType;
  return `Day ${dayNumber} - ${getPaperLabel(resolvedPaper)} Practice - ${formatDateForDisplay(normalized)}`;
}

export function buildSchedule() {
  const start = new Date(`${normalizeDateString(STUDY_START_DATE) || "2026-03-10"}T00:00:00+05:30`);
  return Array.from({ length: STUDY_DAYS }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const dateString = toDateOnly(date);
    const dayNumber = index + 1;
    const paper = getPaperByDay(dayNumber);
    return {
      dayKey: `day-${String(dayNumber).padStart(2, "0")}`,
      dayNumber,
      date: dateString,
      paper,
      title: buildDailyTitle(dateString, paper),
    };
  });
}

export function startOfDay(date = new Date()) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function daysBetween(a: Date, b: Date) {
  return Math.round((startOfDay(a).getTime() - startOfDay(b).getTime()) / 86400000);
}
