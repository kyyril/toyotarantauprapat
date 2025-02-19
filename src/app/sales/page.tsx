import CardSales from "@/components/Sales/CardSales";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Team | Toyota Rantauprapat",
  description:
    "Temui tim sales profesional Toyota Rantauprapat yang siap membantu Anda menemukan mobil Toyota impian. Konsultasikan kebutuhan dan dapatkan penawaran terbaik.",
  keywords:
    "sales toyota rantauprapat, marketing toyota, dealer toyota, sales mobil toyota",
  openGraph: {
    title: "Sales Team Toyota Rantauprapat",
    description: "Tim sales profesional Toyota Rantauprapat siap membantu Anda",
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
};

const SalesPage = async () => {
  return (
    <main className="w-full flex justify-center items-start min-h-screen mt-5">
      <section className="w-full max-w-5xl flex justify-center items-center flex-col">
        <div className="mb-4 w-full mx-auto flex justify-start items-start">
          <h2 className="text-2xl font-bold mx-5">Sales</h2>
        </div>
        <CardSales />
      </section>
    </main>
  );
};

export default SalesPage;
