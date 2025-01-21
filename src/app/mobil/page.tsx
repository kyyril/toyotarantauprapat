import { fetchMobil } from "@/lib/utils/fetcher";
import ListMobil from "@/components/Mobil/ListMobil";

const MobilPage = async () => {
  const data = await fetchMobil(); // Fetch data langsung di server

  return (
    <main className="w-full flex justify-center items-start min-h-screen mt-5">
      <section className="w-full max-w-5xl flex justify-center items-center flex-col">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Mobil</h2>
        </div>
        <ListMobil data={data} />
      </section>
    </main>
  );
};

export default MobilPage;
