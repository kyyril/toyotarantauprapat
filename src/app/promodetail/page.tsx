"use client";

import { fetchPromoDetail } from "@/lib/utils/fetcher";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function PromoDetail() {
  const searchParams = useSearchParams();
  const promoId = searchParams.get("id") || "ID tidak tersedia";
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPromoDetail() {
      try {
        const data = await fetchPromoDetail(promoId);
        setDetail(data);
      } catch (error) {
        console.error("Error fetching promo detail:", error);
      } finally {
        setIsLoading(false);
      }
    }

    if (promoId !== "ID tidak tersedia") {
      getPromoDetail();
    } else {
      setIsLoading(false);
    }
  }, [promoId]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-primary-foreground">
        <div className="w-16 h-16 border-2 border-t-2 border-t-red-500 rounded-full border-dotted animate-spin"></div>
      </div>
    );
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

  const { nama, gambar, mulai, akhir, deskripsi } = detail;

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
          <p className=" mb-2">
            <strong>Start Date:</strong>{" "}
            {new Date(mulai).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
          <p className=" mb-2">
            <strong>End Date:</strong>{" "}
            {new Date(akhir).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
        <h2 className="text-2xl font-semibold my-4">{nama}</h2>
        <p className="text-gray-600">{deskripsi}</p>
      </div>
    </div>
  );
}

export default PromoDetail;
