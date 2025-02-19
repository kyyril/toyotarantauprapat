import React from "react";
import { Sales } from "@/lib/interfaces/data.interface";
import { Button } from "../ui/button";
import GallerySales from "./GallerySales";
import { PhoneCall } from "lucide-react";

function SalesDetailContent({ sales }: { sales: Sales }) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Halo ${sales.nama} saya dari website toyota rantauprapat ingin diskusi dengan anda..`
    );
    window.open(`https://wa.me/62${sales.nohp}?text=${message}`, "_blank");
  };

  return (
    <main className="flex justify-center items-start min-h-screen py-10 px-5 w-full">
      <section className="w-full max-w-4xl bg-background shadow-sm rounded-xl p-6">
        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="flex justify-center">
            <img
              src={sales.profile}
              alt={sales.nama}
              loading="lazy"
              className="w-80 h-80 rounded-full object-cover border-2 border-red-500"
            />
          </div>

          {/* Right Section */}
          <div>
            <h1 className="text-2xl font-semibold mb-3">{sales.nama}</h1>
            <p className="text-muted-foreground leading-relaxed text-left">
              {sales.deskripsi}
            </p>
            <Button
              onClick={handleWhatsAppClick}
              variant="secondary"
              className="flex items-center gap-2 w-full max-w-36 mt-4"
            >
              {sales.nohp}
              <PhoneCall className="h-5 w-5 text-red-500" />
            </Button>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-16">
          <GallerySales gallery={sales.gallery} />
        </div>
      </section>
    </main>
  );
}

export default SalesDetailContent;
