import React from "react";

import { getJSONData } from "@/lib/server";

async function CardProsesPembayaran() {
  const data = await getJSONData();
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Proses Pembayaran</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 d:grid-cols-3 lg:grid-cols-2 gap-1">
        {data.prosespembayaran.map((inpem) => (
          <div key={inpem.id} className="m-1 shadow-lg p-1 rounded-sm">
            <div className="flex text-sm justify-between">
              <div className="flex items-start left-0 top-0 w-auto justify-start">
                <div className="flex flex-row">
                  <span className="bg-red-500 rounded-t-md rounded-r-md p-1">
                    {inpem.id}
                  </span>
                  <span className="flex p-2 justify-start font-bold text-sm text-primary">
                    {inpem.nama}
                  </span>
                </div>
              </div>
            </div>
            <p className="flex px-3 ml-2 justify-start text-sm text-primary">
              {inpem.deskripsi}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardProsesPembayaran;
