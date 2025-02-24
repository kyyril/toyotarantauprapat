"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import LayananDetailContent from "@/components/Layanan/LayananDetailContent";
import { DetailLayananSkeleton } from "@/components/Layanan/LayananDetailSkeleton";
import ErrorScreen from "@/components/MobilDetail/ErrorDetail";
import { useLayananDetailStore } from "@/lib/store/useLayananDetailStore";

export default function LayananDetail() {
  const params = useParams();
  const slug: any = Array.isArray(params?.slug) ? params.slug[0] : params.slug;
  const { layananCache, isLoading, error, fetchLayananDetail } =
    useLayananDetailStore();

  useEffect(() => {
    if (slug && !layananCache[slug]) {
      fetchLayananDetail(slug);
    }
  }, [slug, layananCache, fetchLayananDetail]);

  if (isLoading) return <DetailLayananSkeleton />;
  if (error || !layananCache[slug])
    return <ErrorScreen onReload={() => fetchLayananDetail(slug)} />;

  return (
    <div className="min-h-screen">
      <LayananDetailContent layanan={layananCache[slug]} />
    </div>
  );
}
