import Header from "./Header";
import Body from "./Body";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { useSelector } from "react-redux";
import GPTpage from "./GPTpage";

const BrowsePage = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  const gpt = useSelector((store) => store.gpt.showGPT);

  return (
    <div className="flex flex-col bg-gray-700 h-screen">
      <Header />
      {gpt ? <Body /> : <GPTpage />}
    </div>
  );
};

export default BrowsePage;
