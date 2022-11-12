import { createSlice } from "@reduxjs/toolkit";
const productsSlice = createSlice({
  name: "productsSlice",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const finded = state.find((product) => product.id === action.payload.id);
      if (finded) {
        console.log(finded.productName);
        finded.qnt += 1;
      } else {
        console.log(action.payload);
        const cart = { ...action.payload, qnt: 1 };
        state.push(cart);
      }
    },
    deleteCart: (state, action) => {
      const filter = state.filter((el) => el.id !== action.payload);
      return filter;
    },
    clearCart: (state, action) => {
      return (state = []);
    },
    updateCart: (state, action) => {
      console.log(state.productName);
      console.log(action.payload);
      const { id, productName, price, category } = action.payload;
      const updateState = state.find(
        (product) => product.id.toString() === id.toString()
      );
      if (updateState) {
        updateState.productName = productName;
        updateState.price = price;
        updateState.category = category;
      }
      console.log(id);
    },
  },
});

export const { addToCart, deleteCart, clearCart, updateCart } =
  productsSlice.actions;
export default productsSlice.reducer;
