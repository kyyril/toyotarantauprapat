import { CardMobil } from "@/components/CardMobil";
import React from "react";

async function Mobil() {
  return (
    <main className="w-full flex justify-center items-start min-h-screen mt-5">
      <section className="w-full max-w-5xl flex justify-center items-center flex-col">
        <CardMobil />
      </section>
    </main>
  );
}
 
export default Mobil;
