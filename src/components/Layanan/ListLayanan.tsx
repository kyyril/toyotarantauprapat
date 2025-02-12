"use client";
import React, { useEffect, useState } from "react";
import CardLayanan from "./CardLayanan";
import { fetchLayanan } from "@/lib/utils/fetcher";
import { layanan } from "@/lib/interfaces/data.interface";
import Link from "next/link";

const ListLayanan: React.FC = () => {
  const [layananList, setLayananList] = useState<layanan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        const data: layanan[] | any = await fetchLayanan();
        setLayananList(data);
      } catch (error) {
        console.error("Error loading layanan data:", error);
        setError("Gagal memuat data layanan");
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loader"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {layananList.length > 0 ? (
        layananList.map((layanan) => (
          <Link
            key={layanan.id}
            href={`/layanan/${layanan.id}`}
            className="transition-transform hover:scale-105"
          >
            <CardLayanan layanan={layanan} />
          </Link>
        ))
      ) : (
        <div className="col-span-full text-center text-gray-500">
          Tidak ada layanan tersedia
        </div>
      )}
    </div>
  );
};

export default ListLayanan;
