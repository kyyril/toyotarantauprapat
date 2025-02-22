import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Prompt from "@/app/_data/Prompt";
import { Button } from "@/components/ui/button";
import SkeletonRekomendasi from "./RekomendasiSkeleton";

interface FormState {
  budget: { budget: string };
  kategori: string;
  kebutuhan: string;
  penggunaan: string;
  lokasi: string;
}
const Id_PostAI = process.env.NEXT_PUBLIC_SPREAD_POST_AI;
const sendToGoogleSheet = async (formState: FormState) => {
  const scriptUrl = `https://script.google.com/macros/s/${Id_PostAI}/exec`;

  await fetch(scriptUrl, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formState),
  });

  console.log("Data dikirim ke Google Apps Script:", formState);
};

function RekomendasiComp({ formState }: { formState: FormState }) {
  const [mobil, setMobil] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const generateMobilRekomendasi = useCallback(async () => {
    if (hasGenerated) return;

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

      const { data } = await axios.post("/api/ai-mobil", { prompt: PROMPT });

      if ("error" in data) {
        throw new Error(data.error);
      }

      setMobil(data);
      setHasGenerated(true);
    } catch (error) {
      setError("Gagal mendapatkan rekomendasi. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  }, [formState, hasGenerated]);

  useEffect(() => {
    const isFormComplete =
      formState &&
      formState.budget?.budget &&
      formState.kategori &&
      formState.kebutuhan &&
      formState.penggunaan &&
      formState.lokasi;

    if (isFormComplete && !hasGenerated) {
      generateMobilRekomendasi();
    }
  }, [formState, generateMobilRekomendasi, hasGenerated]);

  useEffect(() => {
    if (mobil?.rekomendasi && !error) {
      sendToGoogleSheet(formState);
    }
  }, [mobil, error, formState]);

  return (
    <div className="min-h-screen">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl text-red-500">
          Rekomendasi Mobil Toyota
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Berdasarkan preferensi Anda
        </p>
      </div>

      {loading && <SkeletonRekomendasi />}

      {error && (
        <div className="text-red-500 text-center p-4 mx-4 bg-red-50 rounded-lg">
          {error}
        </div>
      )}

      {mobil?.rekomendasi && (
        <div className="max-w-3xl mx-auto">
          <div className="overflow-hidden shadow-lg p-2">
            <div className="relative aspect-video">
              <img
                src={
                  mobil.rekomendasi[currentPage].image_url ||
                  "/placeholder-car.png"
                }
                alt={mobil.rekomendasi[currentPage].nama_mobil}
                className="w-full h-full"
              />
            </div>
            <div className="p-4 space-y-4">
              <h3 className="text-2xl font-bold">
                {mobil.rekomendasi[currentPage].nama_mobil}
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-opacity-80">
                <p>
                  <span className="font-semibold">Kategori:</span>{" "}
                  {mobil.rekomendasi[currentPage].kategori}
                </p>
                <p>
                  <span className="font-semibold">Tipe:</span>{" "}
                  {mobil.rekomendasi[currentPage].tipe}
                </p>
                <p>
                  <span className="font-semibold">Transmisi:</span>{" "}
                  {mobil.rekomendasi[currentPage].transmisi}
                </p>
                <p>
                  <span className="font-semibold">Bahan Bakar:</span>{" "}
                  {mobil.rekomendasi[currentPage].bahan_bakar}
                </p>
              </div>
              <p className="text-gray-500 pt-4 border-t">
                {mobil.rekomendasi[currentPage].alasan}
              </p>
              <a
                className="text-md flex w-full justify-end text-red-500 underline hover:opacity-50"
                href={`/mobil/${mobil.rekomendasi[currentPage].nama_mobil}`}
              >
                Lihat Detail
              </a>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-sm text-gray-500">
              {currentPage + 1} dari {mobil?.rekomendasi?.length}
            </span>
            <Button
              variant="outline"
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(mobil?.rekomendasi?.length - 1, prev + 1)
                )
              }
              disabled={currentPage === mobil?.rekomendasi?.length - 1}
              className="flex items-center gap-2"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {!loading && !error && !mobil?.rekomendasi && (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center p-4 bg-red-500/10 rounded-xl">
            <h2 className="font-semibold text-lg text-red-500">
              Terjadi Kesalahan! Silahkan Isi Semua Formulir...
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default RekomendasiComp;
