import VideoTrailer from "./VideoTrailer";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) return;

  const { id, original_title, overview } = movies?.results[1];
  console.log(id);
  return (
    <div className="">
      <VideoTrailer id={id} />
      <VideoTitle title={original_title} description={overview} />
    </div>
  );
};

export default VideoContainer;
