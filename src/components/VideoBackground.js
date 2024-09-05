import React from "react";
import useAllTrailers from "../hooks/useAllTrailers";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useAllTrailers(movieId);
  const trailer = useSelector((store) => store?.video?.videoTrailers);
  if (!trailer) return;

  return (
    <div className="w-screen">
      <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailer.key+"?autoplay=1&mute=1&controls=0&loop=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
