import { Skeleton } from "@/components/ui/skeleton";

const LayananListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg shadow-xl dark:bg-black transition hover:scale-95 hover:shadow-xl ease-in-out"
        >
          <Skeleton className="w-full h-48 rounded-lg" />
          <div className="mx-2 mt-2">
            <Skeleton className="h-5 w-3/4 rounded" />
            <Skeleton className="h-4 w-5/6 mt-1 rounded" />
            <Skeleton className="h-4 w-2/3 mt-1 mb-2 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LayananListSkeleton;
