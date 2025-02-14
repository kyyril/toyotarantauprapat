import ListLayanan from "@/components/Layanan/ListLayanan";
import { fetchLayanan } from "@/lib/utils/fetcher";
import { layanan } from "@/lib/interfaces/data.interface";

const LayananPage = async () => {
  let layananList: layanan[] | any = [];

  try {
    layananList = await fetchLayanan();
  } catch (error) {
    console.error("Error fetching layanan:", error);
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Layanan Kami</h1>
      <ListLayanan layananList={layananList} />
    </div>
  );
};

export default LayananPage;
