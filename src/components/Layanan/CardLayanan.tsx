import { layanan } from "@/lib/interfaces/data.interface";
import React from "react";
import { Card } from "../ui/card";

interface CardLayananProps {
  layanan: layanan;
}

const CardLayanan: React.FC<CardLayananProps> = ({ layanan }) => {
  return (
    <Card className="rounded-2xl shadow-md overflow-hidden transition transform hover:bg-secondary active:bg-primary-foreground hover:scale-95 duration-200 ease-in-out">
      <div className="w-full h-48">
        <img
          src={layanan.thumbnail}
          alt={layanan.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold mt-2 mx-2">{layanan.title}</h3>
      <p className="text-gray-600 text-sm mx-2 mb-2">{layanan.desk_awal}</p>
    </Card>
  );
};

export default CardLayanan;
