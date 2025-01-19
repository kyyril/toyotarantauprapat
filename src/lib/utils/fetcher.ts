import axios from "axios";
import { Mobil } from "../interfaces/mobil.interface";

export const idSpead = process.env.NEXT_PUBLIC_SPREAD_MOBIL_ID;

export const fetchMobil = async () => {
  try {
    const data = await axios.get(
      `https://script.google.com/macros/s/${idSpead}/exec`
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
    const response = await fetch(
      `https://script.google.com/macros/s/${idSpead}/exec?action=mobil&nama=${slug}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch detail: ${response.statusText}`);
    }
    return await response.json();
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
