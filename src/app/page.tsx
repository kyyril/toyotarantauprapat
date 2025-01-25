import Image from "next/image";
import Link from "next/link";
import { Car, CreditCard, PhoneCall, Wrench } from "lucide-react";

import { CardPromo } from "@/components/Promo/CardPromo";
import CardProsesPembayaran from "@/components/CardProsesPembayaran";
import { Button } from "@/components/ui/button";
import { CardSales } from "@/components/Sales/CardSales";

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
            <p className="max-w-[600px] lg:text-lg  text-gray-500 font-light dark:text-gray-400">
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

      <div className="max-w-7xl w-full mt-4 px-8 md:px-32 text-center mx-auto text-red-700">
        “Auto2000 Rantauprapat tidak bertanggung jawab jika pembayaran tanpa
        kuintansi resmi PT. ASTRA INTERNATIONAL Tbk. dan atau transfer
        ditunjukkan ke rekening pribadi Sales/Oknum”
        <hr />
      </div>

      {/* service */}
      <section
        id="service"
        className="max-w-7xl w-full mt-24 px-4 md:px-16 mx-auto"
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col  items-center">
            <CreditCard className="h-8 w-8 text-red-500" />
            <span className="font-bold text-center text-md">
              Simulasi Credit
            </span>
          </div>
          <div className="flex flex-col mx-4 items-center">
            <Wrench className="h-8 w-8 text-red-500" />
            <span className="font-bold text-md">Service</span>
          </div>
          <div className="flex flex-col  items-center">
            <Car className="h-8 w-8 text-red-500" />
            <span className="font-bold text-md">Test Drive</span>
          </div>
        </div>
      </section>

      <section
        id="sales"
        className="max-w-7xl w-full mt-24 px-4 md:px-16 mx-auto"
      >
        <div>
          <CardSales />
        </div>
      </section>

      <section
        className="max-w-7xl w-full mt-24 px-4 md:px-16 mx-auto"
        id="pembayaran"
      >
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Lokasi</h2>
        </div>
        <div className="flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6288.034080097089!2d99.83794699514428!3d2.0921307861927723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302da1ac3eab9c87%3A0x979ac3ca48e16c17!2sAuto2000%20Rantauprapat!5e1!3m2!1sid!2sid!4v1736217571208!5m2!1sid!2sid"
            width="800"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
