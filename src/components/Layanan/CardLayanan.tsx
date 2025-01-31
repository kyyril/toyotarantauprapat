import { layanan } from "@/lib/interfaces/data.interface";
import React from "react";

interface CardLayananProps {
  layanan: layanan;
}

const CardLayanan: React.FC<CardLayananProps> = ({ layanan }) => {
  return (
    <div className="rounded-2xl shadow-md overflow-hidden p-4 bg-white">
      <div className="w-full h-48">
        <img
          src={layanan.thumbnail}
          alt={layanan.nama}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold mt-2">{layanan.nama}</h3>
      <p className="text-gray-600 text-sm">{layanan.desk_awal}</p>
    </div>
  );
};

export default CardLayanan;
