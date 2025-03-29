import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './categories/categoriesSlice';
import productsSlice from './products/productsSlice';
import { apiSlice } from './api/apiSlice';

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productsSlice,
    [apiSlice.reducerPath] : apiSlice.reducer
  },
  middleware: (getMeddleware) => 
    getMeddleware().concat(apiSlice.middleware)
  ,
  devTools: true,
});
