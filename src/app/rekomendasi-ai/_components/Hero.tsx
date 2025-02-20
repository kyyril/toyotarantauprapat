import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CarIcon, SparklesIcon } from "lucide-react";

function Hero() {
  return (
    <div className="flex items-center mb-20 gap-4 flex-col pb-16 px-4">
      <div className="relative">
        <h2 className="text-primary text-center text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Temukan Mobil Toyota
          <span className="text-red-600"> Impian Anda</span>
        </h2>
        <div className="absolute -top-6 right-0 text-red-500/30">
          <CarIcon className="w-16 h-16 rotate-12" />
        </div>
      </div>

      <h3 className="text-center text-2xl md:text-3xl font-bold">
        Dengan Bantuan Artificial Intelligence
      </h3>

      <p className="text-gray-500 text-lg text-center max-w-2xl">
        Dapatkan rekomendasi mobil Toyota yang paling sesuai dengan kebutuhan
        dan budget Anda melalui teknologi AI terkini
      </p>

      <div className="flex w-full max-w-md items-center justify-center gap-6 mt-8">
        <Link href="/create" className="w-full">
          <Button className="w-full p-6 bg-red-600 hover:bg-red-700 text-white transition-all group">
            <SparklesIcon className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            Mulai Sekarang
          </Button>
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
        <div className="space-y-2 bg-red-500 rounded-xl p-2 bg-opacity-5">
          <h4 className="font-bold text-red-600 text-xl">Cepat</h4>
          <p className="text-sm ">Hasil rekomendasi instan</p>
        </div>
        <div className="space-y-2 bg-red-500 rounded-xl p-2 bg-opacity-5">
          <h4 className="font-bold text-red-600 text-xl">Akurat</h4>
          <p className="text-sm ">Sesuai preferensi Anda</p>
        </div>
        <div className="space-y-2 bg-red-500 rounded-xl p-2 bg-opacity-5">
          <h4 className="font-bold text-red-600 text-xl">Mudah</h4>
          <p className="text-sm ">Proses yang simpel</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
