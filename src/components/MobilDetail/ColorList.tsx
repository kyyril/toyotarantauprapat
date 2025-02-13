"use client";

import React, { useState } from "react";

interface ColorListProps {
  colors: string; // String berisi kode warna, dipisahkan oleh koma
  colorNames: string; // String berisi nama warna, dipisahkan oleh koma
}

const ColorList: React.FC<ColorListProps> = ({ colors, colorNames }) => {
  // Fungsi untuk memecah string warna menjadi array
  const parseArray = (value: string): string[] => {
    if (!value) return [];
    return value.split(",").map((item) => item.trim());
  };

  const colorArray = parseArray(colors); // Array kode warna
  const colorNameArray = parseArray(colorNames); // Array nama warna

  // State untuk menyimpan nama warna yang diklik
  const [selectedColorName, setSelectedColorName] = useState<string | null>(
    null
  );

  const handleColorClick = (index: number) => {
    setSelectedColorName(colorNameArray[index] || "Unknown Color");
  };

  return (
    <div>
      {/* Daftar Lingkaran Warna */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {colorArray.map((color, index) => (
          <div
            key={index}
            onClick={() => handleColorClick(index)} // Handle klik pada warna
            className="w-8 h-8 rounded-full cursor-pointer border border-solid border-gray-500"
            style={{
              backgroundColor: color,
            }}
            title={colorNameArray[index] || "Unknown Color"} // Tooltip nama warna
          ></div>
        ))}
      </div>

      {/* Tampilkan Nama Warna yang Diklik */}
      {selectedColorName && (
        <p className="text-sm font-semibold">
          <span>{selectedColorName}</span>
        </p>
      )}
    </div>
  );
};

export default ColorList;
