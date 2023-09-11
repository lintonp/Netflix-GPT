import VideoTrailer from "./VideoTrailer";
import VideoTitle from "./VideoTitle";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const { id, original_title, overview } = movies?.results[0];

  useMovieTrailer(id);

  return (
    <div>
      <VideoTrailer id={id} />
      <VideoTitle title={original_title} description={overview} />
    </div>
  );
};

export default VideoContainer;
