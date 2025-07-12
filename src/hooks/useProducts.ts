import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/Store";
import { fetchProducts } from "../slices/productsSlice";
import { toggleFavorite } from "../slices/favoritesSlice";
import { PRODUCTS_PER_PAGE } from "../config/constants";
import { useDebounce } from "./useDebounce";

export const useProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce<string>(searchTerm, 300);

  const {
    filteredProducts: allProducts,
    status,
    error,
  } = useSelector((state: RootState) => state.products);
  const favorites = useSelector((state: RootState) => state.favorites);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [allProducts, debouncedSearchTerm]);

  const searchedProducts = useMemo(() => {
    return allProducts.filter((product) =>
      product.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [allProducts, debouncedSearchTerm]);

  const paginatedProducts = searchedProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handleToggleFavorite = (id: number) => {
    dispatch(toggleFavorite(id));
  };

  return {
    currentPage,
    setCurrentPage,
    paginatedProducts,
    filteredProducts: searchedProducts,
    favorites,
    handleToggleFavorite,
    searchTerm,
    setSearchTerm,
    status,
    error,
    LIMIT: PRODUCTS_PER_PAGE,
  };
};
