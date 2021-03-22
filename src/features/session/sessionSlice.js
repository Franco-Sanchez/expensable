import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URI } from '../../app/config';

export const fetchLogin = createAsyncThunk('session/fetchLogin', async ({ formData }) => {
  const response = await fetch(`${BASE_URI}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })

  const data = await response.json();
  if(!response.ok) {
    throw new Error('Something was wrong');
  }

  return { token: data.token }
})

export const fetchLogout = createAsyncThunk('session/fecthLogout', async ({ token }) => {
  const response = await fetch(`${BASE_URI}/logout`, {
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${token}`
    }
  })

  if(response.status !== 204) {
    throw new Error('Something was wrong');
  }

  return true;
})

const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    token: sessionStorage.getItem('token'),
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchLogin.pending]: (state) => {
      state.status = 'pending';
    },
    [fetchLogin.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.token = action.payload.token;
      state.error = null;
    },
    [fetchLogin.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [fetchLogout.pending]: (state) => {
      state.status = 'pending';
    },
    [fetchLogout.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.error.message;
    },
  }
})

export default sessionSlice.reducer;