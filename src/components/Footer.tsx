import { Instagram } from "lucide-react";

const Footer = () => {
  const navigationLinks = [
    { name: "Beranda", href: "/" },
    { name: "Mobil", href: "/mobil" },
    { name: "Layanan", href: "/layanan" },
    { name: "Sales", href: "/sales" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/auto2000_rantauprapat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  ];

  const officeHours = [
    "Senin - Jumat : 08:00 - 17:00",
    "Sabtu : 08:00 - 16:00",
    "Minggu & Tanggal Merah : TUTUP",
  ];

  const contacts = [
    { role: "Kepala Cabang", name: "Lim Beny Gunawan" },
    { role: "Kepala Bengkel", name: "Teddy Ekamto" },
  ];

  return (
    <footer className="bg-primary-foreground pt-12 pb-6 mt-16">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo & Deskripsi */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-red-500">
              ToyotaRantauPrapat
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              Toyota Rantauprapat: Beli Mobil Impian Jadi Lebih Mudah, Proses
              Cepat, Angsuran Ringan, dan Pelayanan Purna Jual Terjamin.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-lg font-bold text-red-500">Navigasi</h3>
            <ul className="mt-3 space-y-1">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-red-500 transition underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sosial Media */}
          <div>
            <h3 className="text-lg font-bold text-red-500">Ikuti Kami</h3>
            <div className="mt-3 flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition text-sm underline flex items-center gap-2"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-lg font-bold text-red-500">Kepala</h3>
            <ul className="mt-3 space-y-1 text-sm">
              {contacts.map((contact) => (
                <li key={contact.role}>
                  {contact.role}: {contact.name}
                </li>
              ))}
            </ul>
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
