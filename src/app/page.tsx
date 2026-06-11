import Link from "next/link";

const quickLinks = [
  { href: "/learn", label: "Start learning", helper: "50-day Paper 1 notes and topic practice" },
  { href: "/tests", label: "Tests", helper: "Uploaded papers and filters" },
  { href: "/upload", label: "Upload", helper: "JSON, CSV and Excel import" },
  { href: "/dashboard", label: "Dashboard", helper: "Analytics after MongoDB connects" },
];

export default function HomePage() {
  return (
    <div className="space-y-5">
      <section className="card p-5">
        <p className="text-sm text-muted">Rajasthan Basic Computer Instructor Paper 1</p>
        <p className="mt-2 max-w-3xl leading-7 text-soft">
          Use the 50-day learning system during the day and practise topic-wise MCQs at night. This home page is fully static so the app opens even if MongoDB is temporarily unreachable on Vercel.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {quickLinks.map((item) => (
            <Link key={item.href} href={item.href} className="mini-card block p-4 transition hover:-translate-y-0.5 hover:border-blue-500">
              <span className="text-sm text-soft">{item.label}</span>
              <span className="mt-2 block text-xs leading-5 text-muted">{item.helper}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="card p-5">
          <p className="text-sm text-soft">Learn</p>
          <p className="mt-2 text-sm leading-6 text-muted">Deep notes, memory facts, PYQ traps and 50-day topic coverage for Paper 1.</p>
        </div>
        <div className="card p-5">
          <p className="text-sm text-soft">Practise</p>
          <p className="mt-2 text-sm leading-6 text-muted">Topic-wise JSON exports and learning-mode MCQs with explanation-based revision.</p>
        </div>
        <div className="card p-5">
          <p className="text-sm text-soft">Review</p>
          <p className="mt-2 text-sm leading-6 text-muted">Use bookmarks, wrong-question analysis and dashboard after MongoDB is configured.</p>
        </div>
      </section>
    </div>
  );
}
