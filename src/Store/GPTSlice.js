import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    showGPT: false,
    searchResults: null,
    searchError: "",
    searching: false,
  },
  reducers: {
    toggleGPT: (state) => {
      state.showGPT = !state.showGPT;
    },
    addSearchResults: (state, action) => {
      return { ...state, searchResults: action.payload, searching: false };
    },
    updateSearchErrorMessage: (state, action) => {
      return { ...state, searchError: action.payload, searching: false };
    },
    toggleIsSearching: (state) => {
      state.searching = !state.searching;
    },
  },
});

export const {
  toggleGPT,
  addSearchResults,
  updateSearchErrorMessage,
  toggleIsSearching,
} = GPTSlice.actions;
export default GPTSlice.reducer;
