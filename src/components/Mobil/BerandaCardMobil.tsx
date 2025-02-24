"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { CalendarDays, Cog, Gauge, MousePointerClickIcon } from "lucide-react";
import { useMobilStore } from "@/lib/store/useCarStore";
import { Skeleton } from "../ui/skeleton";

export function BerandaCardMobil() {
  const { cars, isLoading, fetchCars } = useMobilStore();

  useEffect(() => {
    if (cars.length === 0) {
      fetchCars();
    }
  }, [cars, fetchCars]);

  const parseArrayFirst = (value: any): string => {
    if (!value) return "--";
    if (typeof value === "string" && value.includes(",")) {
      return value.split(",")[0].trim();
    }
    if (Array.isArray(value)) {
      return value[0]?.toString() || "--";
    }
    return value.toString();
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-xl outline-none border-none dark:bg-black transition hover:scale-95 hover:shadow-xl ease-in-out"
          >
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
        ))}
      </div>
    );
  }

  return (
    <div className="mb-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2 gap-4">
        {cars.slice(4, 8).map((mobil, index) => (
          <Link
            href={`/mobil/${mobil.nama}`}
            key={index}
            className="block transition hover:scale-95 ease-in-out duration-300"
          >
            <div className="overflow-hidden rounded-lg shadow-xl outline-none border-none dark:bg-black">
              <div className="h-36 sm:h-40 overflow-hidden">
                <img
                  src={mobil.gambar || "/placeholder.png"}
                  alt={mobil.nama || "Mobil"}
                  className="object-cover w-full h-full"
                  width={100}
                  height={50}
                  loading="lazy"
                />
              </div>
              <div className="p-2 sm:p-3">
                <h3 className="text-sm sm:text-lg font-bold truncate">
                  {mobil.nama}
                </h3>
                <div className="flex flex-wrap gap-2 text-xs sm:text-sm mt-2">
                  <p className="flex items-center">
                    <Cog className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    {parseArrayFirst(mobil.transmisi)}
                  </p>
                  <p className="flex items-center">
                    {parseArrayFirst(mobil.cc)}CC
                  </p>
                  <p className="flex items-center">
                    <CalendarDays className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    {mobil.tahun || "-"}
                  </p>
                </div>
                <p className="text-base sm:text-lg font-semibold text-red-500 mt-2">
                  {parseArrayFirst(mobil.harga) !== "--"
                    ? `Rp ${parseArrayFirst(mobil.harga)}`
                    : "-"}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-4 text-center">
        <Link href="/mobil" className="inline-block">
          <Button variant="outline" className="group">
            Selengkapnya{" "}
            <MousePointerClickIcon className="ml-2 text-red-500 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
