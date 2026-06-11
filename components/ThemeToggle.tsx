"use client";
import { useTheme } from "./ThemeProvider";
export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return <button onClick={toggle} className="rounded-xl border px-3 py-2 text-sm font-medium hover:bg-slate-100 dark:bg-zinc-950 dark:hover:bg-zinc-900" style={{borderColor:'var(--border)'}}>{theme === "dark" ? "Light" : "Dark"}</button>;
}
