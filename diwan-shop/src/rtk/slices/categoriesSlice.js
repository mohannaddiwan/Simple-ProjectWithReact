import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const api = createAsyncThunk("categoriesSlice/api", async () => {
  const res = await fetch("http://localhost:3000/categories");
  const data = await res.json();
  return data;
});

const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(api.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;
