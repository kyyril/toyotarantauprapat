"use client";

import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchGallery } from "@/lib/utils/fetcher";
import { Card, CardContent } from "../ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const GalleryCard: React.FC = () => {
  const [testimonials, setTestimonials] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const response = await fetchGallery();
        setTestimonials(response);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    getTestimonials();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Gallery Customer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Card
                key={index}
                className="shadow-lg rounded-lg overflow-hidden"
              >
                <CardContent className="p-2 flex justify-center items-center">
                  <Skeleton className="w-full h-[180px] md:h-[220px] lg:h-[280px] rounded-lg animate-pulse" />
                </CardContent>
              </Card>
            ))
          : testimonials.map((imageUrl, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="cursor-pointer">
                    <Card className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
                      <CardContent className="p-2 flex justify-center items-center">
                        <img
                          src={imageUrl}
                          alt={`Testimoni ${index + 1}`}
                          className="w-full h-[180px] md:h-[220px] lg:h-[280px] object-cover rounded-lg transition-transform transform hover:scale-105"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-4">
                  <img
                    src={imageUrl}
                    alt="Preview"
                    className="w-full max-w-full h-auto rounded-lg shadow-lg"
                  />
                </DialogContent>
              </Dialog>
            ))}
      </div>
    </div>
  );
};

export default GalleryCard;
