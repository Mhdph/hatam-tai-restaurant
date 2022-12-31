import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  lastname: "",
  distruct: "",
};

export const AddressSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveAddress: (state, action) => action.payload,
  },
});

export const { saveAddress } = AddressSlice.actions;

export default AddressSlice.reducer;
