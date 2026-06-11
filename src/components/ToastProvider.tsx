"use client";
import { createContext, useContext, useState } from "react";

type Toast = { id: number; message: string; type?: "success" | "error" | "info" };
type ToastContextValue = { push: (message: string, type?: Toast["type"]) => void };
const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const push = (message: string, type: Toast["type"] = "info") => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3500);
  };
  return <ToastContext.Provider value={{ push }}>
    {children}
    <div className="fixed right-4 top-4 z-[200] space-y-3">
      {toasts.map((t) => <div key={t.id} className="animate-in rounded-2xl px-4 py-3 text-sm font-bold text-white shadow-soft" style={{background: t.type === 'error' ? '#dc2626' : t.type === 'success' ? '#059669' : '#0f172a'}}>{t.message}</div>)}
    </div>
  </ToastContext.Provider>;
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
