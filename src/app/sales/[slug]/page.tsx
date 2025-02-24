"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import SalesDetailContent from "@/components/Sales/SalesDetailContent";
import SalesDetailsSkeleton from "@/components/Sales/SalesDetailSkeleton";
import ErrorScreen from "@/components/MobilDetail/ErrorDetail";
import { useSalesDetailStore } from "@/lib/store/useSalesDetailStore";

export default function SalesDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const { sales, isLoading, error, fetchSalesDetail } = useSalesDetailStore();

  useEffect(() => {
    if (slug && !sales[slug]) {
      fetchSalesDetail(slug);
    }
  }, [slug, sales, fetchSalesDetail]);

  if (isLoading) return <SalesDetailsSkeleton />;
  if (error || !sales[slug])
    return <ErrorScreen onReload={() => fetchSalesDetail(slug)} />;

  return (
    <div className="min-h-screen">
      <SalesDetailContent sales={sales[slug]} />
    </div>
  );
}
