import VideoTrailer from "./VideoTrailer";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) return;

  console.log("Video Container", movies);
  const { id, original_title, overview } = movies?.results[4];
  console.log(original_title, overview);
  return (
    <div className="relative">
      <VideoTrailer id={id} />
      <VideoTitle title={original_title} description={overview} />
    </div>
  );
};

export default VideoContainer;
