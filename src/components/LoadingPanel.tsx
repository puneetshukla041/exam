type LoadingPanelProps = {
  label?: string;
};

export default function LoadingPanel({ label = "Loading..." }: LoadingPanelProps) {
  return (
    <div className="card p-8 text-center animate-in">
      <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
      <p className="mt-4 font-medium">{label}</p>
      <div className="mx-auto mt-5 grid max-w-3xl gap-3 md:grid-cols-3">
        <div className="h-20 animate-pulse rounded-2xl bg-slate-200 dark:bg-zinc-900 dark:bg-zinc-950" />
        <div className="h-20 animate-pulse rounded-2xl bg-slate-200 dark:bg-zinc-900 dark:bg-zinc-950" />
        <div className="h-20 animate-pulse rounded-2xl bg-slate-200 dark:bg-zinc-900 dark:bg-zinc-950" />
      </div>
    </div>
  );
}
