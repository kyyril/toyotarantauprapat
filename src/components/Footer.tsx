import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-12 pb-6 mt-16">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Kolom 1 - Logo / Nama Website */}
          <div className="max-w-xs text-center md:text-left">
            <h2 className="text-2xl font-bold">ToyotaRantauPrapat</h2>
            <p className="text-sm text-gray-400 mt-2">
              Bersama Toyota Rantauprapat, Anda Tidak Hanya Mendapatkan Mobil
              Impian, Tapi Juga Pengalaman Berbelanja yang Menyenangkan dan
              Terpercaya.
            </p>
          </div>

          {/* Kolom 2 - Navigasi */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold">Navigasi</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="/"
                  className="text-sm hover:text-red-500 transition underline"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="mobil"
                  className="text-sm hover:text-red-500 transition underline "
                >
                  Mobil
                </a>
              </li>
              <li>
                <a
                  href="layanan"
                  className="underline text-sm hover:text-red-500 transition"
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="sales"
                  className="text-sm underline hover:text-red-500 transition"
                >
                  Sales
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3 - Sosial Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold">Ikuti Kami</h3>
            <div className="mt-3 flex space-x-4">
              <a
                href="https://www.instagram.com/auto2000_rantauprapat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="hover:opacity-50 transition text-sm underline"
              >
                instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-sm text-gray-400 text-center ">
          &copy; {new Date().getFullYear()} ToyotaRantauPrapat. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
