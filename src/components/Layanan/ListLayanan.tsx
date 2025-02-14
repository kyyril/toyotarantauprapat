"use client";

import React from "react";
import CardLayanan from "./CardLayanan";
import { layanan } from "@/lib/interfaces/data.interface";
import Link from "next/link";

interface ListLayananProps {
  layananList: layanan[];
}

const ListLayanan: React.FC<ListLayananProps> = ({ layananList }) => {
  if (!layananList || layananList.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Tidak ada layanan tersedia
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {layananList.map((layanan) => (
        <Link
          key={layanan.id}
          href={`/layanan/${layanan.id}`}
          className="transition-transform hover:scale-105"
        >
          <CardLayanan layanan={layanan} />
        </Link>
      ))}
    </div>
  );
};

export default ListLayanan;
