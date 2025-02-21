const SalesListSkeleton = () => {
  return (
    <div className="grid mx-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg shadow-xl dark:bg-black transition hover:scale-95 hover:shadow-xl ease-in-out animate-pulse"
        >
          <div className="flex flex-col items-center p-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="text-center mt-2 w-full">
              <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 mx-auto rounded" />
              <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-700 mx-auto mt-1 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SalesListSkeleton;
