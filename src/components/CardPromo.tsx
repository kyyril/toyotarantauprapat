import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getJSONData } from "@/lib/server";

export async function CardPromo() {
  const data = await getJSONData();
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Promo</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 ">
        {data.promo.map((promo) => (
          <Card
            key={promo.id}
            className="m-1 transition transform hover:bg-secondary active:bg-primary-foreground hover:scale-95 duration-200 ease-in-out"
          >
            <CardHeader>
              <CardTitle>{promo.nama}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={promo.gambar} alt={promo.nama} />
            </CardContent>
            <CardFooter className="text-sm">
              {promo.mulai} - {promo.akhir}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
