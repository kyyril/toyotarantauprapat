export interface Promo {
  id: number;
  nama: string;
  mulai: string;
  akhir: string;
  gambar: string;
  deskripsi: string;
  sub_judul: string;
  hashtag: string;
}
export interface Sales {
  id: number;
  nama: string;
  profile: string;
  nohp: string;
  deskripsi: string;
  gallery: any;
}
export interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
  link: string;
  date: string;
  profileImage?: string;
}
export interface layanan {
  id: string;
  title: string;
  thumbnail: string;
  desk_awal: string;
  deskripsi: string;
  gallery: string;
  point: string;
  keunggulan: string;
  kemudahan: string;
  langkah_langkah: string;
}

interface ProsesPembayaran {
  id: number;
  nama: string;
  deskripsi: string;
}

export interface Data {
  prosespembayaran: ProsesPembayaran[];
}
