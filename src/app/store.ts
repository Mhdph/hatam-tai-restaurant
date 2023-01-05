import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "./addressSlice";
import cartItemsSlice from "./CardSlice";

export const store = configureStore({
  reducer: {
    user: addressReducer,
    cartReducer: cartItemsSlice,
  },
});
