export interface Promo {
  id: number;
  utama: string;
  nama: string;
  mulai: string;
  akhir: string;
  gambar: string;
  detail: string[];
}

interface ProsesPembayaran {
  id: number;
  nama: string;
  deskripsi: string;
}

export interface Data {
  promo: Promo[];
  prosespembayaran: ProsesPembayaran[];
}
