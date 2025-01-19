"use client";

import { Mobil } from "@/lib/interfaces/mobil.interface";

import { useState } from "react";
import { Input } from "../ui/input";
import { MobilCard } from "./MobilCard";

export function ListMobil({ data }: { data: Mobil[] }) {
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const getLowestPrice = (harga: string) => {
    const hargaArray = harga.split(",").map((h) => parseInt(h.trim(), 10));
    return Math.min(...hargaArray);
  };

  const sortedData = [...data].sort((a, b) => {
    const hargaA = getLowestPrice(a.harga || "0");
    const hargaB = getLowestPrice(b.harga || "0");
    return sortOrder === "asc" ? hargaA - hargaB : hargaB - hargaA;
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center">
        <Input
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          placeholder="Cari Mobil.."
          className="border rounded px-3 py-2 w-3/4"
        />
        <select
          onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
          className="border rounded px-3 py-2 w-1/4"
        >
          <option value="asc">Harga Terendah</option>
          <option value="desc">Harga Tertinggi</option>
        </select>
      </div>
      <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedData
          .filter((mob) => mob.nama.toLocaleLowerCase().includes(query))
          .map((mob) => (
            <MobilCard
              key={mob.id}
              mobil={mob}
              query={query}
              getLowestPrice={getLowestPrice}
            />
          ))}
      </div>
    </div>
  );
}
