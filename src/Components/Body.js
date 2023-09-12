import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";

const Body = () => {
  const user = useSelector((store) => store.user);
  console.log("Body", user);
  return (
    <div className="w-screen">
      <VideoContainer />
      {/* 
      Video Container
        -Video in background
        -Video Title
      Videos list Container
        -now playing
        -top
        -genres
    */}
    </div>
  );
};

export default Body;
