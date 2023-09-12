import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoTrailer = ({ id }) => {
  const movie = useSelector((store) => store.movies.displayMovie);
  useMovieTrailer(id);

  if (!movie) return;

  return (
    <div className="relative mt-12">
      <iframe
        className="absolute  w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" + movie.key + "?autoplay=1?vq=hd720p"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoTrailer;
