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
  gallery: any;
}

export interface layanan {
  id: string;
  title: string;
  thumbnail: string;
  desk_awal: string;
  deskripsi: string;
  gallery: string;
  poin_poin: string;
}

interface ProsesPembayaran {
  id: number;
  nama: string;
  deskripsi: string;
}

export interface Data {
  prosespembayaran: ProsesPembayaran[];
}
