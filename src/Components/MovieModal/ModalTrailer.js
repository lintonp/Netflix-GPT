import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import ModalShimmarTrailer from "../ShimmerUI/ModalShimmarTrailer";

const ModalTrailer = ({ id }) => {
  const movie = useSelector((store) => store.movies.modalMovie);
  useMovieTrailer(id, false);

  if (!movie) return <ModalShimmarTrailer />;

  return (
    <div className="relative ml-1 md:-ml-1">
      <iframe
        className="w-72 md:w-[440px] aspect-video"
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

export default ModalTrailer;
