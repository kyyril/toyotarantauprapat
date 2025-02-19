import { Skeleton } from "@/components/ui/skeleton";

const DetailLayananSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-2xl shadow-md">
      <Skeleton className="h-10 w-3/4" />
      <Skeleton className="h-6 w-1/2 mt-2" />

      {/* Gallery Skeleton */}
      <div className="mt-4">
        <Skeleton className="h-40 w-full" />
      </div>

      {/* Deskripsi Layanan */}
      <div className="mt-6">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-6 w-full mt-2" />
        <Skeleton className="h-6 w-full mt-2" />
      </div>

      {/* Poin-poin layanan */}
      {["Layanan", "Keunggulan", "Kemudahan", "Langkah-Langkah"].map(
        (title, index) => (
          <div key={index} className="mt-6">
            <Skeleton className="h-8 w-1/3" />
            <div className="mt-2 space-y-2">
              {Array.from({ length: 3 }).map((_, idx) => (
                <Skeleton key={idx} className="h-5 w-3/4" />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export { DetailLayananSkeleton };
