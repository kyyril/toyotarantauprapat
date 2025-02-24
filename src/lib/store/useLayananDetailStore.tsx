import { create } from "zustand";
import { layanan } from "@/lib/interfaces/data.interface";
import { fetchLayananDetail } from "@/lib/utils/fetcher";

interface LayananDetailStore {
  layananCache: Record<string, layanan>; // Cache berdasarkan slug
  isLoading: boolean;
  error: boolean;
  fetchLayananDetail: (slug: string) => Promise<void>;
}

export const useLayananDetailStore = create<LayananDetailStore>((set) => ({
  layananCache: {},
  isLoading: false,
  error: false,
  fetchLayananDetail: async (slug) => {
    set({ isLoading: true, error: false });
    try {
      const data = await fetchLayananDetail(slug);
      set((state) => ({
        layananCache: { ...state.layananCache, [slug]: data }, // Cache berdasarkan slug
        isLoading: false,
      }));
    } catch (error) {
      console.error("Error fetching layanan details:", error);
      set({ error: true, isLoading: false });
    }
  },
}));
