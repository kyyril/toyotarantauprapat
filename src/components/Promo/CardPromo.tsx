"use client";
import { Card } from "@/components/ui/card";
import { usePromoStore } from "@/lib/store/usePromoStore";
import { TimerIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import Pagination from "./Pagination";
import PromoListSkeleton from "./PromoListSkeleton";

export function CardPromo() {
  const { promos, isLoading, fetchPromos } = usePromoStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<"mobil" | "layanan">(
    "mobil"
  );
  const itemsPerPage = 4;

  // Get latest promos based on selected category
  const hotPromos = useMemo(() => {
    const filteredPromos = promos.filter((promo) => {
      if (selectedCategory === "layanan") {
        return promo.id >= 200;
      }
      return promo.id < 200;
    });

    return filteredPromos
      .sort((a, b) => new Date(b.mulai).getTime() - new Date(a.mulai).getTime())
      .slice(0, 2);
  }, [promos, selectedCategory]);

  useEffect(() => {
    if (promos.length === 0) {
      fetchPromos();
    }
  }, [fetchPromos, promos.length]);

  // Filter berdasarkan kategori
  const filteredPromos = promos.filter((promo) => {
    if (selectedCategory === "layanan") {
      return promo.id >= 200; // Hanya menampilkan promo layanan dengan id > 200
    }
    return promo.id < 200; // Default menampilkan semua promo mobil
  });

  const totalPages = Math.ceil(filteredPromos.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) return <PromoListSkeleton />;

  const currentItems = filteredPromos
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
      {/* Filter kategori */}
      <div className="flex gap-4 mb-4 justify-end w-full font-semibold text-sm">
        <button
          className={`px-4 py-2 rounded-full transition-all duration-200 ${
            selectedCategory === "mobil"
              ? "bg-red-500 text-white"
              : "hover:bg-red-500/10"
          }`}
          onClick={() => setSelectedCategory("mobil")}
        >
          Promo Mobil
        </button>
        <button
          className={`px-4 py-2 rounded-full transition-all duration-200 ${
            selectedCategory === "layanan"
              ? "bg-red-500 text-white"
              : "hover:bg-red-500/10"
          }`}
          onClick={() => setSelectedCategory("layanan")}
        >
          Promo Layanan
        </button>
      </div>

      {/* Hot Promo Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Hot Promo {selectedCategory === "layanan" ? "Layanan" : "Mobil"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hotPromos.map((promo) => (
            <Link
              href={{ pathname: "/promodetail", query: { id: promo?.id } }}
              key={promo.id}
            >
              <Card className="group rounded-lg overflow-hidden shadow-xl outline-none border-none dark:bg-black hover:scale-[0.98] transition-all duration-200">
                <div className="relative">
                  <img
                    src={promo.gambar}
                    alt={promo.nama}
                    loading="lazy"
                    className="w-full h-72 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                      {promo.nama}
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      <TimerIcon className="w-4 h-4" />
                      <span>
                        {formatDate(promo.mulai)} - {formatDate(promo.akhir)}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Promo Lainnya */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">
          Promo {selectedCategory === "layanan" ? "Layanan" : "Mobil"} Lainnya
        </h2>
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

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
