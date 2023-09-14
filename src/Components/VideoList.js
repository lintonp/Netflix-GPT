import VideoCard from "./VideoCard";

const VideoList = ({ title, movies }) => {
  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold text-white m-1">{title}</h1>
      <div className="flex overflow-x-auto">
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
