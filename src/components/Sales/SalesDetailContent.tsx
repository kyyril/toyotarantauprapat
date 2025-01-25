import React from "react";
import { Sales } from "@/lib/interfaces/data.interface";
import { Button } from "../ui/button";
import AdditionalSalesInfo from "./AdditionalSalesInfo";
import GallerySales from "./GallerySales";

function SalesDetailContent({ sales }: { sales: Sales }) {
  return (
    <main className="w-full flex justify-center items-start min-h-screen py-10 px-5 bg-gray-50">
      <section className="w-full max-w-4xl bg-white shadow-md rounded-2xl p-8">
        {/* Header Section */}
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Sales Details
        </h2>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="flex flex-col items-center">
            <img
              src={sales.profile}
              alt={sales.nama}
              className="w-full h-72 object-cover rounded-xl shadow-md"
            />
            <h1 className="text-2xl font-semibold text-gray-800 mt-6">
              {sales.nama}
            </h1>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-600 leading-relaxed text-justify mb-6">
              {sales.deskripsi}
            </p>
            <Button className="w-full bg-green-600  font-semibold py-2 rounded-lg hover:bg-opacity-50 transition">
              {sales.nohp}
            </Button>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-8">
          <GallerySales gallery={sales.gallery} />
        </div>

        {/* Additional Content Section */}
        <div className="mt-8">
          <AdditionalSalesInfo />
        </div>
      </section>
    </main>
  );
}

export default SalesDetailContent;
