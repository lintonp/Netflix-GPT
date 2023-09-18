import React from "react";
import { useSelector } from "react-redux";
import VideoList from "./VideoList";
import VideoListShimmerUI from "./ShimmerUI/VideoListShimmerUI";

const GPTResults = ({ title }) => {
  const movies = useSelector((store) => store.gpt.searchResults);
  const shimmer = useSelector((store) => store.gpt.searching);
  console.log(title);
  if (!movies) return;

  return (
    <div className="absolute z-10 mt-[80%] md:mt-[270px] mx-auto left-0 right-0">
      <div className="mx-6 bg-black bg-opacity-80 md:p-6">
        {shimmer ? (
          <VideoListShimmerUI title={title} />
        ) : (
          <VideoList title={title} movies={movies} />
        )}
      </div>
    </div>
  );
};

export default GPTResults;
