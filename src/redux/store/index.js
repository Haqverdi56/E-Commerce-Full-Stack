import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import categorySlice from './features/categorySlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
    category: categorySlice
  },
})