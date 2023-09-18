import { useState } from "react";
import { Netflix_BG_Image_URL } from "../Utils/Constants";
import GPTResults from "./GPTResults";
import GPTSearch from "./GPTSearch";

const GPTpage = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <img
        className="fixed h-screen object-cover md:w-screen"
        alt="Background"
        src={Netflix_BG_Image_URL}
      />
      <GPTSearch setTitle={setSearchText} />
      <GPTResults title={searchText} />
    </div>
  );
};

export default GPTpage;
