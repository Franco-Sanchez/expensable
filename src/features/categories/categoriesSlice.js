import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async ({ token }) => {
    const response = await fetch(`${BASE_URI}/categories`, {
      method: "GET",
      headers: {
        Authorization: `Token token=${token}`,
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(JSON.stringify(data.errors));
    }

    return { categories: data };
  }
);

export const fetchDeleteCategory = createAsyncThunk(
  "categories/fetchDeleteCategories", async ({ token, id }) => {
    const response = await fetch(`${BASE_URI}/categories/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Token token=${token}`
      }
    })

    const data = await response.json()
    if(response.status === 204) {
      return true;
    } else {
      throw new Error(JSON.stringify(data.errors)) // debería retornar un array
    }
  }
)

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    expenses: [],
    income: [],
    // items: [],
    status: "idle",
    errors: null,
  },
  reducers: {
    removeCategoryFromItems(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    }
  },
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.status = "succeeded";
      // state.items = action.payload.categories;
      state.expenses = action.payload.categories.filter(
        (category) => category.transaction_type === "expenses"
      );
      // save expenses in sessionStorage or localStorage
      state.income = action.payload.categories.filter(
        (category) => category.transaction_type === 'income'
      );
      // save income in sessionStorage or localStorage
      state.errors = null;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.status = "failed";
      state.errors = JSON.parse(action.error.message);
    },
    [fetchDeleteCategory.pending]: (state) => {
      state.status = "loading";
    },
    [fetchDeleteCategory.rejected]: (state, action) => {
      state.status = "failed";
      state.errors = JSON.parse(action.error.message);
    },
  },
});

export const { removeCategoryFromItems } = categoriesSlice.actions;

export default categoriesSlice.reducer;