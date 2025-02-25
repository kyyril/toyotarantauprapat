import ListSales from "@/components/Sales/ListCardSales";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales | Toyota Rantauprapat",
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
  alternates: {
    canonical: "https://www.toyotarantauprapat.com/sales",
  },
  authors: [{ name: "Toyota Rantauprapat" }],
  category: "Automotive",
  verification: {
    google: "24f9cc081f9ae37b",
  },
};

const SalesPage = async () => {
  return (
    <main className="flex flex-col flex-grow">
      <div className="max-w-6xl w-full mx-auto">
        <div className="mb-8 p-4">
          <h1 className="text-3xl font-bold text-primary">Sales</h1>
          <p className="mt-2 text-gray-600">
            Tim sales profesional kami siap membantu Anda menemukan mobil Toyota
            impian. Hubungi sales advisor kami untuk konsultasi dan penawaran
            terbaik.
          </p>
        </div>
        <ListSales />
      </div>
    </main>
  );
};

export default SalesPage;
