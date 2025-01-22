"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Mobil } from "@/lib/interfaces/mobil.interface";

interface MobilCardProps {
  mobil: Mobil;
  query: string;
  getLowestPrice: (harga: string) => number;
}

const MobilCard: React.FC<MobilCardProps> = ({
  mobil,
  query,
  getLowestPrice,
}) => {
  // Function to highlight the query in the car name
  const highlightQuery = (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-red-500 rounded-l-md rounded-t-md">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <Link href={`/mobil/${mobil.nama}`}>
      <Card className="overflow-hidden">
        <div className="h-40 overflow-hidden">
          <img
            src={mobil.gambar || "/placeholder.png"}
            alt={mobil.nama || "Mobil"}
            className="object-cover rounded-sm w-full h-full"
          />
        </div>
        <div className="p-2">
          <h3 className="text-lg font-bold">
            {highlightQuery(mobil.nama, query)}
          </h3>
        </div>
        <div className="flex flex-wrap">
          {mobil.kategori.map((kat, index) => (
            <span
              className="bg-red-500 rounded-md text-sm mx-1 px-2 py-1"
              key={index}
            >
              {kat}
            </span>
          ))}
        </div>
        <div className="p-1 px-2">
          <p className="text-lg font-semibold text-red-500">
            {mobil.harga
              ? `Rp ${getLowestPrice(mobil.harga).toLocaleString()}`
              : "-"}
          </p>
          <p className="text-sm text-gray-700">{mobil.transmisi || "-"}</p>
          <p className="text-sm text-gray-700">{mobil.tahun || "-"}</p>
          <p className="text-sm text-gray-700">
            {mobil.cc ? `${mobil.cc} cc` : "-"}
          </p>
        </div>
      </Card>
    </Link>
  );
};

export default MobilCard;
