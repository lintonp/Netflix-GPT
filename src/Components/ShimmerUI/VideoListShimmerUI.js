import VideoCardShimmerUI from "./VideoCardShimmerUI";

const VideoListShimmerUI = ({ title }) => {
  return (
    <div className="px-2 py-3 md:p-4 md:mx-2">
      <h1 className="text-xl md:text-2xl font-bold text-white m-1">{title}</h1>
      <div className="flex overflow-x-auto scroll-smooth">
        <VideoCardShimmerUI />
        <VideoCardShimmerUI />
        <VideoCardShimmerUI />
        <VideoCardShimmerUI />
        <VideoCardShimmerUI />
        <VideoCardShimmerUI />
        <VideoCardShimmerUI />
        <VideoCardShimmerUI />
        <VideoCardShimmerUI />
      </div>
    </div>
  );
};

export default VideoListShimmerUI;
