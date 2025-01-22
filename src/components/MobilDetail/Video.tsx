import React from "react";

interface YouTubePlayerProps {
  video: string; // ID video YouTube
  title?: string; // Opsional: Judul video untuk atribut alt dan aksesibilitas
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ video }) => {
  return (
    <div className="youtube-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/pxF1N6HVTIg?si=tpvmIaul3PjyOagz"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;
