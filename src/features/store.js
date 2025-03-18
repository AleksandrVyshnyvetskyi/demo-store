import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './categories/categoriesSlice';
import productsSlice from './products/productsSlice';

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productsSlice,
  },
  devTools: true,
});
