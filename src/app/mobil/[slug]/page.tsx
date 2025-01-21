"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchMobilDetail } from "@/lib/utils/fetcher";
import { Mobil } from "@/lib/interfaces/mobil.interface";
import { TypeDropdown } from "@/components/TypeDropdown";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CarDetail() {
  const params = useParams();
  const [mobil, setMobil] = useState<Mobil | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedTransmisi, setSelectedTransmisi] = useState<string>("");
  const [selectedHarga, setSelectedHarga] = useState<string>("");

  useEffect(() => {
    if (params?.slug) {
      fetchMobilDetail(params.slug)
        .then((data) => {
          setMobil(data);
          setSelectedType(data.type?.split(",")[0] || "");
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  }, [params?.slug]);

  const handleSelectionChange = (
    type: string,
    transmisi: string,
    harga: string
  ) => {
    setSelectedType(type);
    setSelectedTransmisi(transmisi);
    setSelectedHarga(harga);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!mobil) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center text-red-500">
          Error loading details. Please try again later.
        </p>
        <Link href={"/mobil"}>
          <Button>Go back</Button>
        </Link>
      </div>
    );
  }

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
            className=" max-h-96 object-cover mb-4"
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
