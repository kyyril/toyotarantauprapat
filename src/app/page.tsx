import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

import { CardPromo } from "@/components/CardPromo";
import CardProsesPembayaran from "@/components/CardProsesPembayaran";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section
        id="home"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20 h-[90vh]"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mx-1">
          <div className="">
            <Image
              src="/images/pt.png"
              width={1000}
              height={400}
              loading="lazy"
              alt="pt"
              className="mx-auto overflow-hidden object-cover object-center rounded-br-xl rounded-tl-xl"
            />
          </div>
          <div className="max-w-7xl w-full px-4 md:px-8 mx-auto">
            <div className="space-y-1 mb-2 flex flex-col">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter ">
                Auto
                <span className="text-red-500"> 2000</span>
              </h1>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter">
                RantauPrapat
              </h1>
            </div>
            <p className="max-w-[600px] lg:text-lg text-gray-500 font-light dark:text-gray-400">
              Selamat datang di dealer dan bengkel Resmi Auto2000 Rantauprapat .
              Tersedia beragam kebutuhan serta promo maupun fasilitas pembayaran
              secara kredit dan tunai. Dapatkan juga layanan purna jual seperti
              servis mobil dan penjualan part Toyota.
            </p>
            <div className="space-x-4 mt-2">
              <Link target="_blank" href={"/"}>
                <Button
                  className="hover:text-red-500 transition transform hover:bg-secondary active:bg-primary-foreground hover:scale-95 duration-200 ease-in-out"
                  variant="secondary"
                  size="sm"
                >
                  081269548966
                  <PhoneCall />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* promo */}
      <section
        className="max-w-7xl w-full mt-10 px-4 md:px-16 mx-auto"
        id="promo"
      >
        <div>
          <CardPromo />
        </div>
      </section>

      {/* standart pembayaran */}
      <section
        className="max-w-7xl w-full mt-10 px-4 md:px-16 mx-auto"
        id="pembayaran"
      >
        <div>
          <CardProsesPembayaran />
        </div>
      </section>

      <div className="max-w-7xl w-full mt-4 px-8 md:px-32 mx-auto font-semibold text-red-500">
        “Auto2000 Rantauprapat tidak bertanggung jawab jika pembayaran tanpa
        kuintansi resmi PT. ASTRA INTERNATIONAL Tbk. dan atau transfer
        ditunjukkan ke rekening pribadi Sales/Oknum”
        <hr />
      </div>
    </main>
  );
}
