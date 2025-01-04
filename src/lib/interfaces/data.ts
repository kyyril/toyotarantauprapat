export interface Produk {
  id: number;
  nama: string;
  harga: number;
  gambar: string;
  deskripsi: string;
}

export interface Data {
  produk: Produk[];
}
