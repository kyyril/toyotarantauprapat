import { layanan } from "@/lib/interfaces/data.interface";
import React from "react";

interface CardLayananProps {
  layanan: layanan;
}

const CardLayanan: React.FC<CardLayananProps> = ({ layanan }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-xl dark:bg-black transition hover:scale-95 hover:shadow-xl ease-in-out">
      <div className="w-full h-48">
        <img
          src={layanan.thumbnail}
          alt={layanan.title}
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      <h3 className="text-lg font-semibold mt-2 mx-2">{layanan.title}</h3>
      <p className="text-gray-500 text-sm mx-2 mb-2 text-ellipsis line-clamp-3">
        {layanan.desk_awal}
      </p>
    </div>
  );
};

export default CardLayanan;
