import { createSlice } from "@reduxjs/toolkit";

const localSorageLang = localStorage.getItem("language");

const initialState = {
  language: localSorageLang ? localSorageLang : "EN",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("language", action.payload);
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
