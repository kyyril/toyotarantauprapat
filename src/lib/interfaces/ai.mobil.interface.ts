export interface RekomendasiMobil {
  nama_mobil: string;
  kategori: string;
  tipe: string;
  transmisi: string;
  bahan_bakar: string;
  alasan: string;
  image_url: string;
}

export interface RekomendasiResponse {
  rekomendasi: RekomendasiMobil[];
}
