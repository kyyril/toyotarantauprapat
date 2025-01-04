import React from "react";
import { getJSONData } from "@/lib/server";
import Image from "next/image";

async function Produk() {
  const data = await getJSONData();
  return (
    <main>
      <section>
        <h2>Produk</h2>
        <div>
          {data.produk.map((prod) => (
            <div key={prod.id}>
              <h3>{prod.nama}</h3>
              {/* <div>
                <Image
                  src={prod.gambar}
                  alt={prod.nama}
                  width={100}
                  height={50}
                />
              </div> */}
              <p>{prod.deskripsi}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Produk;
