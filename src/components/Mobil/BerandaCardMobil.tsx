"use client";

import { fetchMobil } from "@/lib/utils/fetcher";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { CalendarDays, Cog, Gauge, MousePointerClickIcon } from "lucide-react";
import { Mobil } from "@/lib/interfaces/mobil.interface";

export function BerandaCardMobil() {
  const [cars, setCars] = useState<Mobil[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadSalesData() {
      try {
        const data = await fetchMobil();
        setCars(data);
      } catch (error) {
        console.error("Error fetching sales:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadSalesData();
  }, []);

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
      <div className="flex items-center justify-center h-screen">
        <span className="loader"></span>
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
                    <Gauge className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    {parseArrayFirst(mobil.cc)}
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
