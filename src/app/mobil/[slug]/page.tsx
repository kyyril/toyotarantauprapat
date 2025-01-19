"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchMobilDetail } from "@/lib/utils/fetcher";
import { Mobil } from "@/lib/interfaces/mobil.interface";

export default function CarDetail() {
  const params = useParams();
  const [mobil, setMobil] = useState<Mobil | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState<string>("");

  useEffect(() => {
    if (params?.slug) {
      fetchMobilDetail(params.slug)
        .then((data) => {
          setMobil(data);
          setSelectedType(data.type?.split(",")[0] || ""); // Set default type
        })
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
  const currentPrice =
    hargaArray[typeArray.indexOf(selectedType)] || "Tidak tersedia";

  return (
    <main className="w-full flex justify-center items-start min-h-screen mt-5">
      <section className="w-full max-w-5xl flex justify-center flex-col">
        <img
          src={mobil.gambar}
          alt={mobil.nama}
          className="w-full h-auto max-h-96 object-cover mb-4"
        />
        <p className="text-lg mt-4">
          {mobil.nama || "Deskripsi tidak tersedia."}
        </p>
        <p className="text-lg mt-4">
          {mobil.deskripsi || "Deskripsi tidak tersedia."}
        </p>
        <div className="mt-4">
          <label
            htmlFor="type"
            className="block text-lg font-medium text-gray-700"
          >
            Pilih Tipe:
          </label>
          <select
            id="type"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="mt-2 block w-full p-2 border border-gray-300 rounded-md"
          >
            {typeArray.map((ty, index) => (
              <option key={index} value={ty}>
                {ty}
              </option>
            ))}
          </select>
          <p className="mt-4 text-lg">
            <strong>Harga:</strong> {currentPrice}
          </p>
        </div>
        <p className="mt-4">
          <strong>Mesin:</strong> {mobil.mesin || "Tidak diketahui"} cc
        </p>
      </section>
    </main>
  );
}
