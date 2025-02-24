export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl text-gray-600 mt-4">
        Oops! Halaman tidak ditemukan.
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
      >
        Kembali ke Beranda
      </a>
    </div>
  );
}
