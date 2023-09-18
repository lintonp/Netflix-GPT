import { topRated_API, TMDB_Options } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Store/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getMoviesData = async () => {
    const data = await fetch(topRated_API, TMDB_Options);
    const json = await data.json();
    dispatch(addTopRatedMovies(json));
  };

  useEffect(() => {
    getMoviesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useTopRatedMovies;
