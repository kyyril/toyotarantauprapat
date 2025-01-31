"use client";

import { layanan } from "@/lib/interfaces/data.interface";
import LayananGallery from "./LayananGallery";

interface LayananDetailContentProps {
  layanan: layanan;
}

export default function LayananDetailContent({
  layanan,
}: LayananDetailContentProps) {
  const galleryImages = layanan.gallery.split(",").map((img) => img.trim());
  const points = layanan.poin_poin.split(",").map((point) => point.trim());

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold text-gray-900">{layanan.title}</h1>
      <p className="text-lg text-gray-600 mt-2">{layanan.desk_awal}</p>

      {/* Gallery */}
      <LayananGallery images={galleryImages} />

      {/* Deskripsi Layanan */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">Deskripsi</h2>
        <p className="text-gray-700 leading-relaxed mt-2">
          {layanan.deskripsi}
        </p>
      </div>

      {/* Poin-poin layanan */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Keunggulan Layanan
        </h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          {points.map((point, index) => (
            <li key={index} className="text-gray-700">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
