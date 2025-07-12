import { useEffect, useState } from "react";
import "./Styles.css";

import { ProductFilters } from "../../features/ProductFilters";
import { Shimmer } from "../../component/Shimmer";
import type { Product } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../slices/productsSlice";
import type { AppDispatch, RootState } from "../../store/Store";
import { STATUS } from "../../types/status";
import { toggleFavorite } from "../../slices/favoritesSlice";

const LIMIT = 10;

function ProductListingPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch<AppDispatch>();

  const favorites = useSelector((state: RootState) => state.favorites);
  const { status, error, filteredProducts } = useSelector(
    (state: RootState) => state.products
  );

  const startIndex = (currentPage - 1) * LIMIT;
  const endIndex = startIndex + LIMIT;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const handleToggleFavorite = (productId: number) => {
    dispatch(toggleFavorite(productId));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredProducts]);

  return (
    <div className="product-page">
      <h1>Product Listing Page</h1>
      <div className="product-page-content">
        <ProductFilters />
        <main className="product-main">
          {status === STATUS.LOADING ? (
            <Shimmer productLength={10} />
          ) : status === STATUS.FAILED ? (
            <div className="error">Error: {error}</div>
          ) : (
            <div className="product-list">
              {paginatedProducts?.map((product: Product) => (
                <div className="product-card" key={product.id}>
                  <div className="product-image-container">
                    <img
                      src={product.thumbnail || product.images[0]}
                      alt={product.title}
                      className="product-image"
                    />
                    <span
                      className="wishlist-icon"
                      onClick={() => handleToggleFavorite(product.id)}
                      style={{ cursor: "pointer", fontSize: "1.5rem" }}
                    >
                      {favorites.includes(product.id) ? "❤️" : "🤍"}
                    </span>
                  </div>
                  <div className="product-info">
                    <div className="product-title">{product.title}</div>
                    <span className="product-price">
                      Price: ₹{product.price}
                    </span>
                    <span className="product-category">
                      Category: {product.category}
                    </span>
                    <span
                      className={`rating ${
                        product.rating >= 4
                          ? "rating--green"
                          : product.rating >= 2
                          ? "rating--yellow"
                          : "rating--red"
                      }`}
                    >
                      {product.rating} ⭐️
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {filteredProducts.length > LIMIT && (
            <div className="pagination">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Prev
              </button>

              {Array.from({
                length: Math.ceil(filteredProducts.length / LIMIT),
              }).map((_, idx) => {
                const pageNum = idx + 1;
                return (
                  <button
                    key={pageNum}
                    className={pageNum === currentPage ? "active-page" : ""}
                    onClick={() => setCurrentPage(pageNum)}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    prev < Math.ceil(filteredProducts.length / LIMIT)
                      ? prev + 1
                      : prev
                  )
                }
                disabled={
                  currentPage === Math.ceil(filteredProducts.length / LIMIT)
                }
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default ProductListingPage;
