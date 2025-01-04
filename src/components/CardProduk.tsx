import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getJSONData } from "@/lib/server";

export async function CardProduk() {
  const data = await getJSONData();
  return (
    <div>
      <div>apalah</div>
      <div className="flex ">
        {data.produk.map((prod) => (
          <Card key={prod.id} className="mx-2">
            <CardHeader>
              <CardTitle>{prod.nama}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={prod.gambar} alt={prod.nama} />
            </CardContent>
            <CardDescription>{prod.deskripsi}</CardDescription>
            <CardFooter>
              <p>{prod.harga}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
