import React from "react";
import Hero from "./_components/Hero";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Rekomendasi Mobil AI | Toyota Rantauprapat",
  description:
    "Dapatkan rekomendasi mobil Toyota yang sesuai dengan kebutuhan Anda menggunakan teknologi AI. Temukan mobil impian Anda dengan bantuan sistem rekomendasi pintar kami.",
  keywords:
    "rekomendasi mobil toyota, ai toyota, mobil toyota sesuai kebutuhan, sistem rekomendasi mobil, toyota rantauprapat",
  openGraph: {
    title: "Rekomendasi Mobil AI Toyota Rantauprapat",
    description: "Temukan mobil Toyota yang tepat untuk Anda dengan bantuan AI",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.toyotarantauprapat.com/rekomendasi-ai",
  },
  authors: [{ name: "Toyota Rantauprapat" }],
  category: "Automotive",
  verification: {
    google: "24f9cc081f9ae37b",
  },
};

function rekomendasiAI() {
  return (
    <div className="h-auto min-h-screen flex items-center mx-auto justify-center w-full">
      <Hero />
    </div>
  );
}

export default rekomendasiAI;
