import { Skeleton } from "@/components/ui/skeleton";

const MobilListSkeleton = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <Skeleton className="w-full sm:w-1/3 h-10" />
        <Skeleton className="w-full sm:w-1/3 h-10" />
        <Skeleton className="w-full sm:w-1/3 h-10" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <MobilCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

const MobilCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-lg shadow-xl outline-none border-none dark:bg-black transition hover:scale-95 hover:shadow-xl ease-in-out">
      <Skeleton className="h-36 sm:h-40 w-full" />
      <div className="p-2 sm:p-3">
        <Skeleton className="h-5 w-3/4" />
      </div>
      <div className="px-2 sm:px-3">
        <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
        </div>
        <Skeleton className="h-6 w-1/2 mt-2" />
      </div>
    </div>
  );
};

export { MobilListSkeleton };
