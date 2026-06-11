"use client";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <div style={{ minHeight: "100vh", background: "#000", color: "#f8fafc", display: "grid", placeItems: "center", padding: 24 }}>
          <div style={{ maxWidth: 640, border: "1px solid #27272a", borderRadius: 20, padding: 24, textAlign: "center" }}>
            <p style={{ color: "#a1a1aa", fontSize: 14 }}>The app hit a runtime error.</p>
            <p style={{ marginTop: 12, fontSize: 14 }}>{error?.message || "Unexpected error"}</p>
            <button onClick={reset} style={{ marginTop: 20, background: "#2563eb", color: "#fff", border: 0, borderRadius: 12, padding: "10px 16px", cursor: "pointer" }}>
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
