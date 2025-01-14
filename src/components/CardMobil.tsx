import { Card } from "@/components/ui/card";
import { Data } from "@/lib/interfaces/data.interface";
import { Mobil } from "@/lib/interfaces/mobil.interface";
import Link from "next/link";

export function CardMobil({ data }: { data: Mobil[] }) {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Mobil</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((mob) => (
          <Link href={`/mobil/${mob.nama}`}>
            <Card key={mob.id} className="overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img
                  src={mob.gambar}
                  alt={mob.nama}
                  className="object-cover rounded-sm w-full h-full"
                />
              </div>
              <div className="p-2">
                <h3 className="text-lg font-bold">{mob.nama}</h3>
              </div>
              <div className="p-2">
                <h3 className="text-lg font-bold">{mob.type}</h3>
              </div>
              <div className="p-1 px-2">
                <p className="text-lg font-semibold">{mob.harga}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
