import React from "react";
import { Movie_Poster_URL } from "../Utils/Constants";

const VideoCard = ({ movie }) => {
  return (
    <img
      className="w-28 md:w-32 mr-2"
      alt={movie.original_title}
      src={Movie_Poster_URL + movie.poster_path}
    />
  );
};

export default VideoCard;
