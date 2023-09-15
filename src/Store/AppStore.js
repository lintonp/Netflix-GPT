import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducer from "./movieSlice";
import GPTReducer from "./GPTSlice";
import configReducer from "./ConfigSlice";

const AppStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesReducer,
    gpt: GPTReducer,
    configs: configReducer,
  },
});

export default AppStore;
