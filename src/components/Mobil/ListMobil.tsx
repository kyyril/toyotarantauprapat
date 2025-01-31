"use client";

import { useState, useEffect } from "react";
import { Mobil } from "@/lib/interfaces/mobil.interface";
import { Input } from "@/components/ui/input";
import MobilCard from "./MobilCard";

interface ListMobilProps {
  data: Mobil[];
}

const ListMobil: React.FC<ListMobilProps> = ({ data }) => {
  const parseArray = (value: any): string[] => {
    if (typeof value === "string" && value.includes(",")) {
      return value.split(",").map((v) => v.trim());
    }
    if (Array.isArray(value)) {
      return value.map((v) => v.toString());
    }
    return [value?.toString() || "Unknown"];
  };

  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [categoryFilter, setCategoryFilter] = useState<string>(""); // Filter kategori
  const [groupedData, setGroupedData] = useState<{ [key: string]: Mobil[] }>(
    {}
  );

  // Function to group data by kategori
  const groupByCategory = (data: Mobil[]): { [key: string]: Mobil[] } => {
    return data.reduce((acc, mob) => {
      const categories = parseArray(mob.kategori);
      categories.forEach((cat) => {
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(mob);
      });
      return acc;
    }, {} as { [key: string]: Mobil[] });
  };

  useEffect(() => {
    const grouped = groupByCategory(data);
    setGroupedData(grouped);
  }, [data]);

  // Function untuk mendapatkan harga terendah dengan membaca seluruh index
  const getLowestPrice = (harga: string | undefined) => {
    if (!harga) return Infinity; // Jika tidak ada harga, return angka terbesar

    const parsedHarga = parseArray(harga);
    const hargaNumbers = parsedHarga
      .map((h) => h.replace(/\D/g, "")) // Hilangkan karakter non-angka
      .map((h) => parseInt(h, 10)) // Ubah ke integer
      .filter((h) => !isNaN(h)); // Hanya ambil angka valid

    return hargaNumbers.length > 0 ? Math.min(...hargaNumbers) : Infinity;
  };

  return (
    <div className="container mx-auto p-4">
      {/* Search, Sorting, and Category Filter */}
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari Mobil..."
          className="w-full sm:w-1/3 p-2 border rounded"
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
          className="w-full sm:w-1/3 p-2 border rounded"
        >
          <option value="asc">Harga Terendah</option>
          <option value="desc">Harga Tertinggi</option>
        </select>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full sm:w-1/3 p-2 border rounded"
        >
          <option value="">Semua Kategori</option>
          {Object.keys(groupedData).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Display List of Mobil */}
      {Object.entries(groupedData)
        .filter(([category]) => !categoryFilter || category === categoryFilter) // Filter berdasarkan kategori
        .map(([category, mobils]) => (
          <div key={category} className="mb-6">
            <h2 className="text-2xl font-bold mb-4">{category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {mobils
                .filter((mob) =>
                  mob.nama.toLowerCase().includes(query.toLowerCase())
                )
                .sort((a, b) => {
                  const hargaA = getLowestPrice(a.harga); // Baca semua harga
                  const hargaB = getLowestPrice(b.harga);
                  return sortOrder === "asc"
                    ? hargaA - hargaB
                    : hargaB - hargaA;
                })
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
        ))}
    </div>
  );
};

export default ListMobil;
