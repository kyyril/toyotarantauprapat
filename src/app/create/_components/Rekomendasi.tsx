import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import Prompt from "@/app/_data/Prompt";

import { Card } from "@/components/ui/card";
import { RekomendasiResponse } from "@/lib/interfaces/ai.mobil.interface";

interface FormState {
  budget: {
    budget: string;
  };
  kategori: string;
  kebutuhan: string;
  penggunaan: string;
  lokasi: string;
}

function RekomendasiComp({ formState }: { formState: FormState }) {
  const [mobil, setMobil] = useState<RekomendasiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateMobilRekomendasi = async () => {
    try {
      setLoading(true);
      setError(null);

      const PROMPT = Prompt.PROMPT_REKOMENDASI_AI.replace(
        "{budget}",
        formState?.budget?.budget || "N/A"
      )
        .replace("{kategori}", formState?.kategori || "N/A")
        .replace("{kebutuhan}", formState?.kebutuhan || "N/A")
        .replace("{penggunaan}", formState?.penggunaan || "N/A")
        .replace("{lokasi}", formState?.lokasi || "N/A");

      const { data } = await axios.post<RekomendasiResponse>("/api/ai-mobil", {
        prompt: PROMPT,
      });

      if ("error" in data) {
        throw new Error(data.error as string);
      }

      setMobil(data);
    } catch (error) {
      console.error("Error:", error);
      setError("Gagal mendapatkan rekomendasi. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (formState && Object.values(formState).every(Boolean)) {
      generateMobilRekomendasi();
    }
  }, [formState]);

  return (
    <div className="my-10 space-y-6 h-screen">
      <div className="text-center">
        <h2 className="font-bold text-3xl text-primary">
          Rekomendasi Mobil Toyota
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Berdasarkan preferensi Anda
        </p>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-10">
          <Loader2Icon className="w-8 h-8 animate-spin text-primary" />
        </div>
      )}

      {error && (
        <div className="text-red-500 text-center p-4 bg-red-50 rounded-lg">
          {error}
        </div>
      )}

      {mobil?.rekomendasi && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mobil.rekomendasi.map((item, index) => (
            <Card
              key={`mobil-${index}`}
              className="p-4 hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 mb-4">
                <img
                  src={item.image_url || "/placeholder-car.png"}
                  alt={item.nama_mobil}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold">{item.nama_mobil}</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <p>
                    <span className="font-semibold">Kategori:</span>{" "}
                    {item.kategori}
                  </p>
                  <p>
                    <span className="font-semibold">Tipe:</span> {item.tipe}
                  </p>
                  <p>
                    <span className="font-semibold">Transmisi:</span>{" "}
                    {item.transmisi}
                  </p>
                  <p>
                    <span className="font-semibold">Bahan Bakar:</span>{" "}
                    {item.bahan_bakar}
                  </p>
                </div>
                <p className="mt-2 text-gray-700 text-sm">{item.alasan}</p>
              </div>
            </Card>
          ))}
        </div>
      )}

      {!loading && !error && !mobil?.rekomendasi && (
        <p className="text-center text-gray-500">
          Belum ada rekomendasi. Silakan isi form di atas.
        </p>
      )}
    </div>
  );
}

export default RekomendasiComp;
