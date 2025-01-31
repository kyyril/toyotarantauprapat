"use client";
import React, { useEffect, useState } from "react";

import CardLayanan from "./CardLayanan";
import { fetchLayanan } from "@/lib/utils/fetcher";
import { layanan } from "@/lib/interfaces/data.interface";
import Link from "next/link";

const ListLayanan: React.FC = () => {
  const [layananList, setLayananList] = useState<layanan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const data: any = await fetchLayanan();
        setLayananList(data);
      } catch (error) {
        console.error("Error loading layanan data:", error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-2 border-t-2 border-t-red-500 border-dotted rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {layananList.map((layanan, index) => (
        <Link href={`/layanan/${layanan.id}`}>
          <CardLayanan key={index} layanan={layanan} />
        </Link>
      ))}
    </div>
  );
};

export default ListLayanan;
