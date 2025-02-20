import axios from "axios";
import { Mobil } from "../interfaces/mobil.interface";
import { layanan } from "../interfaces/data.interface";

export const idSpead = process.env.NEXT_PUBLIC_SPREAD_MOBIL_ID;

export const fetchMobil = async () => {
  try {
    const data = await axios.get(
      `https://script.google.com/macros/s/${idSpead}/exec?action=mobil`
    );
    return (
      data?.data.map((mobil: any) => ({
        ...mobil,
        kategori: mobil.kategori.split(",").map((t: string) => t.trim()), // Convert 'type' string to list
      })) || []
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export async function fetchMobilDetail(slug: string): Promise<Mobil | null> {
  try {
    const response = await axios.get(
      `https://script.google.com/macros/s/${idSpead}/exec?action=mobil&nama=${slug}`
    );
    return await response.data;
  } catch (error) {
    console.error("Error fetching mobil detail:", error);
    return null;
  }
}
export async function fetchDeskripsi(nama: string): Promise<Mobil | null> {
  try {
    const response = await axios.get(
      `https://script.google.com/macros/s/${idSpead}/exec?action=deskripsiMobil&nama=${nama}`
    );
    return await response.data;
  } catch (error) {
    console.error("Error fetching mobil detail:", error);
    return null;
  }
}

// promo
export async function fetchPromo() {
  try {
    const response = await axios.get(
      `https://script.google.com/macros/s/${idSpead}/exec?action=promo`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching promo:", error);
    throw error;
  }
}

export async function fetchPromoDetail(idPromo: any) {
  try {
    const response = await axios.get(
      `https://script.google.com/macros/s/${idSpead}/exec?action=promo&id_promo=${idPromo}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching promo detail:", error);
    throw error;
  }
}

//salesss
export async function fetchSales() {
  try {
    const response = await axios.get(
      `https://script.google.com/macros/s/${idSpead}/exec?action=sales`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching promo detail:", error);
    throw error;
  }
}

export async function fetchSalesDetail(idSales: any) {
  try {
    const response = await axios.get(
      `https://script.google.com/macros/s/${idSpead}/exec?action=sales&id_sales=${idSales}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching promo detail:", error);
    throw error;
  }
}

// layanan
export async function fetchLayanan() {
  try {
    const response = await axios.get(
      `https://script.google.com/macros/s/${idSpead}/exec?action=layanan`
    );
    return response.data as layanan;
  } catch (error) {
    console.error("Error fetching promo detail:", error);
    throw error;
  }
}

export async function fetchLayananDetail(idLayanan: string) {
  try {
    const response = await axios.get(
      `https://script.google.com/macros/s/${idSpead}/exec?action=layanan&id_layanan=${idLayanan}&fields=title,gallery,desk_awal,deskripsi,point,keunggulan,kemudahan,langkah_langkah,`
    );
    return response.data as layanan;
  } catch (error) {
    console.error("Error fetching promo detail:", error);
    throw error;
  }
}

//gallery
export async function fetchGallery() {
  try {
    const response = await axios.get(
      `https://script.google.com/macros/s/${idSpead}/exec?action=gallery`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching promo detail:", error);
    throw error;
  }
}

//review
export async function fetchReview() {
  try {
    const response = await axios.get(
      `https://script.google.com/macros/s/${idSpead}/exec?action=review`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching promo detail:", error);
    throw error;
  }
}
