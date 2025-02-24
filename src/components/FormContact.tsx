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
const idLeadsPost = process.env.NEXT_PUBLIC_SPREAD_POST_LEADS;
const scriptUrl = `https://script.google.com/macros/s/${idLeadsPost}/exec`;

export default function ContactDialog() {
  const [form, setForm] = useState({
    nama: "",
    nomorHp: "",
    kategori: "",
    pesan: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [wasInteracted, setWasInteracted] = useState(false);

  const sendAbandonedForm = async () => {
    if (
      wasInteracted &&
      (form.nama || form.nomorHp || form.kategori || form.pesan)
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
    setForm({ ...form, kategori: value });
  };

  useEffect(() => {
    return () => {
      sendAbandonedForm();
    };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nama || !form.nomorHp || !form.kategori || !form.pesan) {
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
          status: "Submitted",
          timestamp: new Date().toISOString(),
        }),
      });

      const waMessage = `Halo, saya ${form.nama}.%0AJenis Pertanyaan: ${form.kategori}%0APesan: ${form.pesan}`;
      const waUrl = `https://wa.me/62811612535?text=${waMessage}`;
      window.open(waUrl, "_blank");
      setForm({ nama: "", nomorHp: "", kategori: "", pesan: "" });
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
          <Button
            variant={"outline"}
            className="backdrop-blur-lg bg-background/30 rounded-xl py-5 mb-10 px-3 shadow-lg size-lg"
          >
            <MessageSquare className="text-red-500" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Hubungi Kami</DialogTitle>
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
              <Label htmlFor="kategori">Kategori Pertanyaan</Label>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Kategori Pertanyaan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Terkait Penjualan">
                    Terkait Penjualan
                  </SelectItem>
                  <SelectItem value="Terkait Service">
                    Terkait Service
                  </SelectItem>
                  <SelectItem value="Terkait Produk">Terkait Produk</SelectItem>
                  <SelectItem value="Pertanyaan Umum">
                    Pertanyaan Umum
                  </SelectItem>
                  <SelectItem value="Komplain Customer">
                    Komplain Customer
                  </SelectItem>
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
                placeholder="Tulis pesan Anda..."
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? <Loader2 className="animate-spin mr-2" /> : "Kirim"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
