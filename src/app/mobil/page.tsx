import { ListMobil } from "@/components/ListMobil";
import { fetchMobil } from "@/lib/utils/fetcher";

const MobilPage = async () => {
  const data = await fetchMobil();

  return (
    <main className="w-full flex justify-center items-start min-h-screen mt-5">
      <section className="w-full max-w-5xl flex justify-center items-center flex-col">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Mobil</h2>
        </div>
        <div className="flex flex-row gap-x-4 items-center justify-between">
          {<ListMobil data={data} />}
        </div>
      </section>
    </main>
  );
};

export default MobilPage;
