import { createSlice } from '@reduxjs/toolkit';

const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    token: sessionStorage.getItem('token')
  },
  reducers: {},
  extraReducers: {}
})

export default sessionSlice.reducer;