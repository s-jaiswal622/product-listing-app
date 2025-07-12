import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/Store";
import { fetchProducts } from "../slices/productsSlice";
import { toggleFavorite } from "../slices/favoritesSlice";
import { PRODUCTS_PER_PAGE } from "../config/constants";


export const useProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState(1);

  const { filteredProducts, status, error } = useSelector(
    (state: RootState) => state.products
  );
  const favorites = useSelector((state: RootState) => state.favorites);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredProducts]);

  const paginatedProducts = filteredProducts.slice(
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
    filteredProducts,
    favorites,
    handleToggleFavorite,
    status,
    error,
    LIMIT: PRODUCTS_PER_PAGE,
  };
};
