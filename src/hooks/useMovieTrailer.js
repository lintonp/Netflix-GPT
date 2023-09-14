import { useDispatch } from "react-redux";
import { TMDB_Options } from "../Utils/Constants";
import { useEffect } from "react";
import { setDisplayMovie } from "../Store/movieSlice";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const fetchMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      TMDB_Options
    );
    const json = await data.json();
    const filteredData = json?.results.filter(
      (video) => video.type === "Trailer"
    );

    const MovieData = !filteredData ? json?.results[0] : filteredData[0];
    dispatch(setDisplayMovie(MovieData));
    return MovieData.key;
  };

  useEffect(() => {
    fetchMovieData();
  }, []);
};

export default useMovieTrailer;
