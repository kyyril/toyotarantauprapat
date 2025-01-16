export interface Mobil {
  id: number;
  nama: string;
  harga: number;
  gambar: string;
  type: string[];
}

export interface DetailMobil {
  id: number;
  deskripsi: string;
  type: string[];
  harga: string[];
  mesin: string;
  torsi_max: number;
}
