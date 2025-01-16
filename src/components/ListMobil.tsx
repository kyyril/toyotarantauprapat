"use client";

import { Card } from "@/components/ui/card";
import { Mobil } from "@/lib/interfaces/mobil.interface";
import Link from "next/link";
import { useState } from "react";
import { Input } from "./ui/input";

export function ListMobil({ data }: { data: Mobil[] }) {
  const [query, setQuery] = useState("");

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
    <div className="container mx-auto p-4">
      <Input
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        placeholder="Cari Mobil.."
        className="border rounded px-3 py-2 w-full"
      />
      <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data
          .filter((mob) => mob.nama.toLocaleLowerCase().includes(query))
          .map((mob) => (
            <Link key={mob.id} href={`/mobil/${mob.id}`}>
              <Card className="overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img
                    src={mob.gambar || "/placeholder.png"}
                    alt={mob.nama || "Mobil"}
                    className="object-cover rounded-sm w-full h-full"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-lg font-bold">
                    {highlightQuery(mob.nama, query)}
                  </h3>
                </div>
                <div className="flex flex-wrap">
                  {mob.type.map((ty, index) => (
                    <span
                      className="bg-red-500 rounded-md text-sm mx-1 px-2 py-1 text-white"
                      key={index}
                    >
                      {ty}
                    </span>
                  ))}
                </div>
                <div className="p-1 px-2">
                  <p className="text-lg font-semibold">{mob.harga || "-"}</p>
                </div>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
}
