export interface Produk {
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

export interface Data {
  produk: Produk[];
  promo: Promo[];
}
