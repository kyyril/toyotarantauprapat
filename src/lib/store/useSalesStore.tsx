import { create } from "zustand";
import { Sales } from "@/lib/interfaces/data.interface";
import { fetchSales } from "@/lib/utils/fetcher";

interface SalesStore {
  sales: Sales[];
  isLoading: boolean;
  fetchSales: () => Promise<void>;
}

export const useSalesStore = create<SalesStore>((set) => ({
  sales: [],
  isLoading: true,
  fetchSales: async () => {
    try {
      const data = await fetchSales();
      set({ sales: data, isLoading: false });
    } catch (error) {
      console.error("Error fetching sales:", error);
      set({ isLoading: false });
    }
  },
}));
