import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "./addressSlice";
import cartItemsSlice from "./CardSlice";
import NumberSlice from "./addNumberSlice";
import languageReducer from "./languageSlice";
import ToppingReducer from "./toppingSlice";

export const store = configureStore({
  reducer: {
    user: addressReducer,
    cartReducer: cartItemsSlice,
    numberReucer: NumberSlice,
    language: languageReducer,
    topping: ToppingReducer,
  },
});
