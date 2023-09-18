import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="mx-1 md:mx-12 mt-16 md:mt-48 p-8 absolute w-1/3 rounded-lg hover:bg-opacity-50">
      <h1 className="text-2xl md:text-4xl font-extrabold text-white">
        {title}
      </h1>
      <p className="hidden md:inline-block text-lg text-white">{description}</p>
      <div className="my-1 md:my-4">
        <button className="p-2 md:px-8 md:py-2 text-sm md:text-xl font-bold md:font-extrabold mx-2 rounded-lg bg-white text-black hover:opacity-80">
          Play
        </button>
        <button className="hidden md:inline-block px-8 py-2 text-xl mx-2 rounded-lg bg-slate-400 text-white opacity-90 hover:opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
