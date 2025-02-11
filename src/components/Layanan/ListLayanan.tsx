import CardLayanan from "./CardLayanan";
import { fetchLayanan } from "@/lib/utils/fetcher";
import { layanan } from "@/lib/interfaces/data.interface";
import Link from "next/link";

export default async function ListLayanan() {
  let layananList: layanan[] = [];

  try {
    layananList = await fetchLayanan();
  } catch (error) {
    console.error("Error loading layanan data:", error);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {layananList.length > 0 ? (
        layananList.map((layanan) => (
          <Link key={layanan.id} href={`/layanan/${layanan.id}`}>
            <CardLayanan layanan={layanan} />
          </Link>
        ))
      ) : (
        <p className="text-center w-full text-gray-500">
          Tidak ada layanan yang tersedia.
        </p>
      )}
    </div>
  );
}
