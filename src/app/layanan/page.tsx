import ListLayanan from "@/components/Layanan/ListLayanan";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Layanan Bengkel | Toyota Rantauprapat",
    template: "%s | Toyota Rantauprapat",
  },
  description:
    "Temukan layanan bengkel resmi Toyota Rantauprapat Rantauprapat: servis berkala, perawatan AC, ganti oli, body repair, spare parts asli, dan layanan darurat 24 jam. Booking service online sekarang!",
  keywords:
    "layanan toyota rantauprapat, bengkel resmi toyota, servis mobil toyota, spare parts toyota, body repair toyota, ganti oli toyota, service ac toyota, booking service toyota, toyota Rantauprapat rantauprapat",
  openGraph: {
    title: "Layanan Bengkel | Rantauprapat",
    description:
      "Layanan bengkel resmi Toyota Rantauprapat Rantauprapat. Booking service online sekarang untuk perawatan berkala mobil Toyota Anda!",
    url: "https://www.toyotarantauprapat.com/layanan",
    siteName: "Toyota Rantauprapat",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Layanan Bengkel Resmi Toyota Rantauprapat",
    description:
      "Booking service online sekarang untuk perawatan berkala mobil Toyota Anda di bengkel resmi Toyota Rantauprapat",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.toyotarantauprapat.com/layanan",
  },
  authors: [{ name: "Toyota Rantauprapat" }],
  category: "Automotive Service",
  verification: {
    google: "24f9cc081f9ae37b",
  },
};

const LayananPage = async () => {
  return (
    <main className="flex flex-col flex-grow">
      <div className="max-w-6xl w-full mx-auto">
        <div className="mb-8 p-4">
          <h1 className="text-3xl font-bold text-primary mb-4">
            Layanan Bengkel Resmi Toyota Rantauprapat
          </h1>
          <p className="mt-2 text-gray-600 max-w-2xl">
            Dapatkan pelayanan terbaik untuk mobil Toyota Anda di bengkel resmi
            Auto 2000 Rantauprapat. Kami menyediakan layanan servis berkala,
            perawatan AC, ganti oli, body repair, dan spare parts asli Toyota.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Hubungi kami untuk booking
          </div>
        </div>
        <ListLayanan />
      </div>
    </main>
  );
};

export default LayananPage;
