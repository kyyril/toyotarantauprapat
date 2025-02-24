import { create } from "zustand";
import { Mobil } from "@/lib/interfaces/mobil.interface";
import { fetchMobilDetail } from "@/lib/utils/fetcher";

interface CarDetailStore {
  cars: Record<string, Mobil>; // Cache berdasarkan slug
  isLoading: boolean;
  error: boolean;
  fetchCarDetail: (slug: any) => Promise<void>;
}

export const useCarDetailStore = create<CarDetailStore>((set) => ({
  cars: {},
  isLoading: false,
  error: false,
  fetchCarDetail: async (slug) => {
    set({ isLoading: true, error: false });
    try {
      const data = await fetchMobilDetail(slug);
      set((state) => ({
        cars: { ...state.cars, [slug]: data }, // Cache berdasarkan slug
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching car details:", error);
      set({ error: true, isLoading: false });
    }
  },
}));
