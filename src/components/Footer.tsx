const Footer = () => {
  return (
    <footer className="pt-12 pb-4 mt-8 border-t shadow-lg">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Kolom 1 - Logo / Nama Website */}
          <div>
            <h2 className="text-xl font-bold">BrandName</h2>
            <p className="text-sm text-gray-300">
              Slogan atau deskripsi singkat.
            </p>
          </div>

          {/* Kolom 2 - Navigasi */}
          <div>
            <h3 className="text-lg font-semibold">Navigasi</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a className="hover:underline">Tentang Kami</a>
              </li>
              <li>
                <a className="hover:underline">Layanan</a>
              </li>
              <li>
                <a className="hover:underline">Kontak</a>
              </li>
            </ul>
          </div>

          {/* Kolom 3 - Sosial Media */}
          <div>
            <h3 className="text-lg font-semibold">Ikuti Kami</h3>
            <div className="mt-2 flex justify-center space-x-4">
              <a href="#" className="hover:text-gray-400">
                Facebook
              </a>
              <a href="#" className="hover:text-gray-400">
                Twitter
              </a>
              <a href="#" className="hover:text-gray-400">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} ToyotaRantauPrapat. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
