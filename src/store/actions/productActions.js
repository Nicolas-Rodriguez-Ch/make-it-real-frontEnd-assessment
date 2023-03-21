import { createAsyncThunk } from "@reduxjs/toolkit";
import  axios from "axios";


export const fetchProducts = createAsyncThunk('product/fetchProduct', ()=> {
  return axios.get('https://fakestoreapi.com/products?limit=9')
    .then(res => res.data)
});
