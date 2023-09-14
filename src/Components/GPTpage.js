import React, { useRef } from "react";
import { Netflix_BG_Image_URL } from "../Utils/Constants";

const GPTpage = () => {
  const search = useRef();
  return (
    <div>
      <img className="absolute" alt="Background" src={Netflix_BG_Image_URL} />
      <form
        className="absolute bg-black text-white mx-auto left-0 right-0 mt-72 w-1/2 rounded-lg grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={search}
          type="text"
          className="p-2 my-2 ml-3 mr-2 text-black col-span-9"
          placeholder="What are you looking for?"
        />
        <button className="bg-red-600 p-2 rounded-md font-bold text-lg col-span-3 mr-2 my-2">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTpage;
