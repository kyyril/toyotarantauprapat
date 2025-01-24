import React from "react";

interface YouTubePlayerProps {
  video: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ video }) => {
  return (
    <div className="youtube-container">
      <iframe
        width="560"
        height="315"
        src={video}
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
