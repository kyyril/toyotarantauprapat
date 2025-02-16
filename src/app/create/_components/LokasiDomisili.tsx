import React from "react";

function LokasiDomisili({ onHandleInputChange, formState }: any) {
  return (
    <div className="my-10">
      <div>
        <h2 className="font-bold text-3xl text-red-500 ">Lokasi Domisili</h2>
        <h2 className="mt-2 text-lg text-gray-500">
          Masukkan lokasi tempat tinggal Anda saat ini.
        </h2>
      </div>

      <input
        type="text"
        placeholder="Cth: Aek Paing,Bina Raga,Rantauprapat,Cendana,Kartini"
        className="p-4 border rounded-md mt-5 text-sm w-full outline-primary"
        onChange={(e) => onHandleInputChange(e.target.value)}
        value={formState?.lokasi || ""}
      />
    </div>
  );
}

export default LokasiDomisili;
