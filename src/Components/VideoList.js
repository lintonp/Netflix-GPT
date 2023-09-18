import VideoCard from "./VideoCard";

const VideoList = ({ title, movies }) => {
  return (
    <div className="px-2 py-3 md:p-4 md:mx-2">
      <h1 className="text-xl md:text-2xl font-bold text-white m-1">{title}</h1>
      <div className="flex overflow-x-auto scroll-smooth">
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
