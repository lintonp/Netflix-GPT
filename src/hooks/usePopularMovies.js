import { PopularMovies_API, TMDB_Options } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Store/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getMoviesData = async () => {
    const data = await fetch(PopularMovies_API, TMDB_Options);
    const json = await data.json();
    dispatch(addPopularMovies(json));
  };

  useEffect(() => {
    getMoviesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default usePopularMovies;

// const usePopularMovies = () => {
//   return (
//     <div>usePopularMovies</div>
//   )
// }

// export default usePopularMovies
