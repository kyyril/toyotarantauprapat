"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sales } from "@/lib/interfaces/data.interface";
import { fetchSales } from "@/lib/utils/fetcher";

import Link from "next/link";
import { useEffect, useState } from "react";

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
            <Card className="m-1 transition transform hover:bg-secondary active:bg-primary-foreground hover:scale-95 duration-200 ease-in-out">
              <CardContent>
                <img src={sal.profile} alt={sal.nama} loading="lazy" />
              </CardContent>
              <CardHeader>
                <CardTitle>{sal.nama}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      {/* Tombol "Selengkapnya" untuk melihat semua sales */}
      <div className="mt-4 text-center">
        <Link href="/sales">
          <button className="px-4 py-2 bg-secondary rounded-lg hover:bg-primary-dark">
            Selengkapnya
          </button>
        </Link>
      </div>
    </div>
  );
}
