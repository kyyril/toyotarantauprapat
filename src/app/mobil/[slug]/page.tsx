"use client";

import { DetailMobil } from "@/lib/interfaces/mobil.interface";
import { idMobil } from "@/lib/utils/fetcher";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

async function fetchMobilDetail(slug: string): Promise<DetailMobil | null> {
  try {
    const response = await fetch(
      `https://script.google.com/macros/s/${idMobil}/exec?action=detail&nama=${slug}`,
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

  const hargaArray: string[] = mobil.harga?.split(",") || ["N/A"];
  const typeArray: string[] = mobil.type?.split(",") || ["Unknown"];

  return (
    <main className="w-full flex justify-center items-start min-h-screen mt-5">
      <section className="w-full max-w-5xl flex justify-center flex-col">
        <p className="text-lg mt-4">
          {mobil.deskripsi || "Deskripsi tidak tersedia."}
        </p>
        <table className="table-auto w-full mt-4 border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Tipe
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Harga
              </th>
            </tr>
          </thead>
          <tbody>
            {typeArray.map((ty, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{ty}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {hargaArray[index] || "Tidak tersedia"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4">
          <strong>Mesin:</strong> {mobil.mesin || "Tidak diketahui"} cc
        </p>
      </section>
    </main>
  );
}
