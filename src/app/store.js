import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from '../features/session/sessionSlice';
import categoriesReducer from '../features/categories/categoriesSlice';

const store = configureStore({
  reducer: {
    session: sessionReducer,
    categories: categoriesReducer
  }
})

export default store;