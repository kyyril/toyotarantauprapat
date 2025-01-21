import { Mobil } from "@/lib/interfaces/mobil.interface";
import { TypeDropdown } from "@/components/TypeDropdown";
import { useState } from "react";
import { Card } from "../ui/card";

interface CarDetailContentProps {
  mobil: Mobil;
}

export default function CarDetailContent({ mobil }: CarDetailContentProps) {
  const [selectedType, setSelectedType] = useState<string>(
    mobil.type?.split(",")[0] || ""
  );
  const [selectedTransmisi, setSelectedTransmisi] = useState<string>(
    mobil.transmisi?.split(",")[0] || ""
  );
  const [selectedHarga, setSelectedHarga] = useState<string>(
    mobil.harga?.split(",")[0] || ""
  );

  const handleSelectionChange = (
    type: string,
    transmisi: string,
    harga: string
  ) => {
    setSelectedType(type);
    setSelectedTransmisi(transmisi);
    setSelectedHarga(harga);
  };

  const hargaArray: string[] = mobil.harga?.split(",") || ["N/A"];
  const typeArray: string[] = mobil.type?.split(",") || ["Unknown"];
  const transmissionArray: string[] = mobil.transmisi?.split(",") || [
    "Unknown",
  ];
  const ccArray: string[] = mobil.cc?.split(",") || ["Unknown"];
  const mesinArray: string[] = mobil.mesin?.split(",") || ["Unknown"];
  const torsiArray: string[] = mobil.torsi_max?.split(",") || ["Unknown"];

  return (
    <main className="w-full flex flex-col items-center min-h-screen p-5 ">
      {/* Header */}
      <div className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-3xl font-bold">{mobil.nama}</h1>
        <p className="text-gray-600 dark:text-gray-400">
          {mobil.kategori} | Tahun {mobil.tahun}
        </p>
      </div>

      {/* Gambar dan Dropdown */}
      <section className="w-full max-w-4xl flex flex-col items-center rounded-lg shadow-md p-5 mb-8">
        <img
          src={mobil.gambar}
          alt={mobil.nama}
          className="w-full max-h-96 object-contain rounded-md mb-5"
        />
        <TypeDropdown
          typeArray={typeArray}
          transmissionArray={transmissionArray}
          hargaArray={hargaArray}
          onSelectionChange={handleSelectionChange}
        />
      </section>

      {/* Spesifikasi */}
      <Card className="w-full max-w-4xl rounded-lg shadow-md p-5 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Spesifikasi</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="p-4 rounded-lg shadow dark:bg-zinc-800">
            <strong>Tipe:</strong> {selectedType || "Tidak tersedia"}
          </li>
          <li className="p-4 rounded-lg shadow dark:bg-zinc-800">
            <strong>Harga:</strong> {selectedHarga || "Tidak tersedia"}
          </li>
          <li className="p-4 rounded-lg shadow dark:bg-zinc-800">
            <strong>CC:</strong>{" "}
            {ccArray[typeArray.indexOf(selectedType)] || "Tidak tersedia"}
          </li>
          <li className="p-4 rounded-lg shadow dark:bg-zinc-800">
            <strong>Mesin:</strong>{" "}
            {mesinArray[typeArray.indexOf(selectedType)] || "Tidak tersedia"}
          </li>
          <li className="p-4 rounded-lg shadow dark:bg-zinc-800">
            <strong>Transmisi:</strong> {selectedTransmisi || "Tidak tersedia"}
          </li>
          <li className="p-4 rounded-lg shadow dark:bg-zinc-800">
            <strong>Torsi Maks:</strong>{" "}
            {torsiArray[typeArray.indexOf(selectedType)] || "Tidak tersedia"}
          </li>
        </ul>
      </Card>

      {/* Deskripsi */}
      <section className="w-full max-w-4xl rounded-lg shadow-md p-5">
        <h2 className="text-2xl font-semibold mb-4">Deskripsi</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {mobil.deskripsi}
        </p>
      </section>
    </main>
  );
}
