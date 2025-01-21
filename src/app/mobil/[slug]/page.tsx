"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchMobilDetail } from "@/lib/utils/fetcher";
import { Mobil } from "@/lib/interfaces/mobil.interface";
import LoadingScreen from "@/components/MobilDetail/LoadingDetail";
import ErrorScreen from "@/components/MobilDetail/ErrorDetail";
import CarDetailContent from "@/components/MobilDetail/CarDetailContent";

export default function CarDetail() {
  const params = useParams();
  const [mobil, setMobil] = useState<Mobil | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (params?.slug) {
        setLoading(true);
        setError(false);
        try {
          const data = await fetchMobilDetail(params.slug);
          setMobil(data);
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

  if (loading) return <LoadingScreen />;
  if (error || !mobil)
    return <ErrorScreen onReload={() => window.location.reload()} />;

  return <CarDetailContent mobil={mobil} />;
}
