"use client";

import { useState, useEffect } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ArrowUp, ChevronDown, ChevronUp } from "lucide-react";

interface TypeDropdownProps {
  typeArray: string[];
  transmissionArray: string[];
  hargaArray: string[];
  onSelectionChange: (
    selectedType: string,
    selectedTransmisi: string,
    selectedHarga: string
  ) => void;
}

export function TypeDropdown({
  typeArray,
  transmissionArray,
  hargaArray,
  onSelectionChange,
}: TypeDropdownProps) {
  const [selectedType, setSelectedType] = useState(typeArray[0] || "");
  const [selectedTransmisi, setSelectedTransmisi] = useState("");
  const [selectedHarga, setSelectedHarga] = useState("");
  const [open, setOpen] = useState(false);

  // Update harga dan transmisi saat tipe berubah
  useEffect(() => {
    if (selectedType) {
      const index = typeArray.indexOf(selectedType);
      const transmisiOptions = transmissionArray[index]?.split(",") || [];
      const hargaOptions = hargaArray[index]?.split(",") || [];
      setSelectedTransmisi(transmisiOptions[0] || "Tidak tersedia");
      setSelectedHarga(hargaOptions[0] || "Tidak tersedia");
      onSelectionChange(
        selectedType,
        transmisiOptions[0] || "",
        hargaOptions[0] || ""
      );
    }
  }, [
    selectedType,
    typeArray,
    transmissionArray,
    hargaArray,
    onSelectionChange,
  ]);

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          onClick={() => setOpen(!open)}
          variant={"outline"}
          className="mt-2 max-w-full text-sm sm:text-base flex items-center justify-between gap-2"
        >
          <span className="truncate">{selectedType || "Pilih Tipe"}</span>
          {open ? (
            <ChevronUp className="w-4 h-4 text-red-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-red-500" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-4">
          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-sm text-gray-600 dark:text-gray-400"
            >
              Pilih Tipe:
            </label>
            <select
              id="type"
              value={selectedType}
              onChange={(e) => handleTypeChange(e.target.value)}
              className="mt-2 block w-full p-2 border border-gray-300 rounded-md"
            >
              {typeArray.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          {selectedType && (
            <>
              <div className="mt-4">
                <p>
                  <strong>Transmisi:</strong>{" "}
                  {selectedTransmisi || "Tidak tersedia"}
                </p>
              </div>
              <div className="mt-4">
                <p>
                  <strong>Harga:</strong> {selectedHarga || "Tidak tersedia"}
                </p>
              </div>
            </>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
