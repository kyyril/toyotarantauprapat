import { create } from "zustand";
import { fetchPromoDetail } from "@/lib/utils/fetcher";

interface Promo {
  id: string;
  title: string;
  description: string;
  // Tambahkan field lain sesuai API response
}

interface PromoDetailStore {
  promoCache: Record<string, Promo>;
  isLoading: boolean;
  error: boolean;
  fetchPromoDetail: (id: string) => Promise<void>;
}

export const usePromoDetailStore = create<PromoDetailStore>((set) => ({
  promoCache: {},
  isLoading: false,
  error: false,
  fetchPromoDetail: async (id) => {
    set({ isLoading: true, error: false });

    try {
      const data = await fetchPromoDetail(id);
      set((state) => ({
        promoCache: { ...state.promoCache, [id]: data }, // Cache berdasarkan ID promo
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching promo details:", error);
      set({ error: true, isLoading: false });
    }
  },
}));
