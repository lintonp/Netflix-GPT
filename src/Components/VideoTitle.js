import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="mx-12 mt-48 p-8 absolute w-1/3 bg-black bg-opacity-5 rounded-lg hover:bg-opacity-50">
      <h1 className="text-4xl font-extrabold text-white">{title}</h1>
      <p className="text-lg text-white">{description}</p>
      <div className="my-4">
        <button className="px-8 py-2 text-xl font-bold mx-2 rounded-lg bg-white text-black hover:opacity-80">
          Play
        </button>
        <button className="px-8 py-2 text-xl font-bold mx-2 rounded-lg bg-slate-400 text-white opacity-90 hover:opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
  // return (
  //   <div className="mx-12 mt-96 p-2 absolute bg-black bg-opacity-5">
  //     <h1 className="text-4xl font-extrabold">{title}</h1>
  //     <p className="text-lg w-1/3">{description}</p>
  //     <div className="my-2">
  //       <button className="px-8 py-2 text-xl font-semibold mx-2 rounded-lg bg-black text-white hover:bg-slate-900">
  //         Play
  //       </button>
  //       <button className="px-8 py-2 text-xl mx-2 rounded-lg bg-slate-400 text-black opacity-90 hover:opacity-80">
  //         More Info
  //       </button>
  //     </div>
  //   </div>
  // );
};
// bg-gradient-to-r from-slate-200
export default VideoTitle;
