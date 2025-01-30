"use client";

import { Card } from "@/components/ui/card";
import { Sales } from "@/lib/interfaces/data.interface";
import { fetchSales } from "@/lib/utils/fetcher";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { MousePointerClickIcon } from "lucide-react";

export function BerandaCardSales() {
  const [sales, setSales] = useState<Sales[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadSalesData() {
      try {
        const data = await fetchSales();
        setSales(data);
      } catch (error) {
        console.error("Error fetching sales:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadSalesData();
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-primary-foreground">
        <div className="w-16 h-16 border-2 border-t-2 border-t-red-500 rounded-full border-dotted animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Tampilkan maksimal 4 data sales */}
        {sales.slice(0, 4).map((sal) => (
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
                  <h2 className="text-sm sm:text-base font-semibold">
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

      {/* Tombol "Selengkapnya" untuk melihat semua sales */}
      <div className="mt-4 text-center">
        <Link href="/sales">
          <Button variant={"secondary"}>
            Selengkapnya <MousePointerClickIcon className="text-red-500" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
