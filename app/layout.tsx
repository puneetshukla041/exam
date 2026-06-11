import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastProvider } from "@/components/ToastProvider";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "BCI Paper 1 Learning",
  description: "Rajasthan Basic Computer Instructor Paper 1 learning, notes and MCQ practice.",
};

const nav = [
  ["Tests", "/tests"],
  ["Learn", "/learn"],
  ["Syllabus", "/syllabus"],
  ["50 Days", "/plan"],
  ["Upload", "/upload"],
  ["Dashboard", "/dashboard"],
  ["Practice", "/practice"],
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ToastProvider>
            <div className="min-h-screen">
              <header className="sticky top-0 z-50 border-b glass no-print" style={{ borderColor: "var(--border)" }}>
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3">
                  <Link href="/" className="rounded-xl px-3 py-2 text-sm font-medium tracking-wide text-muted hover:bg-slate-100 dark:bg-zinc-950 dark:hover:bg-zinc-900">
                    BCI
                  </Link>
                  <nav className="flex flex-wrap items-center gap-1 text-sm font-medium">
                    {nav.map(([label, href]) => (
                      <Link key={href} className="rounded-xl px-3 py-2 text-muted hover:bg-slate-100 dark:bg-zinc-950 hover:text-[var(--text)] dark:hover:bg-zinc-900" href={href}>
                        {label}
                      </Link>
                    ))}
                    <ThemeToggle />
                  </nav>
                </div>
              </header>
              <main className="mx-auto max-w-7xl px-4 py-6">{children}</main>
            </div>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
