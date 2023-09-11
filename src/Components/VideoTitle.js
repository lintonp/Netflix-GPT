import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="mx-12 mt-24 p-2">
      <h1>{title}</h1>
      <p>{overview}</p>
      <div className="my-2">
        <button className="px-8 py-2 text-xl mx-2 rounded-lg bg-white font-black">
          Play
        </button>
        <button className="px-8 py-2 text-xl mx-2 rounded-lg bg-white font-black">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
