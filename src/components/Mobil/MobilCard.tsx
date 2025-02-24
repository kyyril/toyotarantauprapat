"use client";

import React from "react";
import Link from "next/link";
import { Mobil } from "@/lib/interfaces/mobil.interface";
import { CalendarDays, Cog, Gauge } from "lucide-react";

interface MobilCardProps {
  mobil: Mobil;
  query: string;
  getLowestPrice: (harga: string) => number;
}

const MobilCard: React.FC<MobilCardProps> = ({ mobil, query }) => {
  const parseArray = (value: any): string[] => {
    if (typeof value === "string" && value.includes(",")) {
      return value.split(",").map((v) => v.trim());
    }
    if (Array.isArray(value)) {
      return value.map((v) => v.toString());
    }
    return [value?.toString() || "--"];
  };

  const hargaArray = parseArray(mobil.harga);
  const transmissionArray = parseArray(mobil.transmisi);
  const ccArray = parseArray(mobil.cc);
  const kategoriArray = parseArray(mobil.kategori);

  const harga = hargaArray[0];
  const transmisi = transmissionArray[0];
  const cc = ccArray[0];
  const kategori = kategoriArray.join(", ");

  const highlightQuery = (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-red-500 px-1 rounded-md">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <Link href={`/mobil/${mobil.nama}`}>
      <div className="overflow-hidden rounded-lg shadow-xl dark:bg-black transition hover:scale-95 hover:shadow-xl ease-in-out ">
        <div className="h-36 sm:h-40 overflow-hidden">
          <img
            src={mobil.gambar || "/placeholder.png"}
            alt={mobil.nama || "Mobil"}
            className="object-cover w-full h-full"
            width={100}
            height={50}
            loading="lazy"
          />
        </div>
        <div className="p-2 sm:p-3">
          <h3 className="text-sm sm:text-lg font-bold truncate">
            {highlightQuery(mobil.nama, query)}
          </h3>
        </div>
        <div className="px-2 sm:px-3">
          <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
            <p className="flex items-center">
              <Cog className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              {transmisi || "-"}
            </p>
            <p className="flex items-center">{cc ? `${cc}` : "-"}CC</p>
            <p className="flex items-center">
              <CalendarDays className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              {mobil.tahun || "-"}
            </p>
          </div>
          <p className="text-base sm:text-lg font-semibold text-red-500 mt-1">
            {harga ? `Rp ${harga}` : "-"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MobilCard;
