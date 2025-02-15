// app/mobil/[slug]/page.tsx
import { fetchMobilDetail } from "@/lib/utils/fetcher";
import { Mobil } from "@/lib/interfaces/mobil.interface";
import ErrorScreen from "@/components/MobilDetail/ErrorDetail";
import CarDetailContent from "@/components/MobilDetail/CarDetailContent";
import { notFound } from "next/navigation";

export default async function CarDetail({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const mobil: Mobil | null = await fetchMobilDetail(params.slug);

    if (!mobil) return notFound();

    return (
      <div className="h-screen">
        <CarDetailContent mobil={mobil} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching car details:", error);
    return <ErrorScreen onReload={() => window.location.reload()} />;
  }
}
