export default function Custom500() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">500</h1>
      <p className="text-xl text-gray-600 mt-4">
        Maaf, terjadi kesalahan di server.
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
