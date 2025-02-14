"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchGallery } from "@/lib/utils/fetcher";

const TestimoniCard = () => {
  const [testimonials, setTestimonials] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const response = await fetchGallery();
        if (response) {
          setTestimonials(response);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    getTestimonials();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Testimoni</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Card
                key={index}
                className="shadow-lg rounded-lg overflow-hidden"
              >
                <CardContent className="p-2 flex justify-center items-center">
                  <Skeleton className="w-full h-[200px] md:h-[240px] lg:h-[320px] rounded-lg animate-pulse" />
                </CardContent>
              </Card>
            ))
          : testimonials.map((imageUrl, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card
                    className="shadow-lg rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(imageUrl)}
                  >
                    <CardContent className="p-2 flex justify-center items-center">
                      <img
                        src={imageUrl}
                        alt={`Testimoni ${index + 1}`}
                        className="w-full h-[200px] md:h-[240px] lg:h-[320px] object-cover rounded-lg transition-transform transform hover:scale-105"
                      />
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <img
                    src={selectedImage || ""}
                    alt="Preview"
                    className="w-full h-auto rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            ))}
      </div>
    </div>
  );
};

export default TestimoniCard;
