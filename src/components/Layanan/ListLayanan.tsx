"use client";

import React, { useEffect } from "react";
import CardLayanan from "./CardLayanan";
import { layanan } from "@/lib/interfaces/data.interface";
import Link from "next/link";
import { useLayananStore } from "@/lib/store/useLayananStore";
import LayananListSkeleton from "./LayananListSkeleton";

const ListLayanan = () => {
  const { layananList, isLoading, fetchLayanan } = useLayananStore();

  useEffect(() => {
    if (layananList.length === 0) {
      fetchLayanan();
    }
  }, [layananList, fetchLayanan]);

  if (isLoading) return <LayananListSkeleton />;

  if (!layananList || layananList.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Tidak ada layanan tersedia
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4">
      {layananList.map((layanan: layanan) => (
        <Link key={layanan.id} href={`/layanan/${layanan.id}`}>
          <CardLayanan layanan={layanan} />
        </Link>
      ))}
    </div>
  );
};

export default ListLayanan;
