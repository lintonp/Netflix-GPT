import React, { useState } from "react";
import { Movie_Poster_URL } from "../Utils/Constants";
import Modal from "./MovieModal/Modal";

const VideoCard = ({ movie }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOnClick = () => {
    openModal();
  };

  return (
    <>
      <img
        className="w-28 md:w-32 mr-2 cursor-pointer hover:border-2 border-red-700 hover:shadow-lg hover:shadow-red-700"
        alt={movie.original_title}
        src={Movie_Poster_URL + movie.poster_path}
        onClick={handleOnClick}
      />
      {isModalOpen && (
        <Modal isOpen={isModalOpen} closeModal={closeModal} movie={movie} />
      )}
    </>
  );
};

export default VideoCard;
