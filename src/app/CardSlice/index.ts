import { createSlice } from "@reduxjs/toolkit";
import { FoodD } from "../../types";

const items = <any>[];

const initialState = {
  value: items,
  deliveryFee: 12.0,
  quantity: 0,
};

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.quantity += 1;
      const newItem = action.payload;
      const duplicate = state.value.filter(
        (e: FoodD) =>
          e._id === newItem._id &&
          e.name === newItem.name &&
          e.image === newItem.image
      );
      if (duplicate.length > 0) {
        state.value = state.value.filter(
          (e: FoodD) =>
            e._id !== newItem._id ||
            e.name !== newItem.name ||
            e.image !== newItem.image
        );
        state.value = [
          ...state.value,
          {
            id: duplicate[0].id,
            name: newItem.name,
            color: newItem.color,
            size: newItem.size,
            price: newItem.price,
            quantity: newItem.quantity + duplicate[0].quantity,
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
    updateItem: (state, action) => {
      const newItem = action.payload;
      const item = state.value.filter(
        (e: { slug: any; color: any; size: any }) =>
          e.slug === newItem.slug &&
          e.color === newItem.color &&
          e.size === newItem.size
      );
      if (item.length > 0) {
        state.value = state.value.filter(
          (e: { slug: any; color: any; size: any }) =>
            e.slug !== newItem.slug ||
            e.color !== newItem.color ||
            e.size !== newItem.size
        );
        state.value = [
          ...state.value,
          {
            id: item[0].id,
            slug: newItem.slug,
            color: newItem.color,
            size: newItem.size,
            price: newItem.price,
            quantity: newItem.quantity,
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
    removeItem: (state, action) => {
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
export const { addItem, removeItem, updateItem } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
