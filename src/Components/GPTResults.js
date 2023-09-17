import React from "react";
import { useSelector } from "react-redux";
import VideoList from "./VideoList";

const GPTResults = () => {
  const movies = useSelector((store) => store.gpt.searchResults);

  if (!movies) return;

  return (
    <div className="absolute z-10 mt-56 mx-auto left-0 right-0">
      <div className="mx-6  bg-black bg-opacity-80 p-6">
        <VideoList title="Results" movies={movies} />
      </div>
    </div>
  );
};

export default GPTResults;
