"use client";
import { Card } from "@/components/ui/card";
import { usePromoStore } from "@/lib/store/usePromoStore";
import { TimerIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import PromoListSkeleton from "./PromoListSkeleton";

export function CardPromo() {
  const { promos, isLoading, fetchPromos } = usePromoStore();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    if (promos.length === 0) {
      fetchPromos();
    }
  }, [fetchPromos, promos.length]);

  const totalPages = Math.ceil(promos.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) return <PromoListSkeleton />;

  const hotPromos = promos
    .filter((promo) => promo.id >= 100)
    .sort((a, b) => new Date(b.mulai).getTime() - new Date(a.mulai).getTime());

  const currentItems = promos
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    .sort((a, b) => new Date(b.mulai).getTime() - new Date(a.mulai).getTime());

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getDate()} ${date.toLocaleString("default", {
      month: "short",
    })} ${date.getFullYear()}`;
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory">
          {hotPromos.map((promo) => (
            <div
              key={promo.id}
              className="w-full min-w-[90vw] sm:min-w-[50vw] md:min-w-[40vw] lg:min-w-[30vw] flex-shrink-0 snap-start"
            >
              <Card className="rounded-lg overflow-hidden shadow-xl outline-none border-none dark:bg-black">
                <img
                  src={promo.gambar}
                  alt={promo.nama}
                  loading="lazy"
                  className="w-full max-h-screen object-cover"
                />
                <div className="p-2">
                  <h2 className="text-lg font-semibold text-ellipsis line-clamp-1">
                    {promo.nama}
                  </h2>
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <TimerIcon className="w-4 h-4" />
                    {formatDate(promo.mulai)} - {formatDate(promo.akhir)}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Lainnya</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {currentItems.map((promo) => (
            <Link
              href={{ pathname: "/promodetail", query: { id: promo?.id } }}
              key={promo.id}
            >
              <Card className="m-1 transition transform shadow-xl outline-none border-none dark:bg-black hover:scale-95 hover:bg-secondary active:bg-primary-foreground duration-200 ease-in-out rounded-lg">
                <img
                  src={promo.gambar}
                  alt={promo.nama}
                  loading="lazy"
                  className="w-full h-32 object-cover rounded-t-lg"
                />
                <div className="p-2">
                  <h2 className="text-base font-medium text-ellipsis line-clamp-1">
                    {promo.nama}
                  </h2>
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <TimerIcon className="w-4 h-4" />
                    <p className="text-ellipsis line-clamp-1">
                      {formatDate(promo.mulai)} - {formatDate(promo.akhir)}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
