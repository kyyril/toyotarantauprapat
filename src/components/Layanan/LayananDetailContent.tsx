"use client";

import { layanan } from "@/lib/interfaces/data.interface";
import LayananGallery from "./LayananGallery";

interface LayananDetailContentProps {
  layanan: layanan;
}

export default function LayananDetailContent({
  layanan,
}: LayananDetailContentProps) {
  const galleryImages =
    layanan?.gallery?.split(",").map((img) => img.trim()) || [];
  const point = layanan?.point?.split("/").map((point) => point.trim()) || [];
  const keunggulan =
    layanan?.keunggulan?.split("/").map((point) => point.trim()) || [];
  const kemudahan =
    layanan?.kemudahan?.split("/").map((point) => point.trim()) || [];
  const Langkah_langkah =
    layanan?.langkah_langkah?.split("/").map((point) => point.trim()) || [];

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold">
        {layanan?.title || "Judul Tidak Tersedia"}
      </h1>
      <p className="text-lg text-gray-500 mt-2">
        {layanan?.desk_awal || "Deskripsi awal tidak tersedia"}
      </p>

      {/* Gallery */}
      <LayananGallery images={galleryImages} />

      {/* Deskripsi Layanan */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Deskripsi</h2>
        <p className="text-gray-500 leading-relaxed mt-2">
          {layanan?.deskripsi || "Deskripsi layanan tidak tersedia"}
        </p>
      </div>

      {/* Poin-poin layanan */}
      {[
        { title: "Layanan", data: point },
        { title: "Keunggulan", data: keunggulan },
        { title: "Kemudahan", data: kemudahan },
        { title: "Langkah-Langkah", data: Langkah_langkah },
      ].map((section, index) => (
        <div key={index} className="mt-6">
          <h2 className="text-2xl font-semibold">{section.title}</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            {section.data.length > 0 ? (
              section.data.map((item, idx) => (
                <li key={idx} className="text-gray-500">
                  {item}
                </li>
              ))
            ) : (
              <li className="text-gray-500 italic">Tidak ada data</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}
