import { Skeleton } from "@/components/ui/skeleton";

const PromoListSkeleton = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory">
          {Array.from({ length: 1 }).map((_, index) => (
            <div
              key={index}
              className="w-full min-w-[90vw] sm:min-w-[50vw] md:min-w-[40vw] lg:min-w-[30vw] flex-shrink-0 snap-start "
            >
              <div className="rounded-lg overflow-hidden shadow-xl outline-none border-none dark:bg-black">
                <Skeleton className="w-full h-screen max-h-screen " />
                <div className="p-2">
                  <Skeleton className="h-6 w-3/4 rounded" />
                  <Skeleton className="h-4 w-1/2 mt-2 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Lainnya</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="m-1 transition transform shadow-xl outline-none border-none dark:bg-black rounded-lg"
            >
              <Skeleton className="w-full h-32 rounded-t-lg" />
              <div className="p-2">
                <Skeleton className="h-5 w-3/4 rounded" />
                <Skeleton className="h-4 w-1/2 mt-2 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoListSkeleton;
