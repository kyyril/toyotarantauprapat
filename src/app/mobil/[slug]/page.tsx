"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import CarDetailContent from "@/components/MobilDetail/CarDetailContent";
import CarDetailSkeleton from "@/components/MobilDetail/CarDetailSkeleton";
import ErrorScreen from "@/components/MobilDetail/ErrorDetail";
import { useCarDetailStore } from "@/lib/store/useCarDetailStore";

export default function CarDetail() {
  const params = useParams();
  const slug: any = Array.isArray(params?.slug) ? params.slug[0] : params.slug;
  const { cars, isLoading, error, fetchCarDetail } = useCarDetailStore();

  useEffect(() => {
    if (slug && !cars[slug]) {
      fetchCarDetail(slug);
    }
  }, [slug, cars, fetchCarDetail]);

  if (isLoading) return <CarDetailSkeleton />;
  if (error || !cars[slug])
    return <ErrorScreen onReload={() => fetchCarDetail(slug)} />;

  return (
    <div className="min-h-screen">
      <CarDetailContent mobil={cars[slug]} />
    </div>
  );
}
