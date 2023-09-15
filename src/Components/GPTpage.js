import React, { useRef } from "react";
import { Netflix_BG_Image_URL } from "../Utils/Constants";
import { useSelector } from "react-redux";
import { languageData } from "../Utils/Languages";

const GPTpage = () => {
  const search = useRef();
  const code = useSelector((store) => store.configs.langCode);

  return (
    <div>
      <img className="absolute" alt="Background" src={Netflix_BG_Image_URL} />
      <form
        className="absolute bg-black bg-opacity-80 text-white mx-auto left-0 right-0 mt-40 w-1/2 rounded-lg grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={search}
          type="text"
          className="p-2 my-2 ml-3 mr-2 text-black col-span-9 rounded-lg"
          placeholder={languageData[code].placeholder}
        />
        <button className="bg-red-600 p-2 rounded-md font-bold text-lg col-span-3 mr-2 my-2">
          {languageData[code].search}
        </button>
      </form>
    </div>
  );
};

export default GPTpage;
