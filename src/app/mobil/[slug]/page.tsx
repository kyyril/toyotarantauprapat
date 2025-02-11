import { fetchMobilDetail } from "@/lib/utils/fetcher";
import { Mobil } from "@/lib/interfaces/mobil.interface";
import ErrorScreen from "@/components/MobilDetail/ErrorDetail";
import CarDetailContent from "@/components/MobilDetail/CarDetailContent";

export default async function CarDetail({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const mobil: Mobil = await fetchMobilDetail(params.slug);

    return <CarDetailContent mobil={mobil} />;
  } catch (error) {
    console.error("Error fetching car details:", error);
    return <ErrorScreen onReload={() => window.location.reload()} />;
  }
}
