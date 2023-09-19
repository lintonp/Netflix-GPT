import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    displayMovie: null,
    modalMovie: null,
  },
  reducers: {
    addnowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setDisplayMovie: (state, action) => {
      state.displayMovie = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    setmodalMovie: (state, action) => {
      state.modalMovie = action.payload;
    },
  },
});

export const {
  addnowPlayingMovies,
  setDisplayMovie,
  addPopularMovies,
  addTopRatedMovies,
  setmodalMovie,
} = movieSlice.actions;
export default movieSlice.reducer;
