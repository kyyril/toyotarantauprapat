import { Skeleton } from "@/components/ui/skeleton";

export default function CarDetailSkeleton() {
  return (
    <main className="w-full flex flex-col items-center min-h-screen p-5 max-w-7xl">
      {/* Header */}
      <header className="w-full max-w-4xl text-center mb-8">
        <Skeleton className="h-8 w-48 mx-auto" />
        <Skeleton className="h-5 w-32 mx-auto mt-2" />
      </header>

      <div className="flex flex-col lg:flex-row lg:space-x-8 w-full max-w-4xl">
        {/* Section Kiri */}
        <section className="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col items-center">
          <Skeleton className="w-full max-h-96 h-56 object-contain rounded-md mb-5" />
          <Skeleton className="h-10 w-48" />
        </section>

        {/* Section Kanan */}
        <section className="w-full lg:w-1/2 flex flex-col space-y-4">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-4 w-64" />

          <div className="flex space-x-4 justify-center mx-auto items-center">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
          </div>

          <div className="flex space-x-4 justify-center mx-auto items-center">
            <Skeleton className="h-10 w-48" />
            <Skeleton className="h-10 w-32" />
          </div>
        </section>
      </div>

      {/* Spesifikasi */}
      <div className="w-full max-w-4xl rounded-lg mt-4 p-5 mb-8">
        <Skeleton className="h-6 w-40 mb-4" />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <li key={index} className="p-4 rounded-lg bg-secondary">
                <Skeleton className="h-5 w-32 mb-1" />
                <Skeleton className="h-4 w-24" />
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}
