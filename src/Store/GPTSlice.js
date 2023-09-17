import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    showGPT: false,
    searchResults: null,
    searchError: "",
  },
  reducers: {
    toggleGPT: (state) => {
      state.showGPT = !state.showGPT;
    },
    addSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    updateSearchErrorMessage: (state, action) => {
      state.searchError = action.payload;
    },
  },
});

export const { toggleGPT, addSearchResults, updateSearchErrorMessage } =
  GPTSlice.actions;
export default GPTSlice.reducer;
