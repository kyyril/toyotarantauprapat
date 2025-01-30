import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ClockIcon, MousePointerClickIcon } from "lucide-react";

interface CreditSimulationProps {
  type: string;
  harga: string;
}

export default function CreditSimulationButton({
  type,
  harga,
}: CreditSimulationProps) {
  const [dpPercentage, setDpPercentage] = useState(20); // Default 20%
  const [tenor, setTenor] = useState(12); // Default 12 bulan

  const hargaInt = parseInt(harga.replace(/\D/g, "")); // Menghilangkan format rupiah untuk perhitungan
  const dpAmount = (hargaInt * dpPercentage) / 100;
  const monthlyInstallment = (hargaInt - dpAmount) / tenor;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">
          Simulasi Kredit <MousePointerClickIcon className="text-red-500" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-4">
        <h2 className="text-lg font-semibold mb-2">{type}</h2>
        <p className="text-gray-500 mb-4">Harga Mulai: Rp. {harga}</p>
        <p className="text-sm text-red-500 mb-2">
          *Harga dapat berubah sewaktu-waktu
        </p>

        {/* Pilih Persentase Uang Muka */}
        <div className="mb-4">
          <p className="font-medium mb-2">
            Pilih Persentasi Uang Muka ({dpPercentage}%)
          </p>
          <Slider
            value={[dpPercentage]}
            onValueChange={(value) => setDpPercentage(value[0])}
            min={20}
            max={90}
            step={10}
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>20%</span>
            <span>90%</span>
          </div>
        </div>

        {/* Pilih Lama Tenor Kredit */}
        <div className="mb-4">
          <p className="font-medium mb-2">
            Pilih Lama Tenor Kredit (Dalam Bulan)
          </p>
          <div className="flex flex-wrap gap-2">
            {[12, 24, 36, 48, 60, 72].map((t) => (
              <Button
                key={t}
                variant={tenor === t ? "default" : "outline"}
                onClick={() => setTenor(t)}
              >
                {t}
              </Button>
            ))}
          </div>
        </div>

        {/* Hasil Simulasi */}
        <div className="mb-4">
          <p className="font-medium">Total Uang Muka</p>
          <p className="text-lg font-bold text-red-500 mb-2">
            Rp. {dpAmount.toLocaleString("id-ID")}
          </p>
          <p className="font-medium">Estimasi Kredit /bulan</p>
          <p className="text-lg font-bold text-red-500 mb-2">
            Rp. {monthlyInstallment.toLocaleString("id-ID")} x {tenor} bulan
          </p>
        </div>

        {/* Catatan */}
        <div className="text-xs text-gray-500 mb-4">
          <p>Uang muka belum termasuk biaya administrasi dan lainnya.</p>
          <p>
            Total uang muka meliputi administrasi, fidusia, dan asuransi
            kendaraan.
          </p>
          <p>Total uang muka belum termasuk angsuran ke-1.</p>
          <p>
            Simulasi Kredit dibuat berdasarkan tingkat suku bunga yang
            disesuaikan dengan tenor yang telah Anda pilih.
          </p>
        </div>

        {/* Hubungi Kami */}
        <Button variant="ghost" className="w-full bg-red-500 text-white">
          HUBUNGI KAMI
        </Button>
      </PopoverContent>
    </Popover>
  );
}
