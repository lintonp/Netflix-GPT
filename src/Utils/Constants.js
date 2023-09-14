export const nowPlaying_API =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const PopularMovies_API =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const topRated_API =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const TMDB_Options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGY5MDg3MGUyOWZkNjY1Mzg3MTUyODUxZjEwMDViNyIsInN1YiI6IjY0ZmUwNmQ0MmRmZmQ4MDBhZGI2NmYyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zV3YIOZJqGdkCrLpnZDjDBuf5Q-hTBA2r9Q4ymiWmvg",
  },
};

export const Movie_Poster_URL = "https://image.tmdb.org/t/p/w200";
