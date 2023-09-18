import React from "react";
import loadingGif from "../../Utils/Images/LoadingGif.gif";

const VideoCardShimmerUI = () => {
  return (
    <div className="w-20 h-36 md:w-32 mr-2 bg-black inline-flex items-center justify-center">
      <img
        className="my-auto top-0 bottom-0"
        alt="loading GIF"
        src={loadingGif}
      />
    </div>
  );
};

export default VideoCardShimmerUI;
