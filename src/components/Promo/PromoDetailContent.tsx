"use client";

import { fetchPromoDetail } from "@/lib/utils/fetcher";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PromosSkeletonDetail } from "./PromoSkeleton";

export default function PromoDetailContent() {
  const searchParams = useSearchParams();
  const promoId = searchParams.get("id") || "ID tidak tersedia";
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPromoDetail() {
      if (promoId === "ID tidak tersedia") {
        setIsLoading(false);
        return;
      }

      try {
        const data = await fetchPromoDetail(promoId);
        setDetail(data);
      } catch (error) {
        console.error("Error fetching promo detail:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getPromoDetail();
  }, [promoId]);

  if (isLoading) {
    return <PromosSkeletonDetail />;
  }

  if (!detail) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg">
          No details available for this promo.
        </p>
      </div>
    );
  }

  const { nama, gambar, mulai, akhir, deskripsi, sub_judul, hashtag } = detail;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Promo Detail</h1>
      <div className="rounded-lg p-6">
        <img
          src={gambar}
          alt={nama}
          className="w-full h-auto rounded-md mb-4"
          loading="lazy"
        />

        <div className="flex flex-row gap-x-4">
          <p className="mb-2 text-sm">
            <strong>Mulai:</strong>{" "}
            {new Date(mulai).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
          <p className="mb-2 text-sm">
            <strong>Akhir:</strong>{" "}
            {new Date(akhir).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
        <h2 className="text-2xl font-semibold mt-4">{nama}</h2>
        <h2 className="text-xl font-semibold mb-4">{sub_judul}</h2>
        <p className="text-gray-500">{deskripsi}</p>
        <p className="mt-6">{hashtag}</p>
      </div>
    </div>
  );
}
