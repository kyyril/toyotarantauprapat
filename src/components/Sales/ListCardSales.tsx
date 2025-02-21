"use client";

import Link from "next/link";
import CardSales from "./CardSales";
import { useSalesStore } from "@/lib/store/useSalesStore";
import { useEffect } from "react";
import SalesListSkeleton from "./ListSalesSkeleton";

const ListSales = () => {
  const { sales, isLoading, fetchSales } = useSalesStore();

  useEffect(() => {
    if (sales.length === 0) {
      fetchSales();
    }
  }, [sales, fetchSales]);

  if (isLoading) return <SalesListSkeleton />;
  return (
    <div className="grid mx-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {sales.map((sal) => (
        <Link key={sal.id} href={`/sales/${sal.id}`}>
          <CardSales sales={sal} />
        </Link>
      ))}
    </div>
  );
};

export default ListSales;
