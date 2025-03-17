import { configureStore } from '@reduxjs/toolkit';
import catalogSlice from './catalog/catalogSlice';

export const store = configureStore({
  reducer: {
    catalog: catalogSlice,
  },
  devTools: true,
});
