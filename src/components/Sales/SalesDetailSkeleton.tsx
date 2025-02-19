import { Skeleton } from "@/components/ui/skeleton";

export default function SalesDetailsSkeleton() {
  return (
    <main className="flex justify-center items-start min-h-screen py-10 px-5 w-full">
      <section className="w-full max-w-4xl bg-background shadow-sm rounded-xl p-6">
        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="flex justify-center">
            <Skeleton className="w-80 h-80 rounded-full border-2" />
          </div>

          {/* Right Section */}
          <div>
            <Skeleton className="h-6 w-40 mb-3" />
            <Skeleton className="h-16 w-full mb-3" />
            <Skeleton className="h-10 w-36 mt-4" />
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </section>
    </main>
  );
}
