import Link from "next/link";
export default function NotFound() {
  return <div className="card p-10 text-center"><p className="text-base font-medium">Page not found</p><p className="mt-2 text-muted">The page you opened does not exist.</p><Link href="/" className="mt-5 inline-block rounded-xl bg-blue-600 px-5 py-3 font-medium text-white">Go Home</Link></div>;
}
