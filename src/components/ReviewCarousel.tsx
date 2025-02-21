"use client";
import { useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { Star, ExternalLink, User } from "lucide-react";

import { useReviewStore } from "@/lib/store/useReviewStore";

const ReviewSkeleton = () => (
  <div className="flex space-x-4">
    {[1, 2, 3, 4].map((i) => (
      <Card key={i} className="w-[320px] flex-shrink-0">
        <CardHeader className="space-y-2">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-1">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const ReviewCarousel = () => {
  const { reviews, loading, fetchReviews } = useReviewStore();

  useEffect(() => {
    if (reviews.length === 0) {
      fetchReviews();
    }
  }, [reviews, fetchReviews]);

  return (
    <section className="w-full py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Ulasan Pelanggan</h2>
        <ScrollArea className="w-full">
          <div className="flex space-x-4 pb-1">
            {loading ? (
              <ReviewSkeleton />
            ) : (
              reviews.map((review, index) => (
                <Card
                  key={index}
                  className="w-[320px] flex-shrink-0 hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="space-y-2">
                    <div className="flex items-center space-x-3">
                      {review.profileImage ? (
                        <img
                          loading="lazy"
                          src={review.profileImage}
                          alt={review.name}
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                          <User className="w-6 h-6 text-muted-foreground" />
                        </div>
                      )}
                      <div>
                        <h3 className="font-semibold">{review.name}</h3>
                        <div className="flex items-center">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-600 line-clamp-3">
                      "{review.review}"
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-gray-400">
                        {review.date}
                      </span>
                      <a
                        href={review.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-xs text-red-500 hover:underline"
                      >
                        Lihat Review
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default ReviewCarousel;
