import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "./addressSlice";
import cartItemsSlice from "./CardSlice";
import NumberSliceSlice from "./CardSlice";
import languageReducer from "./languageSlice";

export const store = configureStore({
  reducer: {
    user: addressReducer,
    cartReducer: cartItemsSlice,
    numberReucer: NumberSliceSlice,
    language: languageReducer,
  },
});
