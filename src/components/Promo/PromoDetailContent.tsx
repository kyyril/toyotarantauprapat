"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { PromosSkeletonDetail } from "./PromoSkeleton";
import PostPromoDialog from "./PostPromoForm";
import { usePromoDetailStore } from "@/lib/store/usePromoDetailStore";

export default function PromoDetailContent() {
  const searchParams = useSearchParams();
  const promoId = useMemo(() => searchParams.get("id") || "", [searchParams]);
  const { promoCache, isLoading, error, fetchPromoDetail } =
    usePromoDetailStore();

  useEffect(() => {
    if (promoId && !promoCache[promoId]) {
      fetchPromoDetail(promoId);
    }
  }, [promoId, promoCache, fetchPromoDetail]);

  if (!promoId) {
    return <div className="text-red-500">Promo ID tidak tersedia</div>;
  }

  if (isLoading) return <PromosSkeletonDetail />;
  if (error || !promoCache[promoId]) {
    return (
      <div className="text-red-500 text-center">
        Gagal memuat promo.{" "}
        <button
          onClick={() => fetchPromoDetail(promoId)}
          className="text-blue-500 underline"
        >
          Coba lagi
        </button>
      </div>
    );
  }
  const {
    nama,
    gambar,
    mulai,
    akhir,
    deskripsi,
    sub_judul,
    hashtag,
    mobil,
  }: any = promoCache[promoId];
  const parseArray = (value: any): string[] => {
    if (typeof value === "string" && value.includes(",")) {
      return value.split(",").map((v) => v.trim());
    }
    if (Array.isArray(value)) {
      return value.map((v) => v.toString());
    }
    return [value?.toString() || "--"];
  };

  const mobilList = parseArray(mobil);

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
        <div className="py-2">
          <PostPromoDialog namaPromo={nama} mobil={mobilList} />
        </div>
        <p className="text-gray-500">{deskripsi}</p>

        {mobilList.length > 0 && mobilList[0] !== "--" && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Mobil Terkait:</h3>
            <ul className="list-disc list-inside space-y-1">
              {mobilList.map((item, index) => (
                <li key={index} className="text-gray-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-6">{hashtag}</p>
      </div>
    </div>
  );
}
