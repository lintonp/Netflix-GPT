import { createSlice } from "@reduxjs/toolkit";

const Configs = createSlice({
  name: "configs",
  initialState: {
    langCode: "en",
  },
  reducers: {
    updateLang: (state, action) => {
      state.langCode = action.payload;
    },
  },
});

export const { updateLang } = Configs.actions;
export default Configs.reducer;
