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
import { TimerIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

export function CardPromo() {
  const [promos, setPromos] = useState<Promo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Jumlah item per halaman

  const totalPages = Math.ceil(promos.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // Items for current page
  const currentItems = promos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto p-4">
      {/* Hot Promos Section */}
      <div className="mb-6">
        <div className="flex space-x-4 overflow-x-auto">
          {hotPromos.map((promo) => (
            <div
              key={promo.id}
              className="w-screen min-w-[100vw] flex-shrink-0 m-1"
            >
              <Card className="border-none rounded-none shadow-none outline-none">
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
                  <TimerIcon /> {formatDate(promo.mulai)} -{" "}
                  {formatDate(promo.akhir)}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Other Promos Section */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Lainnya</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentItems.map((promo) => (
            <Link
              href={{ pathname: "/promodetail", query: { id: promo?.id } }}
              key={promo.id}
            >
              <Card className="m-1 transition transform hover:bg-secondary active:bg-primary-foreground hover:scale-95 duration-200 ease-in-out">
                <CardHeader>
                  <CardTitle>{promo.nama}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={promo.gambar} alt={promo.nama} loading="lazy" />
                </CardContent>
                <CardFooter className="text-sm">
                  <TimerIcon /> {formatDate(promo.mulai)} -{" "}
                  {formatDate(promo.akhir)}
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
