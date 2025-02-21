import { create } from "zustand";
import { fetchMobil } from "@/lib/utils/fetcher";
import { Mobil } from "../interfaces/mobil.interface";

interface MobilStore {
  cars: Mobil[];
  isLoading: boolean;
  fetchCars: () => Promise<void>;
}

export const useMobilStore = create<MobilStore>((set) => ({
  cars: [],
  isLoading: true,
  fetchCars: async () => {
    try {
      const data = await fetchMobil();
      set({ cars: data, isLoading: false });
    } catch (error) {
      console.error("Error fetching cars:", error);
      set({ isLoading: false });
    }
  },
}));
