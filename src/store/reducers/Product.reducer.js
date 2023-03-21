import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../actions/productActions";

const initialState = {
  loading: false,
  data: [],
  error: ''
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = ''
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false
      state.data = []
      state.error = action.error.message
    })
  },
})

console.log(productSlice);
export default productSlice.reducer;