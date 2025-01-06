export interface Mobil {
  id: number;
  nama: string;
  harga: number;
  gambar: string;
  deskripsi: string;
}

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
  mobil: Mobil[];
  promo: Promo[];
  prosespembayaran: ProsesPembayaran[];
}
