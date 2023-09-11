import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    displayMovie: null,
  },
  reducers: {
    addnowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setDisplayMovie: (state, action) => {
      state.displayMovie = action.payload;
    },
  },
});

export const { addnowPlayingMovies, setDisplayMovie } = movieSlice.actions;
export default movieSlice.reducer;
