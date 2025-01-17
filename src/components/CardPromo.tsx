"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Promo } from "@/lib/interfaces/data.interface";
import { fetchPromo } from "@/lib/utils/fetcher";
import { useEffect, useState } from "react";

export function CardPromo() {
  const [promos, setPromos] = useState<Promo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPromoData() {
      try {
        const data = await fetchPromo();
        setPromos(data);
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

  const hotPromos = promos.filter((promo) => promo.id >= 100);
  const regularPromos = promos.filter((promo) => promo.id < 100);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Promo🔥</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {hotPromos.map((promo) => (
            <div
              key={promo.id}
              className="w-screen min-w-[100vw] flex-shrink-0 m-1 transition transform hover:bg-secondary active:bg-primary-foreground hover:scale-95 duration-200 ease-in-out"
            >
              <Card className=" rounded-none shadow-none outline-none">
                <CardHeader>
                  <CardTitle>{promo.nama}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <img
                    src={promo.gambar}
                    alt={promo.nama}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </CardContent>
                <CardFooter className="text-sm">
                  {promo.mulai} - {promo.akhir}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Lainnya</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {regularPromos.map((promo) => (
            <Card
              key={promo.id}
              className="m-1 transition transform hover:bg-secondary active:bg-primary-foreground hover:scale-95 duration-200 ease-in-out"
            >
              <CardHeader>
                <CardTitle>{promo.nama}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={promo.gambar} alt={promo.nama} loading="lazy" />
              </CardContent>
              <CardFooter className="text-sm">
                {promo.mulai} - {promo.akhir}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
