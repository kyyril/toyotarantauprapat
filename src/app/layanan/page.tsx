import ListLayanan from "@/components/Layanan/ListLayanan";
import { fetchLayanan } from "@/lib/utils/fetcher";
import { layanan } from "@/lib/interfaces/data.interface";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan | Toyota Labuhan Batu",
  description: "Layanan yang tersedia di Toyota Labuhan Batu",
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
      <div className="max-w-6xl w-full mx-auto p-6">
        <div className="mb-8">
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
