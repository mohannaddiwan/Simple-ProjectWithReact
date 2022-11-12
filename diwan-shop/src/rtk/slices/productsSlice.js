import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const api = createAsyncThunk(
  "productsSlice/api",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insert = createAsyncThunk(
  "productsSlice/insert",
  async (productData, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch("http://localhost:3000/products", {
        method: "POST",

        body: JSON.stringify(productData),

        headers: { "Content-type": "application/json; charset=utf-8" },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const update = createAsyncThunk(
  "productsSlice/update",
  async (productData, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(
        `http://localhost:3000/products/${productData.id}`,
        {
          method: "PUT",

          body: JSON.stringify(productData),

          headers: { "Content-type": "application/json; charset=utf-8" },
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deletePro = createAsyncThunk(
  "productsSlice/deletePro",
  async (productData, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    console.log(productData);
    try {
      await fetch(`http://localhost:3000/products/${productData.id}`, {
        method: "DELETE",

        headers: { "Content-type": "application/json; charset=utf-8" },
      });
      return productData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: { products: [], loading: false, error: null },
  reducers: {
    // addProduct: (state, action) => {
    //   state.products.push(action.payload);
    // },
    // updateProduct: (state, action) => {
    //   console.log(state.productName);
    //   console.log(action.payload);
    //   const { id, productName, price, category } = action.payload;
    //   const updateState = state.products.find(
    //     (product) => product.id.toString() === id.toString()
    //   );
    //   console.log(action.payload.productName);
    //   if (updateState) {
    //     updateState.productName = productName;
    //     updateState.price = price;
    //     updateState.category = category;
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(api.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(api.fulfilled, (state, action) => {
      state.loading = false;

      state.products = action.payload;
    });
    builder.addCase(api.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(insert.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(insert.fulfilled, (state, action) => {
      state.loading = false;

      state.products.push(action.payload);
    });
    builder.addCase(insert.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(deletePro.fulfilled, (state, action) => {
      state.loading = false;
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    });

    builder.addCase(update.fulfilled, (state, action) => {
      const { id, productName, price, category, img } = action.payload;
      const updateState = state.products.find((product) => product.id === id);
      console.log(action.payload.img);
      if (updateState) {
        updateState.productName = productName;
        updateState.price = price;
        updateState.category = category;
        updateState.img = img;
      }
    });
  },
});

export const { addProduct, updateProduct } = productsSlice.actions;
export default productsSlice.reducer;
