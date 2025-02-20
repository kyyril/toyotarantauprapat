import ListLayanan from "@/components/Layanan/ListLayanan";
import { fetchLayanan } from "@/lib/utils/fetcher";
import { layanan } from "@/lib/interfaces/data.interface";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan | Toyota Labuhan Batu",
  description:
    "Temukan berbagai layanan unggulan Toyota Labuhan Batu seperti servis berkala, perawatan kendaraan, body repair, spare parts asli, dan layanan darurat 24 jam untuk kenyamanan berkendara Anda.",
  keywords:
    "layanan toyota, servis mobil toyota, spare parts toyota, bengkel resmi toyota, body repair toyota, toyota labuhan batu",
  openGraph: {
    title: "Layanan Toyota Labuhan Batu",
    description: "Layanan lengkap untuk perawatan mobil Toyota Anda",
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
const LayananPage = async () => {
  let layananList: layanan[] | any = [];

  try {
    layananList = await fetchLayanan();
  } catch (error) {
    console.error("Error fetching layanan:", error);
  }

  return (
    <main className="flex flex-col flex-grow">
      <div className="max-w-6xl w-full mx-auto">
        <div className="mb-8 p-4">
          <h1 className="text-3xl font-bold text-primary">Layanan Kami</h1>
          <p className="mt-2 text-gray-600">
            Berbagai layanan yang kami sediakan untuk kenyamanan Anda
          </p>
        </div>
        <ListLayanan layananList={layananList} />
      </div>
    </main>
  );
};

export default LayananPage;
