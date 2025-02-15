import React from "react";

function LokasiDomisili({ onHandleInputChange, formState }: any) {
  return (
    <div className="my-10">
      <div>
        <h2 className="font-bold text-3xl text-primary">Lokasi Domisili</h2>
        <h2 className="mt-2 text-lg text-gray-600">
          Masukkan lokasi tempat tinggal Anda saat ini.
        </h2>
      </div>

      <input
        type="text"
        placeholder="Contoh: Jakarta, Bandung, Surabaya"
        className="p-4 border rounded-md mt-5 w-full outline-primary"
        onChange={(e) => onHandleInputChange(e.target.value)}
        value={formState?.lokasi || ""}
      />
    </div>
  );
}

export default LokasiDomisili;
