import VideoTrailer from "./VideoTrailer";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) return;

  const movie = movies?.results[0];

  return (
    <div className="">
      <VideoTrailer id={movie.id} />
      <VideoTitle movie={movie} />
    </div>
  );
};

export default VideoContainer;
