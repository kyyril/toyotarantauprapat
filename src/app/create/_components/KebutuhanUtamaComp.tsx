"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import KebutuhanUtama from "@/app/_data/KebutuhanUtama";

function KebutuhanUtamaComp({ onHandleInputChange, formState }: any) {
  const [selectedKebutuhan, setSelectedKebutuhan] = useState(
    formState?.kebutuhan || ""
  );

  const handleSelect = (kebutuhanTerpilih: string) => {
    setSelectedKebutuhan(kebutuhanTerpilih);
    onHandleInputChange(kebutuhanTerpilih);
  };

  return (
    <div>
      <div>
        <h2 className="font-bold text-3xl text-red-500 ">
          Pilih Kebutuhan Utama
        </h2>
        <h2 className="mt-2 text-lg text-gray-500">
          Pilih fitur utama yang paling Anda butuhkan dalam mobil.
        </h2>
      </div>

      <div className="mt-5">
        <Select onValueChange={handleSelect} value={selectedKebutuhan}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Pilih Kebutuhan" />
          </SelectTrigger>
          <SelectContent>
            {KebutuhanUtama.map((item, index) => (
              <SelectItem key={index} value={item.kebutuhan}>
                {item.kebutuhan}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedKebutuhan && (
        <div className="mt-4 p-4 bg-secondary rounded-md">
          <h3 className="text-xl font-semibold text-primary">
            {selectedKebutuhan}
          </h3>
          <p className="text-gray-500">
            {
              KebutuhanUtama.find(
                (item) => item.kebutuhan === selectedKebutuhan
              )?.deskripsi
            }
          </p>
        </div>
      )}
    </div>
  );
}

export default KebutuhanUtamaComp;
