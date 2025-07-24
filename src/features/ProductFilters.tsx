import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../component/Dropdown";
import type { AppDispatch, RootState } from "../store/Store";
import {
  clearFilters,
  setCategory,
  setMinRating,
  setSortOrder,
  selectFilters,
} from "../slices/filtersSlice";
import { setFilteredProducts } from "../slices/productsSlice";

export const ProductFilters = React.memo(() => {
  const dispatch = useDispatch<AppDispatch>();
  const { category, minRating, sortOrder } = useSelector(selectFilters);

  const { categories, ratings } = useSelector(
    (state: RootState) => state.products.filterStats
  );

  const hasActiveFilters = category || minRating > 0 || sortOrder !== "asc";

  const allProducts = useSelector(
    (state: RootState) => state.products.allProducts
  );

  useEffect(() => {
    let filtered = [...allProducts];

    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (minRating > 0) {
      filtered = filtered.filter((p) => Math.floor(p.rating) >= minRating);
    }

    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else {
      filtered.sort((a, b) => b.price - a.price);
    }

    dispatch(setFilteredProducts(filtered));
  }, [allProducts, category, minRating, sortOrder, dispatch]);

  const handleCategory = useCallback(
    (value: string) => {
      dispatch(setCategory(value));
    },
    [dispatch]
  );

  const handleRating = useCallback(
    (value: number) => {
      dispatch(setMinRating(value));
    },
    [dispatch]
  );

  const handleSort = useCallback(
    (value: "asc" | "desc") => {
      dispatch(setSortOrder(value));
    },
    [dispatch]
  );

  const handleClearFilters = useCallback(() => {
    dispatch(clearFilters());
  }, [dispatch]);

  return (
    <aside className="product-filters">
      <div className="filter-header">
        <h2>Product Filters</h2>
      </div>

      <div className="filter-bar">
        <Dropdown
          label="Category"
          value={category}
          onChange={handleCategory}
          options={[
            { label: "All Categories", value: "" },
            ...categories.map((c) => ({ label: c, value: c })),
          ]}
        />

        <Dropdown
          label="Rating"
          value={minRating}
          onChange={handleRating}
          options={[
            { label: "All Ratings", value: 0 },
            ...ratings.map((r) => ({ label: `${r}⭐️ & above`, value: r })),
          ]}
        />

        <Dropdown
          label="Sort By"
          value={sortOrder}
          onChange={handleSort}
          options={[
            { label: "Price: Low → High", value: "asc" },
            { label: "Price: High → Low", value: "desc" },
          ]}
        />
      </div>
      {hasActiveFilters && (
        <button onClick={handleClearFilters} className="clear-filters-btn">
          Clear All
        </button>
      )}
    </aside>
  );
});
