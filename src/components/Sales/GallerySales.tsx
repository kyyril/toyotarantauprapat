import React from "react";

function GallerySales({ gallery }: { gallery: string }) {
  const images = gallery.split(",");

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Gallery</h3>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.trim()}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-32 object-cover rounded-lg shadow-sm"
          />
        ))}
      </div>
    </div>
  );
}

export default GallerySales;
