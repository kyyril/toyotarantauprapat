import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { MousePointerClickIcon } from "lucide-react";

interface CreditSimulationProps {
  type: string;
  harga: string;
}

const sukuBungaPerTenor = {
  12: 0.08, // 8% untuk 12 bulan
  24: 0.09, // 9% untuk 24 bulan
  36: 0.1, // 10% untuk 36 bulan
  48: 0.11, // 11% untuk 48 bulan
  60: 0.12, // 12% untuk 60 bulan
  72: 0.13, // 13% untuk 72 bulan
};

const getSukuBunga = (tenor: number) => {
  return sukuBungaPerTenor[tenor as keyof typeof sukuBungaPerTenor] || 0.12;
};

export default function CreditSimulationButton({
  type,
  harga,
}: CreditSimulationProps) {
  const [dpPercentage, setDpPercentage] = useState(20);
  const [tenor, setTenor] = useState(12);

  const hargaInt = parseInt(harga.replace(/\D/g, ""));
  const dpAmount = (hargaInt * dpPercentage) / 100;
  const pinjaman = hargaInt - dpAmount;
  const sukuBunga = getSukuBunga(tenor);
  const bungaPerBulan = sukuBunga / 12;
  const monthlyInstallment = Math.round(
    (pinjaman * bungaPerBulan * Math.pow(1 + bungaPerBulan, tenor)) /
      (Math.pow(1 + bungaPerBulan, tenor) - 1)
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="group text-sm">
          Simulasi Kredit{" "}
          <MousePointerClickIcon className="text-red-500 group-hover:translate-x-1 transition-transform ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-md p-4 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">{type}</DialogTitle>
          <DialogDescription className="text-sm">
            Simulasi kredit untuk pembelian mobil Toyota
          </DialogDescription>
        </DialogHeader>

        <div className="mt-3 space-y-4">
          <div className="bg-secondary/30 p-3 rounded-lg">
            <p className="text-base font-semibold">Harga Mulai: Rp. {harga}</p>
            <p className="text-xs text-red-500">
              *Harga dapat berubah sewaktu-waktu
            </p>
          </div>

          {/* Pilih Persentase Uang Muka */}
          <div>
            <p className="text-sm font-medium mb-2">
              Uang Muka ({dpPercentage}%)
            </p>
            <Slider
              value={[dpPercentage]}
              onValueChange={(value) => setDpPercentage(value[0])}
              min={20}
              max={90}
              step={5}
              className="mb-1"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>20%</span>
              <span>90%</span>
            </div>
          </div>

          {/* Pilih Lama Tenor */}
          <div>
            <p className="text-sm font-medium mb-2">Tenor (Bulan)</p>
            <div className="grid grid-cols-3 gap-1">
              {[12, 24, 36, 48, 60, 72].map((t) => (
                <Button
                  key={t}
                  variant={tenor === t ? "default" : "outline"}
                  onClick={() => setTenor(t)}
                  className="w-full text-xs py-1"
                >
                  {t}
                </Button>
              ))}
            </div>
          </div>

          {/* Hasil Simulasi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-secondary/30 p-3 rounded-lg">
            <div>
              <p className="text-sm font-medium">Total Uang Muka</p>
              <p className="text-base font-bold text-red-500">
                Rp. {dpAmount.toLocaleString("id-ID")}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Angsuran per Bulan</p>
              <p className="text-base font-bold text-red-500">
                Rp. {monthlyInstallment.toLocaleString("id-ID")}
              </p>
              <p className="text-xs text-gray-500">
                Tenor: {tenor} bulan ({(sukuBunga * 100).toFixed(1)}% p.a)
              </p>
            </div>
          </div>

          {/* Catatan */}
          <div className="text-[10px] space-y-0.5">
            <p>• Uang muka belum termasuk biaya administrasi dan lainnya</p>
            <p>
              • Total uang muka meliputi administrasi, fidusia, dan asuransi
            </p>
            <p>• Total uang muka belum termasuk angsuran pertama</p>
            <p>• Suku bunga dapat berubah sewaktu-waktu</p>
            <p className="text-xs font-semibold">
              <span className="text-red-500">*</span> Simulasi kredit ini hanya
              bersifat perkiraan dan tidak mengikat.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
