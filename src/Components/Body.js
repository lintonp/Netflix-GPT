import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";

const Body = () => {
  const user = useSelector((store) => store.state);
  console.log(user);
  return (
    <div className="">
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
