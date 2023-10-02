import React, { useState } from "react";
import Modal from "./MovieModal/Modal";
import playIcon from "../Utils/Images/play.png";

const VideoTitle = ({ movie }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { original_title, overview } = movie;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOnClick = () => {
    openModal();
  };

  return (
    <div className="mx-1 md:mx-12 mt-16 md:mt-48 p-8 absolute w-1/3 rounded-lg hover:bg-opacity-50">
      <h1 className="text-2xl md:text-4xl font-extrabold text-white">
        {original_title}
      </h1>
      <p className="hidden md:inline-block text-lg text-white">{overview}</p>
      <div className="flex my-1 md:my-4">
        <button className="hidden md:flex p-2 md:px-8 md:py-2 text-sm md:text-xl font-bold md:font-extrabold mx-2 rounded-lg bg-white text-black hover:opacity-80">
          <img alt="play" src={playIcon} className="w-8 -ml-3" />
          Play
        </button>
        <button
          onClick={handleOnClick}
          className="hidden md:inline-block px-8 py-2 text-xl mx-2 rounded-lg bg-slate-400 text-white opacity-90 hover:bg-slate-500 hover:bg-opacity-80"
        >
          More Info
        </button>
        {isModalOpen && (
          <Modal isOpen={isModalOpen} closeModal={closeModal} movie={movie} />
        )}
      </div>
    </div>
  );
};

export default VideoTitle;
