import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  lastname: "",
  distruct: "",
  street: "",
  building: "",
  floor: "",
  office: "",
  additional: "",
  house: "",
  apartment: "",
};

export const AddressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    saveAddress: (state, action) => action.payload,
  },
});

export const { saveAddress } = AddressSlice.actions;

export default AddressSlice.reducer;
