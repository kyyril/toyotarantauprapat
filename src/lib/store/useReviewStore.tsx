import { create } from "zustand";
import { Review } from "@/lib/interfaces/data.interface";
import { fetchReview } from "@/lib/utils/fetcher";

interface ReviewStore {
  reviews: Review[];
  loading: boolean;
  fetchReviews: () => Promise<void>;
}

export const useReviewStore = create<ReviewStore>((set) => ({
  reviews: [],
  loading: true,
  fetchReviews: async () => {
    try {
      const response = await fetchReview();
      set({ reviews: response, loading: false });
    } catch (error) {
      console.error("Error fetching reviews:", error);
      set({ loading: false });
    }
  },
}));
