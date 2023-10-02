import VideoContainer from "./VideoContainer";
import VideoListContainer from "./VideoListContainer";

const Body = () => {
  return (
    <div className="flex flex-col">
      <VideoContainer />
      <VideoListContainer />
    </div>
  );
};

export default Body;
