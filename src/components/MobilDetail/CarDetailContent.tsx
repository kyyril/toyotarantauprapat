import { Mobil } from "@/lib/interfaces/mobil.interface";
import { TypeDropdown } from "@/components/TypeDropdown";
import { useState } from "react";

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

  return (
    <main className="w-full flex justify-center items-start min-h-screen flex-col mt-5">
      <div className="flex flex-col">
        <p className="text-lg mt-4">
          {mobil.nama || "Deskripsi tidak tersedia."}
        </p>
        <div className="mt-4">
          <TypeDropdown
            typeArray={typeArray}
            transmissionArray={transmissionArray}
            hargaArray={hargaArray}
            onSelectionChange={handleSelectionChange}
          />
        </div>
      </div>
      <section className="w-full max-w-5xl flex justify-center flex-col">
        <div className="flex">
          <img
            src={mobil.gambar}
            alt={mobil.nama}
            className="max-h-96 object-cover mb-4"
          />
          <div className="flex flex-col">
            <p className="text-lg mt-4">
              {mobil.nama || "Deskripsi tidak tersedia."}
            </p>
            <p className="mt-4 text-lg">
              <strong>Harga:</strong> {selectedHarga || "Tidak tersedia"}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
