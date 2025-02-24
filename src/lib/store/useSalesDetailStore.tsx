import { create } from "zustand";
import { Sales } from "@/lib/interfaces/data.interface";
import { fetchSalesDetail } from "@/lib/utils/fetcher";

interface SalesDetailStore {
  sales: Record<string, Sales>; // Cache berdasarkan slug
  isLoading: boolean;
  error: boolean;
  fetchSalesDetail: (slug: string) => Promise<void>;
}

export const useSalesDetailStore = create<SalesDetailStore>((set) => ({
  sales: {},
  isLoading: false,
  error: false,
  fetchSalesDetail: async (slug) => {
    set({ isLoading: true, error: false });
    try {
      const data = await fetchSalesDetail(slug);
      set((state) => ({
        sales: { ...state.sales, [slug]: data }, // Cache data berdasarkan slug
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching sales details:", error);
      set({ error: true, isLoading: false });
    }
  },
}));
