import React from "react";
import { getJSONData } from "@/lib/server";
import Image from "next/image";
import { CardProduk } from "@/components/CardProduk";

async function Produk() {
  const data = await getJSONData();
  return (
    <main>
      <section>
        <h2>Produk</h2>
        <div>
          <CardProduk />
        </div>
      </section>
    </main>
  );
}

export default Produk;
