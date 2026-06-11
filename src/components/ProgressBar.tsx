export default function ProgressBar({ value, label }: { value: number; label?: string }) {
  return <div><div className="mb-1 flex justify-between text-xs font-bold text-muted"><span>{label}</span><span>{value}%</span></div><div className="h-2 rounded-full" style={{background:'var(--panel-2)'}}><div className="h-2 rounded-full bg-blue-600" style={{width:`${Math.max(0, Math.min(100, value))}%`}} /></div></div>;
}
