"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import LayananDetailContent from "@/components/Layanan/LayananDetailContent";
import { DetailLayananSkeleton } from "@/components/Layanan/LayananDetailSkeleton";
import ErrorScreen from "@/components/MobilDetail/ErrorDetail";
import { useLayananDetailStore } from "@/lib/store/useLayananDetailStore";
import Head from "next/head";

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

  // Generate dynamic metadata
  const layananData = layananCache[slug];
  const title = layananData
    ? `${layananData.id} | Layanan Toyota Rantauprapat`
    : "Layanan Toyota Rantauprapat";
  const description = layananData
    ? `${layananData.id} - ${layananData.deskripsi?.slice(0, 155)}...`
    : "Layanan bengkel resmi Toyota Auto 2000 Rantauprapat. Booking service, sparepart, dan perawatan berkala mobil Toyota Anda.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {layananData?.gallery && (
          <meta property="og:image" content={layananData.gallery} />
        )}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="Toyota Rantauprapat" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {layananData?.gallery && (
          <meta name="twitter:image" content={layananData.gallery} />
        )}

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://www.toyotarantauprapat.com/layanan/${slug}`}
        />
        <meta
          name="keywords"
          content={`toyota, service, bengkel, ${
            layananData?.id || ""
          }, rantauprapat, labuhanbatu`}
        />
      </Head>

      <div className="min-h-screen">
        {isLoading ? (
          <DetailLayananSkeleton />
        ) : error || !layananCache[slug] ? (
          <ErrorScreen onReload={() => fetchLayananDetail(slug)} />
        ) : (
          <LayananDetailContent layanan={layananCache[slug]} />
        )}
      </div>
    </>
  );
}
