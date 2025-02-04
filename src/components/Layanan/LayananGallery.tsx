"use client";

interface GalleryProps {
  images: string[];
}

export default function LayananGallery({ images }: GalleryProps) {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-md">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-40 object-cover transition-transform transform hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
