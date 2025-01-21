"use client";

import { useState, useEffect } from "react";
import { Mobil } from "@/lib/interfaces/mobil.interface";
import { Input } from "@/components/ui/input";
import MobilCard from "./MobilCard";

interface ListMobilProps {
  data: Mobil[];
}

const ListMobil: React.FC<ListMobilProps> = ({ data }) => {
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortedData, setSortedData] = useState<Mobil[]>(data);

  useEffect(() => {
    const sorted = [...data].sort((a, b) => {
      const hargaA = getLowestPrice(a.harga);
      const hargaB = getLowestPrice(b.harga);
      return sortOrder === "asc" ? hargaA - hargaB : hargaB - hargaA;
    });
    setSortedData(sorted);
  }, [data, sortOrder]);

  // Function to get the lowest price from a comma-separated string
  const getLowestPrice = (harga: string | undefined) => {
    if (typeof harga === "string") {
      const hargaArray = harga
        .split(",")
        .map((h) => parseInt(h.trim(), 10))
        .filter((h) => !isNaN(h));
      return Math.min(...hargaArray);
    }
    return 0;
  };

  return (
    <div className="container mx-auto p-4">
      {/* Search and Sorting */}
      <div className="flex justify-between items-center mb-4">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari Mobil..."
          className="w-3/4 p-2 border rounded"
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
          className="w-1/4 p-2 border rounded"
        >
          <option value="asc">Harga Terendah</option>
          <option value="desc">Harga Tertinggi</option>
        </select>
      </div>

      {/* Display List of Mobil */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedData
          .filter((mob) => mob.nama.toLowerCase().includes(query.toLowerCase()))
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
};

export default ListMobil;
