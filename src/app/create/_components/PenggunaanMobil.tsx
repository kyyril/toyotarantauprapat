"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PenggunaanMobil from "@/app/_data/PenggunaanData";

function PenggunaanMobilComp({ onHandleInputChange, formState }: any) {
  const [selectedPenggunaan, setSelectedPenggunaan] = useState(
    formState?.penggunaan || ""
  );

  const handleSelect = (penggunaanTerpilih: string) => {
    setSelectedPenggunaan(penggunaanTerpilih);
    onHandleInputChange(penggunaanTerpilih);
  };

  return (
    <div>
      <div>
        <h2 className="font-bold text-3xl text-red-500 ">
          Pilih Penggunaan Mobil
        </h2>
        <h2 className="mt-2 text-lg text-gray-500">
          Tentukan penggunaan mobil sesuai dengan kebutuhan Anda.
        </h2>
      </div>

      <div className="mt-5">
        <Select onValueChange={handleSelect} value={selectedPenggunaan}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Pilih Penggunaan" />
          </SelectTrigger>
          <SelectContent>
            {PenggunaanMobil.map((peng, index) => (
              <SelectItem key={index} value={peng.jenis}>
                {peng.jenis}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedPenggunaan && (
        <div className="mt-4 p-4 bg-secondary rounded-md">
          <h3 className="text-xl font-semibold text-primary">
            {selectedPenggunaan}
          </h3>
          <p className="text-gray-500">
            {
              PenggunaanMobil.find((peng) => peng.jenis === selectedPenggunaan)
                ?.deskripsi
            }
          </p>
        </div>
      )}
    </div>
  );
}

export default PenggunaanMobilComp;
