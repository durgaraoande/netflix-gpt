import React, { useState } from "react";
import useAllTrailers from "../hooks/useAllTrailers";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useAllTrailers(movieId);
  const trailer = useSelector((store) => store?.video?.videoTrailers);
  const [isMuted, setIsMuted] = useState(true);

  if (!trailer) return null;

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="w-screen relative">
      <iframe
        className="w-screen h-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <button
        onClick={toggleMute }
        className="absolute top-4 right-4 bg-gray-800 text-white px-4 mt-96 py-2 rounded"
      >
        {isMuted ? "Unmute" : "Mute"}
      </button>
    </div>
  );
};

export default VideoBackground;