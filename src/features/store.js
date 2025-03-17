import { configureStore } from '@reduxjs/toolkit';
import catalogSlice from './catalog/catalogSlice';
import productsSlice from './products/productsSlice';

export const store = configureStore({
  reducer: {
    catalog: catalogSlice,
    products: productsSlice,
  },
  devTools: true,
});
