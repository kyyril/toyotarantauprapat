"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import CarDetailContent from "@/components/MobilDetail/CarDetailContent";
import CarDetailSkeleton from "@/components/MobilDetail/CarDetailSkeleton";
import ErrorScreen from "@/components/MobilDetail/ErrorDetail";
import { useCarDetailStore } from "@/lib/store/useCarDetailStore";
import Head from "next/head";

export default function CarDetail() {
  const params = useParams();
  const slug: any = Array.isArray(params?.slug) ? params.slug[0] : params.slug;
  const { cars, isLoading, error, fetchCarDetail } = useCarDetailStore();

  useEffect(() => {
    if (slug && !cars[slug]) {
      fetchCarDetail(slug);
    }
  }, [slug, cars, fetchCarDetail]);

  // Generate dynamic metadata
  const carData = cars[slug];
  const title = carData
    ? `${carData.nama} | Toyota Rantauprapat`
    : "Loading...";
  const description = carData
    ? `Lihat spesifikasi lengkap dan harga ${carData.nama} terbaru di Toyota Rantauprapat. Dapatkan info kredit dan promo menarik.`
    : "Loading car details...";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {carData?.gambar && (
          <meta property="og:image" content={carData.gambar[0]} />
        )}
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {carData?.gambar && (
          <meta name="twitter:image" content={carData.gambar[0]} />
        )}

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://www.toyotarantauprapat.com/mobil/${slug}`}
        />
      </Head>

      <div className="min-h-screen">
        {isLoading ? (
          <CarDetailSkeleton />
        ) : error || !cars[slug] ? (
          <ErrorScreen onReload={() => fetchCarDetail(slug)} />
        ) : (
          <CarDetailContent mobil={cars[slug]} />
        )}
      </div>
    </>
  );
}
