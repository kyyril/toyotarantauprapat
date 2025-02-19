import { fetchMobil } from "@/lib/utils/fetcher";
import ListMobil from "@/components/Mobil/ListMobil";
import { Metadata } from "next";
import { Suspense } from "react";
import { MobilListSkeleton } from "@/components/Mobil/MobilListSkeleton";

export const metadata: Metadata = {
  title: "Daftar Mobil Toyota | Toyota Rantauprapat",
  description:
    "Jelajahi koleksi lengkap mobil Toyota terbaru di Rantauprapat. Temukan berbagai model dan varian mobil Toyota dengan harga terbaik. Tersedia MPV, SUV, hatchback, dan sedan.",
  keywords:
    "mobil toyota rantauprapat, harga mobil toyota, dealer toyota, jual mobil toyota, toyota mpv, toyota suv",
  openGraph: {
    title: "Daftar Mobil Toyota Rantauprapat",
    description: "Koleksi lengkap mobil Toyota terbaru dengan harga terbaik",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const MobilPage = async () => {
  const data = await fetchMobil(); // Fetch data langsung di server

  return (
    <main className="w-full flex justify-center items-start min-h-screen mt-5">
      <section className="w-full max-w-5xl flex justify-center items-center flex-col">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Mobil</h2>
        </div>
        <Suspense fallback={<MobilListSkeleton />}>
          <ListMobil data={data} />
        </Suspense>
      </section>
    </main>
  );
};

export default MobilPage;
