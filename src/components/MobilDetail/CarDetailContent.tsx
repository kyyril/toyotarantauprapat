"use client";
import { Mobil } from "@/lib/interfaces/mobil.interface";
import { TypeDropdown } from "@/components/TypeDropdown";
import { useEffect, useState } from "react";
import Deskripsi from "./Deskripsi";
import ColorList from "./ColorList";
import { Button } from "../ui/button";
import CreditSimulationButton from "./CreditSimulation";
import { PhoneCall, ScrollText } from "lucide-react";
import { Sales } from "@/lib/interfaces/data.interface";
import { fetchSales } from "@/lib/utils/fetcher";
import { toast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface CarDetailContentProps {
  mobil: Mobil;
}

export default function CarDetailContent({ mobil }: CarDetailContentProps) {
  const [salesList, setSalesList] = useState<Sales[]>([]);
  const [selectedSales, setSelectedSales] = useState<Sales | null>();

  // Update the fetch function
  useEffect(() => {
    async function fetchSalesData() {
      try {
        const data = await fetchSales();
        setSalesList(data || []);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    }
    fetchSalesData();
  }, []);

  // Update WhatsApp click handler
  const handleWhatsAppClick = () => {
    if (!selectedSales) {
      toast({
        title: "Pilih Sales",
        description: "Silakan pilih sales terlebih dahulu",
        variant: "destructive",
      });
      return;
    }

    const message = encodeURIComponent(
      `Halo ${selectedSales.nama}, saya tertarik dengan ${mobil.nama}, tipe (${selectedType}). Bisa berikan informasi lebih lanjut?`
    );
    window.open(
      `https://wa.me/62${selectedSales.nohp}?text=${message}`,
      "_blank"
    );
  };

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
    <main className="w-full flex flex-col items-center min-h-screen p-5 mx- max-w-7xl">
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
            loading="lazy"
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
          <p className="font-medium">
            Mulai: <span className="text-red-500">Rp.{selectedHarga}</span>
          </p>
          <p className="text-sm text-gray-500">
            <span className="text-red-500">*</span> Harga dapat berubah sewaktu
            waktu. Hubungi kami untuk info promo dan kredit.
          </p>

          <div className="flex space-x-4 justify-center mx-auto items-center">
            <Button variant="outline" className="group">
              <ScrollText className="text-red-500 group-hover:translate-x-1 transition-transform" />
              <a href={mobil.katalog}>Unduh Katalog</a>
            </Button>
            <CreditSimulationButton type={selectedType} harga={selectedHarga} />
          </div>

          <div className="flex space-x-4 justify-center mx-auto items-center">
            <Button
              onClick={handleWhatsAppClick}
              variant={"default"}
              className="group flex w-full mx-auto"
            >
              <PhoneCall className="text-red-500 group-hover:translate-x-1 transition-transform" />{" "}
              Hubungi Kami
            </Button>
            {/* sales selected */}
            <Select
              value={selectedSales?.nama || ""}
              onValueChange={(value) => {
                const selected = salesList.find((s) => s.nama === value);
                setSelectedSales(selected || null);
              }}
            >
              <SelectTrigger className="">
                <SelectValue
                  placeholder={selectedSales?.nama || "Pilih Sales"}
                />
              </SelectTrigger>
              <SelectContent>
                {salesList.map((sales) => (
                  <SelectItem key={sales.id} value={sales.nama}>
                    {sales.nama}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </section>
      </div>

      {/* Spesifikasi */}
      <div className="w-full max-w-4xl rounded-lg mt-4 p-5 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Spesifikasi</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="p-4 rounded-lg bg-secondary">
            <strong>Tipe:</strong> {selectedType || "Tidak tersedia"}
          </li>
          <li className="p-4 rounded-lg bg-secondary">
            <strong>Harga:</strong> {selectedHarga || "Tidak tersedia"}
          </li>
          <li className="p-4 rounded-lg bg-secondary">
            <strong>CC:</strong>{" "}
            {ccArray[typeArray.indexOf(selectedType)] || "Tidak tersedia"}
          </li>
          <li className="p-4 rounded-lg bg-secondary">
            <strong>Mesin:</strong>{" "}
            {mesinArray[typeArray.indexOf(selectedType)] || "Tidak tersedia"}
          </li>
          <li className="p-4 rounded-lg bg-secondary">
            <strong>Transmisi:</strong> {selectedTransmisi || "Tidak tersedia"}
          </li>
          <li className="p-4 rounded-lg bg-secondary">
            <strong>Torsi Maksimum:</strong>{" "}
            {torsiArray[typeArray.indexOf(selectedType)] || "Tidak tersedia"}
          </li>
        </ul>
      </div>

      {/* Deskripsi */}

      <Deskripsi nama={mobil.nama} />

      {/* Video */}
      <div className="flex flex-col justify-center mt-16 w-full mx-auto max-w-4xl px-4">
        <h2 className="text-start mb-2 text-lg font-semibold">Video</h2>
        <div className="w-full aspect-video mx-auto">
          <iframe
            className="w-full h-full"
            src={mobil.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </main>
  );
}
