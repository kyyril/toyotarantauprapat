"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchLayananDetail } from "@/lib/utils/fetcher";
import LoadingScreen from "@/components/MobilDetail/LoadingDetail";
import ErrorScreen from "@/components/MobilDetail/ErrorDetail";
import { layanan } from "@/lib/interfaces/data.interface";
import LayananDetailContent from "@/components/Layanan/LayananDetailContent";
import { DetailLayananSkeleton } from "@/components/Layanan/LayananDetailSkeleton";

export default function LayananDetail() {
  const params = useParams();
  const [layanan, setLayanan] = useState<layanan | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (params?.slug) {
        setLoading(true);
        setError(false);
        try {
          const slug = Array.isArray(params.slug)
            ? params.slug[0]
            : params.slug; // Ambil string jika array
          const data = await fetchLayananDetail(slug);
          setLayanan(data);
        } catch (error) {
          console.error("Error fetching car details:", error);
          setError(true);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [params?.slug]);

  if (loading) return <DetailLayananSkeleton />;
  if (error || !layanan)
    return <ErrorScreen onReload={() => window.location.reload()} />;

  return (
    <div className="min-h-screen">
      {" "}
      <LayananDetailContent layanan={layanan} />
    </div>
  );
}
