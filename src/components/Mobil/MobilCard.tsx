"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Mobil } from "@/lib/interfaces/mobil.interface";
import { CalendarDays, Cog, Gauge } from "lucide-react";

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
  const parseArray = (value: any): string[] => {
    if (typeof value === "string" && value.includes(",")) {
      return value.split(",").map((v) => v.trim());
    }
    if (Array.isArray(value)) {
      return value.map((v) => v.toString());
    }
    return [value?.toString() || "Unknown"];
  };

  const hargaArray = parseArray(mobil.harga);
  const transmissionArray = parseArray(mobil.transmisi);
  const ccArray = parseArray(mobil.cc);
  const kategoriArray = parseArray(mobil.kategori);

  const harga = hargaArray[0];
  const transmisi = transmissionArray[0];
  const cc = ccArray[0];
  const kategori = kategoriArray.join(", "); // Gabungkan kategori dengan koma

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
        <div className="p-1">
          <h3 className="text-lg font-bold">
            {highlightQuery(mobil.nama, query)}
          </h3>
        </div>
        <div className="px-1">
          <div className="flex flex-row">
            <p className="text-sm flex">
              {" "}
              <Cog className="w-4 h-4 mt-0.5 mx-0.5" />
              {transmisi || "-"}
            </p>
            <p className="text-sm mx-2 flex flex-row">
              <Gauge className="w-4 h-4 mt-0.5 mx-0.5" />
              {cc ? `${cc} CC` : "-"}
            </p>
            <p className="text-sm flex">
              <CalendarDays className="w-4 h-4 mt-0.5 mx-0.5" />{" "}
              {mobil.tahun || "-"}
            </p>
          </div>
          <p className="text-lg font-semibold text-red-500">
            {harga ? `Rp ${parseInt(harga, 10).toLocaleString()}` : "-"}
          </p>
        </div>
      </Card>
    </Link>
  );
};

export default MobilCard;
