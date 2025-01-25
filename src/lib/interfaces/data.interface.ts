export interface Promo {
  id: number;
  nama: string;
  mulai: string;
  akhir: string;
  gambar: string;
  deskripsi: string;
}
export interface Sales {
  id: number;
  nama: string;
  profile: string;
  nohp: string;
  deskripsi: string;
  gallery: string;
}

interface ProsesPembayaran {
  id: number;
  nama: string;
  deskripsi: string;
}

export interface Data {
  prosespembayaran: ProsesPembayaran[];
}
