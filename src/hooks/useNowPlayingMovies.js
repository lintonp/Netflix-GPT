import { nowPlaying_API, TMDB_Options } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addnowPlayingMovies } from "../Store/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getMoviesData = async () => {
    const data = await fetch(nowPlaying_API, TMDB_Options);
    const json = await data.json();
    console.log(json);
    dispatch(addnowPlayingMovies(json));
  };

  useEffect(() => {
    getMoviesData();
  }, []);
};

export default useNowPlayingMovies;
