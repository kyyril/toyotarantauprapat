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
  id: number;
  nama: string;
  thumbnail: string;
  desk_awal: string;
}

interface ProsesPembayaran {
  id: number;
  nama: string;
  deskripsi: string;
}

export interface Data {
  prosespembayaran: ProsesPembayaran[];
}
