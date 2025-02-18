"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/MobilDetail/LoadingDetail";
import ErrorScreen from "@/components/MobilDetail/ErrorDetail";
import { fetchSalesDetail } from "@/lib/utils/fetcher";
import { Sales } from "@/lib/interfaces/data.interface";
import SalesDetailContent from "@/components/Sales/SalesDetailContent";

export default function CarDetail() {
  const params = useParams();
  const [sales, setSales] = useState<Sales | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (params?.slug) {
        setLoading(true);
        setError(false);
        try {
          const data = await fetchSalesDetail(params.slug);
          setSales(data);
        } catch (error) {
          console.error("Error fetching sales details:", error);
          setError(true);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [params?.slug]);

  if (loading) return <LoadingScreen />;
  if (error || !sales)
    return <ErrorScreen onReload={() => window.location.reload()} />;

  return (
    <div className="min-h-screen">
      <SalesDetailContent sales={sales} />;
    </div>
  );
}
