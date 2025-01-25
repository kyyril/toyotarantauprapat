"use client";

import { Sales } from "@/lib/interfaces/data.interface";
import { fetchSalesDetail } from "@/lib/utils/fetcher";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function PromoDetail() {
  const searchParams = useSearchParams();
  const salesId = searchParams.get("id") || "ID tidak tersedia";

  const [detail, setDetail] = useState<Sales>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getSalesDetail() {
      try {
        const data = await fetchSalesDetail(salesId);
        setDetail(data);
      } catch (error) {
        console.error("Error fetching promo detail:", error);
      } finally {
        setIsLoading(false);
      }
    }

    if (salesId !== "ID tidak tersedia") {
      getSalesDetail();
    } else {
      setIsLoading(false);
    }
  }, [salesId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Loading...</p>
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

  const { id, nama, nohp, profile, deskripsi, gallery } = detail;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Sales Detail</h1>
      <div className="shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">{nama}</h2>
        <img
          src={profile}
          alt={nama}
          className="w-full h-auto rounded-md mb-4"
        />
        <p className="text-gray-700 mb-2">{nohp}</p>
        <p className="text-gray-700">
          <strong>Description:</strong> {deskripsi}
        </p>
      </div>
    </div>
  );
}

export default PromoDetail;
