"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, MessageSquare } from "lucide-react";
const idPromoPost = process.env.NEXT_PUBLIC_SPREAD_POST_PROMO;
const scriptUrl = `https://script.google.com/macros/s/${idPromoPost}/exec`;

interface PostPromoDialogProps {
  mobil: string[];
  namaPromo: string;
}

export default function PostPromoDialog({
  mobil,
  namaPromo,
}: PostPromoDialogProps) {
  const [form, setForm] = useState({
    nama: "",
    nomorHp: "",
    mobil: "",
    pesan: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [wasInteracted, setWasInteracted] = useState(false);

  const sendAbandonedForm = async () => {
    if (
      wasInteracted &&
      (form.nama || form.nomorHp || form.mobil || form.pesan)
    ) {
      try {
        await fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            status: "Abandoned",
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (err) {
        console.error("Failed to send abandoned form data:", err);
      }
    }
  };

  const handleInteraction = () => {
    if (!wasInteracted) {
      setWasInteracted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    handleInteraction();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    handleInteraction();
    setForm({ ...form, mobil: value });
  };

  useEffect(() => {
    return () => {
      sendAbandonedForm();
    };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nama || !form.nomorHp || !form.mobil || !form.pesan) {
      setError("Semua kolom harus diisi!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          namaPromo,
          status: "Submitted",
          timestamp: new Date().toISOString(),
        }),
      });

      const waMessage = `Halo, saya ${form.nama} tertarik dengan PROMO: ${namaPromo}.%0AMobil Terkait: ${form.mobil}%0APesan: ${form.pesan}`;
      const waUrl = `https://wa.me/62811612535?text=${waMessage}`;
      window.open(waUrl, "_blank");
      setForm({ nama: "", nomorHp: "", mobil: "", pesan: "" });
      setWasInteracted(false);
      setOpen(false);
    } catch (err) {
      setError("Gagal mengirim pesan. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
            <MessageSquare className="mr-2 h-4 w-4" />
            Tanyakan Promo
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Tanyakan Promo {namaPromo}</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="nama">Nama</Label>
              <Input
                id="nama"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                placeholder="Masukkan Nama"
              />
            </div>

            <div>
              <Label htmlFor="nomorHp">Nomor HP</Label>
              <Input
                id="nomorHp"
                name="nomorHp"
                type="tel"
                value={form.nomorHp}
                onChange={handleChange}
                placeholder="Masukkan Nomor HP"
              />
            </div>

            <div>
              <Label htmlFor="mobil">Pilih Mobil</Label>
              <Select onValueChange={handleSelectChange} value={form.mobil}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Mobil" />
                </SelectTrigger>
                <SelectContent>
                  {mobil.map((item, index) => (
                    <SelectItem key={index} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="pesan">Pesan</Label>
              <Textarea
                id="pesan"
                name="pesan"
                value={form.pesan}
                onChange={handleChange}
                placeholder="Tulis pertanyaan Anda seputar promo ini..."
                className="min-h-[100px]"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-red-500 hover:bg-red-600"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-4 w-4" />
                  Mengirim...
                </>
              ) : (
                "Kirim Pertanyaan"
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
