import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: { showGPT: false },
  reducers: {
    toggleGPT: (state) => {
      state.showGPT = !state.showGPT;
    },
  },
});

export const { toggleGPT } = GPTSlice.actions;
export default GPTSlice.reducer;
