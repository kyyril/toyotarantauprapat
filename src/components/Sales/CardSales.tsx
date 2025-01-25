"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
        <div className="w-16 h-16 border-2 border-t-2 border-t-red-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <h2 className="text-2xl font-semibold">Sales</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sales.map((sal, index) => (
          <Link
            href={{ pathname: "/salesdetail", query: { id: sal?.id } }}
            key={sal.id}
          >
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
    </div>
  );
}
