import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const AppStore = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default AppStore;
