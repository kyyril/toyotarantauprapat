"use client";

import { useState, useEffect } from "react";

import { Input } from "@/components/ui/input";
import MobilCard from "./MobilCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useMobilStore } from "@/lib/store/useCarStore";
import { MobilListSkeleton } from "./MobilListSkeleton";

const ListMobil = () => {
  const { cars, isLoading, fetchCars } = useMobilStore();
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [groupedData, setGroupedData] = useState<{ [key: string]: any[] }>({});

  // Fetch cars on mount
  useEffect(() => {
    if (cars.length === 0) {
      fetchCars();
    }
  }, [cars, fetchCars]);

  // Keep existing parseArray function
  const parseArray = (value: any): string[] => {
    if (typeof value === "string" && value.includes(",")) {
      return value.split(",").map((v) => v.trim());
    }
    if (Array.isArray(value)) {
      return value.map((v) => v.toString());
    }
    return [value?.toString() || "Unknown"];
  };

  // Update groupByCategory to use cars from store
  const groupByCategory = (mobils: any[]): { [key: string]: any[] } => {
    return mobils.reduce((acc, mob) => {
      const categories = parseArray(mob.kategori);
      categories.forEach((cat) => {
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(mob);
      });
      return acc;
    }, {} as { [key: string]: any[] });
  };

  // Update useEffect to use cars from store
  useEffect(() => {
    if (cars && cars.length > 0) {
      const grouped = groupByCategory(cars);
      setGroupedData(grouped);
    }
  }, [cars]);

  // Keep existing helper functions
  const getLowestPrice = (harga: string | undefined) => {
    if (!harga) return Infinity;
    const parsedHarga = parseArray(harga);
    const hargaNumbers = parsedHarga
      .map((h) => h.replace(/\D/g, ""))
      .map((h) => parseInt(h, 10))
      .filter((h) => !isNaN(h));
    return hargaNumbers.length > 0 ? Math.min(...hargaNumbers) : Infinity;
  };

  const handleSortChange = (value: string) => {
    setSortOrder(value as "asc" | "desc");
  };

  const filteredAndGroupedData = Object.entries(groupedData).filter(
    ([category]) => categoryFilter === "all" || category === categoryFilter
  );

  if (isLoading) {
    return <MobilListSkeleton />;
  }

  if (!cars || cars.length === 0) {
    return <div className="text-center p-4">Tidak ada data mobil tersedia</div>;
  }

  // Keep existing return statement and UI code
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari Mobil..."
          className="w-full sm:w-1/3"
        />
        <Select value={sortOrder} onValueChange={handleSortChange}>
          <SelectTrigger className="w-full sm:w-1/3">
            <SelectValue placeholder="Urutkan Harga" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">Harga Terendah</SelectItem>
            <SelectItem value="desc">Harga Tertinggi</SelectItem>
          </SelectContent>
        </Select>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full sm:w-1/3">
            <SelectValue placeholder="Pilih Kategori" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Kategori</SelectItem>
            {Object.keys(groupedData).map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filteredAndGroupedData.length > 0 ? (
        filteredAndGroupedData.map(([category, mobils]) => (
          <div key={category} className="mb-6">
            <h2 className="text-2xl font-bold mb-4">{category}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {mobils
                .filter((mob) =>
                  mob.nama.toLowerCase().includes(query.toLowerCase())
                )
                .sort((a, b) => {
                  const hargaA = getLowestPrice(a.harga);
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
        ))
      ) : (
        <div className="text-center p-4">
          Tidak ada mobil yang sesuai dengan filter
        </div>
      )}
    </div>
  );
};

export default ListMobil;
