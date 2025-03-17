import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

export const getCatalog = createAsyncThunk(
  'catalog/getCatalog',
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}/categories`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    list: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getCatalog.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCatalog.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(getCatalog.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default catalogSlice.reducer;
