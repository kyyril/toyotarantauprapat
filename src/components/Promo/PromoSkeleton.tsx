import { Skeleton } from "@/components/ui/skeleton";

export function PromosSkeletonDetail() {
  return (
    <>
      {/* Promo Detail Skeleton */}
      <div className="max-w-4xl mx-auto p-6">
        <Skeleton className="h-10 w-48 mb-6" />
        <div className="rounded-lg p-6">
          <Skeleton className="w-full h-64 rounded-md mb-4" />
          <div className="flex flex-row gap-x-4">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-6 w-3/4 mt-4" />
          <Skeleton className="h-5 w-1/2 mb-4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4 mt-2" />
          <Skeleton className="h-4 w-1/2 mt-2" />
        </div>
      </div>
    </>
  );
}
