import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

const PromoListSkeleton = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Filter kategori */}
      <div className="flex gap-4 mb-4 justify-end w-full font-semibold text-sm">
        <Skeleton className="w-32 h-10 rounded-full" />
        <Skeleton className="w-32 h-10 rounded-full" />
      </div>

      {/* Hot Promo Section */}
      <div className="mb-8">
        <Skeleton className="h-8 w-64 rounded mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 2 }).map((_, index) => (
            <Card key={index} className="rounded-lg overflow-hidden shadow-xl">
              <Skeleton className="w-full h-72" />
              <div className="p-4">
                <Skeleton className="h-6 w-3/4 rounded mb-2" />
                <Skeleton className="h-4 w-1/2 rounded" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Promo Lainnya */}
      <div className="mb-4">
        <Skeleton className="h-8 w-64 rounded mb-2" />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <Card
              key={index}
              className="m-1 transition transform shadow-xl rounded-lg"
            >
              <Skeleton className="w-full h-32 rounded-t-lg" />
              <div className="p-2">
                <Skeleton className="h-5 w-3/4 rounded mb-1" />
                <Skeleton className="h-4 w-1/2 rounded" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoListSkeleton;
