import { create } from "zustand";

import { fetchLayanan } from "@/lib/utils/fetcher";
import { layanan } from "../interfaces/data.interface";

interface LayananStore {
  layananList: layanan[] | any;
  isLoading: boolean;
  fetchLayanan: () => Promise<void>;
}

export const useLayananStore = create<LayananStore>((set) => ({
  layananList: [],
  isLoading: true,
  fetchLayanan: async () => {
    try {
      const data = await fetchLayanan();
      set({ layananList: data, isLoading: false });
    } catch (error) {
      console.error("Error fetching layanan:", error);
      set({ isLoading: false });
    }
  },
}));
