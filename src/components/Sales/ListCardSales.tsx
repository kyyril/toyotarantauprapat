"use client";

import Link from "next/link";
import CardSales from "./CardSales";
import { Sales } from "@/lib/interfaces/data.interface";

interface ListSalesProps {
  sales: Sales[];
}

const ListSales = ({ sales }: ListSalesProps) => {
  if (!sales || sales.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Tidak ada sales tersedia
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {sales.map((sal) => (
        <Link key={sal.id} href={`/sales/${sal.id}`}>
          <CardSales sales={sal} />
        </Link>
      ))}
    </div>
  );
};

export default ListSales;
