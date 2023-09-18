import { Netflix_BG_Image_URL } from "../Utils/Constants";
import GPTResults from "./GPTResults";
import GPTSearch from "./GPTSearch";

const GPTpage = () => {
  return (
    <div>
      <img
        className="fixed h-screen object-cover md:w-screen"
        alt="Background"
        src={Netflix_BG_Image_URL}
      />
      <GPTSearch />
      <GPTResults />
    </div>
  );
};

export default GPTpage;
