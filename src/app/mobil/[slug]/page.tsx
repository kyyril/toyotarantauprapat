"use client";

import { DetailMobil } from "@/lib/interfaces/mobil.interface";
import { idMobil } from "@/lib/utils/fetcher";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

async function fetchMobilDetail(slug: string): Promise<DetailMobil | null> {
  try {
    const response = await fetch(
      `https://script.google.com/macros/s/${idMobil}/exec?action=detail&id_parent=${slug}`,
      { cache: "no-store" }
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch detail: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching mobil detail:", error);
    return null;
  }
}

export default function CarDetail() {
  const params = useParams(); // Menggunakan useParams untuk mendapatkan parameter
  const [mobil, setMobil] = useState<DetailMobil | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.slug) {
      fetchMobilDetail(params.slug)
        .then((data) => setMobil(data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  }, [params?.slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!mobil) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center text-red-500">
          Error loading details. Please try again later.
        </p>
      </div>
    );
  }

  const hargaArray = mobil.harga?.split(",") || ["N/A"];
  const typeArray = mobil.type?.split(",") || ["Unknown"];

  return (
    <main className="w-full flex justify-center items-start min-h-screen mt-5">
      <section className="w-full max-w-5xl flex justify-center flex-col">
        <p className="text-lg mt-4">
          {mobil.deskripsi || "Deskripsi tidak tersedia."}
        </p>
        <p>
          <strong>Harga:</strong>{" "}
          {hargaArray.map((h, i) => (
            <span key={i} className="mr-2">
              {h}
            </span>
          ))}
        </p>
        <p>
          <strong>Mesin:</strong> {mobil.mesin || "Tidak diketahui"} cc
        </p>
        <p>
          <strong>Tipe:</strong>{" "}
          {typeArray.map((ty, i) => (
            <span key={i} className="mr-2">
              {ty}
            </span>
          ))}
        </p>
      </section>
    </main>
  );
}
