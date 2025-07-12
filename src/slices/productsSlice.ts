import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Product, ProductsState } from "../types";

export const PRODUCTS_LIST_URL = "https://dummyjson.com/products";

export const fetchProducts = createAsyncThunk<Product[]>(
  "fetchProductList",
  async () => {
    const response = await fetch(PRODUCTS_LIST_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data?.products || [];
  }
);

const initialState: ProductsState = {
  allProducts: [],
  filteredProducts: [],
  status: "idle",
  error: null,
  filterStats: {
    categories: [],
    ratings: [],
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allProducts = action.payload;
        state.filteredProducts = action.payload;

        const categories = Array.from(
          new Set(action.payload.map((p) => p.category))
        ).sort();
        const ratings = Array.from(
          new Set(action.payload.map((p) => Math.floor(p.rating)))
        ).sort((a, b) => b - a);

        state.filterStats = {
          categories,
          ratings,
        };
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export const { setFilteredProducts } = productsSlice.actions;
export default productsSlice.reducer;
