"use client";

import { Card } from "@/components/ui/card";
import { Sales } from "@/lib/interfaces/data.interface";
import { fetchSales } from "@/lib/utils/fetcher";

import Link from "next/link";
import { useEffect, useState } from "react";

export function CardSales() {
  const [sales, setSales] = useState<Sales[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPromoData() {
      try {
        const data = await fetchSales();
        setSales(data);
      } catch (error) {
        console.error("Error fetching promo:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadPromoData();
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-2 border-t-2 border-t-red-500 border-dotted rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center mb-4 mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {sales.map((sal) => (
          <Link href={`/sales/${sal.id}`} key={sal.id}>
            <Card className="m-1 p-2 rounded-lg overflow-hidden transition transform hover:bg-secondary active:bg-primary-foreground hover:scale-95 duration-200 ease-in-out">
              <div className="flex flex-col items-center">
                <img
                  src={sal.profile}
                  alt={sal.nama}
                  loading="lazy"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-red-500"
                />
                <div className="text-center mt-2">
                  <h2 className="text-sm sm:text-base font-semibold truncate">
                    {sal.nama}
                  </h2>
                  <h3 className="text-xs sm:text-sm text-gray-500">
                    {sal.nohp}
                  </h3>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
