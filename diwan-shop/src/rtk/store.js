import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import categoriesSlice from "./slices/categoriesSlice";
import cartSlice from "./slices/cartSlice";
export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    categories: categoriesSlice,
  },
});
