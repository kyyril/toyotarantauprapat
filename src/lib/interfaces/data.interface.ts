export interface Promo {
  id: number;
  nama: string;
  mulai: string;
  akhir: string;
  gambar: string;
  deskripsi: string;
}

interface ProsesPembayaran {
  id: number;
  nama: string;
  deskripsi: string;
}

export interface Data {
  prosespembayaran: ProsesPembayaran[];
}
