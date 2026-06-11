export const dynamic = "force-dynamic";

import Link from "next/link";
import TestCard from "@/components/TestCard";
import TestFilters from "@/components/TestFilters";
import { getTestsData } from "@/lib/serverData";

export default async function TestsPage({ searchParams }: { searchParams: Promise<Record<string,string>> }) {
  const sp = await searchParams;
  const data = await getTestsData(sp);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted">Showing {data.tests?.length || 0} of {data.total || 0} tests</p>
        <Link href="/upload" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white">Upload</Link>
      </div>

      <TestFilters filters={data.filters} />

      {data.tests?.length ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.tests.map((test: any) => <TestCard key={test._id} test={JSON.parse(JSON.stringify(test))} />)}
        </div>
      ) : (
        <div className="card p-8 text-center">
          <p className="text-muted">No tests found. Reset filters to show every available test.</p>
          <Link href="/upload" className="mt-4 inline-block rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white">Upload test</Link>
        </div>
      )}
    </div>
  );
}
