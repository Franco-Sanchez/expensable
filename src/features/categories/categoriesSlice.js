import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    items: [],
    state: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: {}
})

export default categoriesSlice.reducer;