import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

function GallerySales({ gallery }: { gallery: string }) {
  const images = gallery.split(",");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Gallery</h3>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger onClick={() => setSelectedImage(image.trim())}>
              <Card className="cursor-pointer overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={image.trim()}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-32 object-cover"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="p-2">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Full Image"
                  className="w-full h-auto rounded-lg"
                />
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}

export default GallerySales;
