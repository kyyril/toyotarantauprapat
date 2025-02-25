"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import SalesDetailContent from "@/components/Sales/SalesDetailContent";
import SalesDetailsSkeleton from "@/components/Sales/SalesDetailSkeleton";
import ErrorScreen from "@/components/MobilDetail/ErrorDetail";
import { useSalesDetailStore } from "@/lib/store/useSalesDetailStore";
import Head from "next/head";

export default function SalesDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const { sales, isLoading, error, fetchSalesDetail } = useSalesDetailStore();

  useEffect(() => {
    if (slug && !sales[slug]) {
      fetchSalesDetail(slug);
    }
  }, [slug, sales, fetchSalesDetail]);

  // Generate dynamic metadata
  const salesData = sales[slug];
  const title = salesData
    ? `${salesData.nama} - Sales Toyota Rantauprapat`
    : "Sales Toyota Rantauprapat";
  const description = salesData
    ? `Hubungi ${salesData.nama}, Sales Executive Toyota Auto 2000 Rantauprapat. Dapatkan penawaran terbaik untuk pembelian mobil Toyota baru.`
    : "Sales Executive Toyota Auto 2000 Rantauprapat siap membantu Anda mendapatkan mobil Toyota impian.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {salesData?.profile && (
          <meta property="og:image" content={salesData.profile} />
        )}
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="Toyota Rantauprapat" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {salesData?.profile && (
          <meta name="twitter:image" content={salesData.profile} />
        )}

        {/* Profile Specific */}
        {salesData && (
          <>
            <meta
              property="profile:first_name"
              content={salesData.nama.split(" ")[0]}
            />
            <meta
              property="profile:username"
              content={salesData.nama.toLowerCase().replace(/\s+/g, "")}
            />
          </>
        )}

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://www.toyotarantauprapat.com/sales/${slug}`}
        />
        <meta
          name="keywords"
          content={`toyota, sales, ${
            salesData?.nama || ""
          }, rantauprapat, labuhanbatu`}
        />
      </Head>

      <div className="min-h-screen">
        {isLoading ? (
          <SalesDetailsSkeleton />
        ) : error || !sales[slug] ? (
          <ErrorScreen onReload={() => fetchSalesDetail(slug)} />
        ) : (
          <SalesDetailContent sales={sales[slug]} />
        )}
      </div>
    </>
  );
}
