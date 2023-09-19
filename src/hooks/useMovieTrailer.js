import { useDispatch } from "react-redux";
import { TMDB_Options } from "../Utils/Constants";
import { useEffect } from "react";
import { setDisplayMovie, setmodalMovie } from "../Store/movieSlice";

const useMovieTrailer = (id, updateStore) => {
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
    updateStore
      ? dispatch(setDisplayMovie(MovieData))
      : dispatch(setmodalMovie(MovieData));
    return MovieData.key;
  };

  useEffect(() => {
    fetchMovieData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMovieTrailer;
