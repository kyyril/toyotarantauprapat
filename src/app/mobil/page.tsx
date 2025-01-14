"use client";
import { CardMobil } from "@/components/CardMobil";
import { Mobil } from "@/lib/interfaces/mobil.interface";
import { fetchMobil } from "@/lib/utils/fetcher";
import { useEffect, useState } from "react";

const MobilPage = () => {
  const [data, setData] = useState<Mobil[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadMobilData = async () => {
      try {
        const result = await fetchMobil();
        setData(result);
      } catch (error) {
        console.error("Error fetching mobil data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadMobilData();
  }, []);
  console.log(data, "data");
  return (
    <main className="w-full flex justify-center items-start min-h-screen mt-5">
      <section className="w-full max-w-5xl flex justify-center items-center flex-col">
        <div className="flex flex-row gap-x-4 items-center justify-between"></div>
        {loading ? <p>Loading...</p> : <CardMobil data={data} />}
      </section>
    </main>
  );
};

export default MobilPage;
