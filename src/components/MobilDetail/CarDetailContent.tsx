import { Mobil } from "@/lib/interfaces/mobil.interface";
import { TypeDropdown } from "@/components/TypeDropdown";
import { useState } from "react";
import { Card } from "../ui/card";
import Deskripsi from "./Deskripsi";
import YouTubePlayer from "./Video";
import ColorList from "./ColorList";
import { Button } from "../ui/button";
import CreditSimulationButton from "./CreditSimulation";

interface CarDetailContentProps {
  mobil: Mobil;
}

export default function CarDetailContent({ mobil }: CarDetailContentProps) {
  const parseArray = (value: any) => {
    if (typeof value === "string" && value.includes(",")) {
      return value.split(",").map((v) => v.trim());
    }
    return Array.isArray(value) ? value : [value?.toString() || "Unknown"];
  };

  const hargaArray: string[] = parseArray(mobil.harga);
  const typeArray: string[] = parseArray(mobil.type);
  const transmissionArray: string[] = parseArray(mobil.transmisi);
  const ccArray: string[] = parseArray(mobil.cc);
  const mesinArray: string[] = parseArray(mobil.mesin);
  const torsiArray: string[] = parseArray(mobil.torsi_max);

  const [selectedType, setSelectedType] = useState<string>(typeArray[0] || "");
  const [selectedTransmisi, setSelectedTransmisi] = useState<string>(
    transmissionArray[0] || ""
  );
  const [selectedHarga, setSelectedHarga] = useState<string>(
    hargaArray[0] || ""
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

  return (
    <main className="w-full flex flex-col items-center min-h-screen p-5">
      {/* Header */}
      <header className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-3xl font-bold">{mobil.nama}</h1>
        <p className="text-gray-600 dark:text-gray-400">
          {mobil.kategori} | Tahun {mobil.tahun}
        </p>
      </header>

      <div className="flex flex-col lg:flex-row lg:space-x-8 w-full max-w-4xl">
        {/* Section Kiri */}
        <section className="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col items-center">
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

        {/* Section Kanan */}
        <section className="w-full lg:w-1/2 flex flex-col space-y-4">
          <h2 className="text-xl font-semibold">{mobil.nama}</h2>
          <ColorList
            colors={mobil.color || "-"}
            colorNames={mobil.color_name}
          />
          <p className="text-lg font-medium">
            Harga mulai: <span className="text-red-500">{selectedHarga}</span>
          </p>
          <p className="text-sm text-gray-500">
            <span className="text-red-500">*</span> Harga dapat berubah sewaktu
            waktu. Hubungi kami untuk info promo dan kredit.
          </p>
          <div className="flex space-x-4 justify-center items-center">
            <Button variant="ghost">Unduh Katalog</Button>
            <CreditSimulationButton type={selectedType} harga={selectedHarga} />
          </div>
          <Button className="bg-red-500 text-white">Hubungi Kami</Button>
        </section>
      </div>

      {/* Spesifikasi */}
      <Card className="w-full max-w-4xl rounded-lg shadow-md mt-4 p-5 mb-8">
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
            <strong>Torsi Maksimum:</strong>{" "}
            {torsiArray[typeArray.indexOf(selectedType)] || "Tidak tersedia"}
          </li>
        </ul>
      </Card>

      {/* Deskripsi */}
      <Deskripsi nama={mobil.nama} />

      {/* Video */}
      <div className="w-full max-w-4xl mt-8 items-center flex justify-center">
        <YouTubePlayer video={mobil.video} />
      </div>
    </main>
  );
}
