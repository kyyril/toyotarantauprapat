"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import KategoriData from "@/app/_data/KategoriData";

function KategoriComp({ onHandleInputChange, formState }: any) {
  const [selectedKategori, setSelectedKategori] = useState(
    formState?.kategori || ""
  );

  const handleSelect = (kategoriTerpilih: string) => {
    setSelectedKategori(kategoriTerpilih);
    onHandleInputChange(kategoriTerpilih);
  };

  return (
    <div>
      <div>
        <h2 className="font-bold text-3xl text-red-500 ">
          Pilih Kategori Mobil
        </h2>
        <h2 className="mt-2 text-lg text-gray-500">
          Pilih jenis mobil yang sesuai dengan kebutuhan Anda.
        </h2>
      </div>

      <div className="mt-5">
        <Select onValueChange={handleSelect} value={selectedKategori}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Pilih Kategori" />
          </SelectTrigger>
          <SelectContent>
            {KategoriData.map((kat) => (
              <SelectItem key={kat.Kategori} value={kat.Kategori}>
                {kat.Kategori}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedKategori && (
        <div className="mt-4 p-4 bg-secondary rounded-md">
          <h3 className="text-xl font-semibold text-primary">
            {selectedKategori}
          </h3>
          <p className="text-gray-500">
            {
              KategoriData.find((kat) => kat.Kategori === selectedKategori)
                ?.deskripsi
            }
          </p>
        </div>
      )}
    </div>
  );
}

export default KategoriComp;
