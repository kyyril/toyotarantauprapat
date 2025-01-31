import ListLayanan from "@/components/Layanan/ListLayanan";
import React from "react";

const LayananPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Layanan Kami</h1>
      <ListLayanan />
    </div>
  );
};

export default LayananPage;
