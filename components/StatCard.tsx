type Props = { label: string; value: string | number; helper?: string; tone?: "blue" | "green" | "red" | "amber" | "slate" };
export default function StatCard({ label, value, helper, tone = "slate" }: Props) {
  const color = tone === "blue" ? "#2563eb" : tone === "green" ? "#059669" : tone === "red" ? "#dc2626" : tone === "amber" ? "#d97706" : "var(--text)";
  return <div className="card p-5 animate-in"><p className="text-sm font-semibold text-muted">{label}</p><p className="mt-2 text-base font-medium" style={{color}}>{value}</p>{helper ? <p className="mt-1 text-xs text-muted">{helper}</p> : null}</div>;
}
