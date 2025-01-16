import axios from "axios";

export const idMobil = process.env.NEXT_PUBLIC_SPREAD_MOBIL_ID;

export const fetchMobil = async () => {
  try {
    const data = await axios.get(
      `https://script.google.com/macros/s/${idMobil}/exec`
    );
    return (
      data?.data.map((mobil: any) => ({
        ...mobil,
        type: mobil.type.split(",").map((t: string) => t.trim()), // Convert 'type' string to list
      })) || []
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
