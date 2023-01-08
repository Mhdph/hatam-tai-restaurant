import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phoneNumber: "",
  SpecialRequest: "",
};

export const NumberSlice = createSlice({
  name: "phoneNumber",
  initialState,
  reducers: {
    saveInfo: (state, action) => action.payload,
  },
});

export const { saveInfo } = NumberSlice.actions;

export default NumberSlice.reducer;
