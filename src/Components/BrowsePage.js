import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { Outlet } from "react-router-dom";

const BrowsePage = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div className="flex flex-col bg-gray-700 h-screen">
      <Header />
      {/* {gpt ? <Body /> : <GPTpage />} */}
      <Outlet />
    </div>
  );
};

export default BrowsePage;
