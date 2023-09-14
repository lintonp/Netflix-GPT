import Header from "./Header";
import Body from "./Body";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const BrowsePage = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div className="flex flex-col bg-gray-700 h-screen">
      <Header />
      <Body />
    </div>
  );
};

export default BrowsePage;
