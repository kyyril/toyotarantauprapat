import { create } from "zustand";
import { Promo } from "@/lib/interfaces/data.interface";
import { fetchPromo } from "@/lib/utils/fetcher";

interface PromoState {
  promos: Promo[];
  isLoading: boolean;
  fetchPromos: () => Promise<void>;
}

export const usePromoStore = create<PromoState>((set) => ({
  promos: [],
  isLoading: true,
  fetchPromos: async () => {
    try {
      const data = await fetchPromo();
      const sortedPromos = data.sort(
        (a: any, b: any) =>
          new Date(b.mulai).getTime() - new Date(a.mulai).getTime()
      );
      set({ promos: sortedPromos, isLoading: false });
    } catch (error) {
      console.error("Error fetching promo:", error);
      set({ isLoading: false });
    }
  },
}));
