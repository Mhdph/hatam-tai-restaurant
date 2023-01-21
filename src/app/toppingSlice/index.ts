import { createSlice } from "@reduxjs/toolkit";
import { FoodD } from "../../types";

const items = <any>[];

const initialState = {
  value: items,
};

export const ToppingSlice = createSlice({
  name: "ToppingItems",
  initialState,
  reducers: {
    addTopping: (state, action) => {
      const newItem = action.payload;
      const duplicate = state.value.filter(
        (e: FoodD) => e._id === newItem._id && e.name.en === newItem.name.en
      );
      if (duplicate.length > 0) {
        state.value = state.value.filter(
          (e: FoodD) => e._id !== newItem._id || e.name.en !== newItem.name.en
        );
        state.value = [
          ...state.value,
          {
            id: duplicate[0].id,
            name: newItem.name,
            price: newItem.price,
            quantity: newItem.quantity + duplicate[0].quantity,
            totalPrice:
              newItem.price * (newItem.quantity + duplicate[0].quantity),
          },
        ];
      } else {
        state.value = [
          ...state.value,
          {
            ...action.payload,
            id:
              state.value.length > 0
                ? state.value[state.value.length - 1].id + 1
                : 1,
          },
        ];
      }
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.value.sort((a: { id: number }, b: { id: number }) =>
            a.id > b.id ? 1 : a.id < b.id ? -1 : 0
          )
        )
      );
    },
    updateTopping: (state, action) => {
      const newItem = action.payload;
      const item = state.value.filter(
        (e: FoodD) =>
          e._id === newItem._id &&
          e.name.en === newItem.name.en &&
          e.image === newItem.image
      );
      if (item.length > 0) {
        state.value = state.value.filter(
          (e: FoodD) =>
            e._id !== newItem._id ||
            e.name.en !== newItem.name.en ||
            e.image !== newItem.image
        );
        state.value = [
          ...state.value,
          {
            id: item[0].id,
            name: newItem.name,
            price: newItem.price,
            quantity: newItem.quantity,
            totalPrice: newItem.price * newItem.quantity,
          },
        ];
      }
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.value.sort((a: { id: number }, b: { id: number }) =>
            a.id > b.id ? 1 : a.id < b.id ? -1 : 0
          )
        )
      );
    },
    removeTopping: (state, action) => {
      const item = action.payload;
      state.value = state.value.filter(
        (e: { slug: any; color: any; size: any }) =>
          e.slug !== item.slug || e.color !== item.color || e.size !== item.size
      );
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.value.sort((a: { id: number }, b: { id: number }) =>
            a.id > b.id ? 1 : a.id < b.id ? -1 : 0
          )
        )
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTopping, removeTopping, updateTopping } =
  ToppingSlice.actions;

export default ToppingSlice.reducer;
