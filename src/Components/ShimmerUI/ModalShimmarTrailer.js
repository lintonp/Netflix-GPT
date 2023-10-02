import React from "react";
import loadingGif from "../../Utils/Images/LoadingGif.gif";

const ModalShimmarTrailer = () => {
  return (
    <div className="w-72 md:w-[440px]">
      <img
        className="my-auto top-0 bottom-0"
        alt="loading GIF"
        src={loadingGif}
      />
    </div>
  );
};

export default ModalShimmarTrailer;
