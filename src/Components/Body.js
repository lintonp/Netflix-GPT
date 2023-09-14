import VideoContainer from "./VideoContainer";
import VideoListContainer from "./VideoListContainer";

const Body = () => {
  return (
    <div className="w-screen flex flex-col">
      <VideoContainer />
      <VideoListContainer />
    </div>
  );
};

export default Body;
