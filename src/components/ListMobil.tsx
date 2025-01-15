"use client";
import { Card } from "@/components/ui/card";
import { Mobil } from "@/lib/interfaces/mobil.interface";
import Link from "next/link";
import { useState } from "react";
import { Input } from "./ui/input";

export function ListMobil({ data }: { data: Mobil[] }) {
  const [query, setQuery] = useState("");
  console.log(query);
  const highlightQuery = (text: string, query: string) => {
    if (!query) return text; // Jika query kosong, kembalikan teks asli
    const regex = new RegExp(`(${query})`, "gi"); // Membuat regex untuk pencarian yang case-insensitive
    const parts = text.split(regex); // Pisahkan teks berdasarkan query
    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-red-400 rounded-l-md rounded-t-md">
          {part}
        </span>
      ) : (
        part
      )
    );
  };
  return (
    <div className="container mx-auto p-4">
      <Input
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        placeholder="Cari Mobil.."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data
          .filter((mob) => mob.nama.toLocaleLowerCase().includes(query))
          .map((mob) => (
            <Link href={`/mobil/${mob.nama}`}>
              <Card key={mob.id} className="overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img
                    src={mob.gambar}
                    alt={mob.nama}
                    className="object-cover rounded-sm w-full h-full"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-lg font-bold">
                    {highlightQuery(mob.nama, query)}
                  </h3>
                </div>
                <div className="p-2">
                  <h3 className="text-lg font-bold">{mob.type.join(" ")}</h3>
                </div>
                <div className="p-1 px-2">
                  <p className="text-lg font-semibold">{mob.harga}</p>
                </div>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
}
