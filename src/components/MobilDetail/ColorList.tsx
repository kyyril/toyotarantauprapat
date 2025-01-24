"use client";

import React from "react";

interface ColorListProps {
  colors: string; // String berisi kode warna, dipisahkan oleh koma
}

const ColorList: React.FC<ColorListProps> = ({ colors }) => {
  // Fungsi untuk memecah string warna menjadi array
  const parseColors = (colorString: string): string[] => {
    if (!colorString) return [];
    return colorString.split(",").map((color) => color.trim());
  };

  const colorArray = parseColors(colors);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {colorArray.map((color, index) => (
        <div
          key={index}
          className="w-6 h-6 rounded-full"
          style={{
            backgroundColor: color,
            border: "1px solid #000", // Tambahkan border untuk warna putih
          }}
          title={color} // Menampilkan kode warna saat di-hover
        ></div>
      ))}
    </div>
  );
};

export default ColorList;
