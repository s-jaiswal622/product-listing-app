import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface FiltersState {
  category: string;
  minRating: number;
  sortOrder: 'asc' | 'desc';
}

const initialState: FiltersState = {
  category: '',
  minRating: 0,
  sortOrder: 'asc',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },

    setMinRating: (state, action: PayloadAction<number>) => {
      state.minRating = Math.max(0, Math.min(5, action.payload));
    },

    setSortOrder: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortOrder = action.payload;
    },

    clearFilters: () => initialState,
  },
});

export const {
  setCategory,
  setMinRating,
  setSortOrder,
  clearFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;

export const selectFilters = (state: { filters: FiltersState }) => state.filters;
export const selectFilterCategory = (state: { filters: FiltersState }) => state.filters.category;
export const selectFilterMinRating = (state: { filters: FiltersState }) => state.filters.minRating;
export const selectFilterSortOrder = (state: { filters: FiltersState }) => state.filters.sortOrder;
