import React, { useState } from "react";
import { fetchDeskripsi } from "@/lib/utils/fetcher";
import { Button } from "@/components/ui/button";

interface DeskripsiProps {
  nama: string;
}

const Deskripsi: React.FC<DeskripsiProps> = ({ nama }) => {
  const [deskripsi, setDeskripsi] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFetchDeskripsi = async () => {
    setLoading(true);
    try {
      const result = await fetchDeskripsi(nama);
      setDeskripsi(result?.deskripsi || "Deskripsi tidak tersedia.");
    } catch (error) {
      console.error("Error fetching deskripsi:", error);
      setDeskripsi("Gagal memuat deskripsi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl justify-center items-center rounded-lg shadow-md p-5 mt-5">
      <h2 className="text-2xl font-semibold mb-4">Deskripsi</h2>
      {!deskripsi ? (
        <Button onClick={handleFetchDeskripsi} disabled={loading}>
          {loading ? "Loading..." : "Tampilkan Deskripsi"}
        </Button>
      ) : (
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed items-center">
          {deskripsi}
        </p>
      )}
    </div>
  );
};

export default Deskripsi;
