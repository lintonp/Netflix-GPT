import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducer from "./movieSlice";
import GPTReducer from "./GPTSlice";

const AppStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesReducer,
    gpt: GPTReducer,
  },
});

export default AppStore;
