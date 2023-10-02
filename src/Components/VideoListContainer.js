import React from "react";
import { useSelector } from "react-redux";
import VideoList from "./VideoList";

const VideoListContainer = () => {
  // const nowPlayingMovies = useSelector(
  //   (store) => store.movies.nowPlayingMovies
  // );
  const { nowPlayingMovies, popularMovies, topRatedMovies } = useSelector(
    (store) => store.movies
  );

  return (
    <div className="relative md:absolute top-[27%] md:top-[123%] bg-black md:pl-4 bg-opacity-70 md:bg-opacity-100">
      {nowPlayingMovies && (
        <VideoList title="Now Playing" movies={nowPlayingMovies?.results} />
      )}
      {topRatedMovies && (
        <VideoList title="Top Rated" movies={topRatedMovies?.results} />
      )}
      {popularMovies && (
        <VideoList title="Popular" movies={popularMovies?.results} />
      )}
    </div>
  );
};

export default VideoListContainer;
