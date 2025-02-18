"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Error = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen w-full mx-auto">
      <div className="text-center p-4 bg-red-500/10 gap-2 rounded-xl items-center">
        <h2 className="font-semibold text-lg text-red-500">
          Terjadi Kesalahan!
        </h2>
        <Link
          className="bg-secondary justify-center font-semibold p-2 mt-4 rounded-xl flex flex-row text-center w-full items-center mx-auto"
          href={"/"}
        >
          <ArrowLeft className="text-red-500 mr-1 h-4 w-4" />
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default Error;
