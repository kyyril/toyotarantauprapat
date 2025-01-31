import React, { useState } from "react";
import { fetchDeskripsi } from "@/lib/utils/fetcher";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface DeskripsiProps {
  nama: string;
}

const Deskripsi: React.FC<DeskripsiProps> = ({ nama }) => {
  const [deskripsiAwal, setDeskripsiAwal] = useState<string | null>(null);
  const [deskripsiAkhir, setDeskripsiAkhir] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFetchDeskripsi = async () => {
    setLoading(true);
    try {
      const result = await fetchDeskripsi(nama);
      console.log(result);
      setDeskripsiAwal(result?.deskripsi_awal || "Deskripsi tidak tersedia.");
      setDeskripsiAkhir(result?.deskripsi_akhir || "Deskripsi tidak tersedia.");
    } catch (error) {
      console.error("Error fetching deskripsi:", error);
      setDeskripsiAwal("Gagal memuat deskripsi.");
      setDeskripsiAkhir("Gagal memuat deskripsi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl justify-center items-center p-5 mt-5">
      <h2 className="text-2xl font-semibold mb-4">Deskripsi</h2>
      {!deskripsiAwal && !deskripsiAkhir ? (
        <div className="flex w-full mx-auto justify-center items-center">
          <Button
            variant={"secondary"}
            onClick={handleFetchDeskripsi}
            disabled={loading}
          >
            {loading ? "Loading..." : "Tampilkan Deskripsi"}
            <ArrowDown className="text-red-500" />
          </Button>
        </div>
      ) : (
        <div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed items-center mb-4">
            {deskripsiAwal}
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed items-center">
            {deskripsiAkhir}
          </p>
        </div>
      )}
    </div>
  );
};

export default Deskripsi;
