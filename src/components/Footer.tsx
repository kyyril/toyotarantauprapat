import { FacebookIcon, InstagramIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const officeHours = [
    "Senin - Jumat : 08:00 - 17:00",
    "Sabtu : 08:00 - 16:00",
    "Minggu & Tanggal Merah : TUTUP",
  ];

  return (
    <footer className="bg-primary-foreground pt-12 pb-6 mt-16">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo & Deskripsi */}
          <div className="flex justify-center flex-col items-center">
            <img
              src={"/images/logo.png"}
              alt="logo"
              className="w-full h-auto max-w-40"
            />
            <h2 className="text-2xl font-semibold">Viona Rantauprapat</h2>
            <p className="text-sm text-gray-400 mt-2">
              Viona Toyota Rantauprapat, siap melayani anda sepenuh hati
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-lg font-bold text-red-500">Navigasi</h3>
            <ul className="mt-3 space-y-1 flex flex-col">
              <Link href={"/"} className="hover:opacity-50 text-sm underline">
                Home
              </Link>
              <Link
                href={"/mobil"}
                className="hover:opacity-50 text-sm underline"
              >
                Mobil
              </Link>
              <Link
                href={"/layanan"}
                className="hover:opacity-50 text-sm underline"
              >
                Layanan
              </Link>
              <Link
                href={"/rekomendasi-ai"}
                className="hover:opacity-50 text-sm underline"
              >
                Rekomendasi AI
              </Link>
            </ul>
          </div>

          {/* Sosial Media */}
          <div>
            <h3 className="text-lg font-bold text-red-500">Ikuti Kami</h3>
            <div className="mt-3 flex space-x-4 justify-center md:justify-start">
              <Link
                href="https://www.instagram.com/viona_elisa/"
                className="gap-1 text-sm  flex flex-row justify-center items-center text-center hover:opacity-50"
              >
                <InstagramIcon className="h-4 w-4 text-pink-600" />
                Instagram
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61555485359987#"
                className="gap-1 text-sm  flex flex-row justify-center items-center text-center hover:opacity-50"
              >
                <FacebookIcon className="h-4 w-4 text-blue-500" />
                Facebook
              </Link>
            </div>
          </div>

          {/* Jam Operasional */}
          <div>
            <h3 className="text-lg font-bold text-red-500">Jam Operasional</h3>
            <ul className="mt-3 space-y-1 text-sm">
              {officeHours.map((hour, index) => (
                <li key={index}>{hour}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-sm text-gray-400 text-center">
          <hr className="my-4" />
          &copy; {new Date().getFullYear()} ToyotaRantauPrapat. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
