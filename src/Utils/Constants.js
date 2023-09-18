import OpenAI from "openai";

export const Netflix_BG_Image_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

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
    Authorization: process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const Movie_Poster_URL = "https://image.tmdb.org/t/p/w200";

export const Search_Movie_API =
  "https://api.themoviedb.org/3/search/movie?query=MOVIENAME&include_adult=false&language=en-US&page=1";

export const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY, // defaults to process.env["REACT_APP_OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true,
});
