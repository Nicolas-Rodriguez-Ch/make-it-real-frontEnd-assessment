import { configureStore } from "@reduxjs/toolkit";
import productSlice from './reducers/Product.reducer'


const store = configureStore({
  reducer: {
    productReducer: productSlice,
  }
});

export default store;