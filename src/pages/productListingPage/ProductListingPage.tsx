import { Shimmer } from "../../component/Shimmer";
import ProductCard from "./ProductCard";
import ProductListingPagination from "./ProductListingPagination";
import "./Styles.css";
import { STATUS } from "../../types/status";
import { useProducts } from "../../hooks/useProducts";
import { ProductFilters } from "../../features/ProductFilters";
import SearchBar from "../../component/SearchBar";

const ProductListingPage = () => {
  const {
    paginatedProducts,
    currentPage,
    setCurrentPage,
    favorites,
    handleToggleFavorite,
    searchTerm,
    setSearchTerm,
    filteredProducts,
    status,
    error,
    LIMIT,
  } = useProducts();

  return (
    <div className="product-page">
      <h1>Product Listing Page</h1>
      <div className="product-page-content">
        <ProductFilters />
        <main className="product-main">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} className="products-search-bar"/>
          {status === STATUS.LOADING ? (
            <Shimmer productLength={10} />
          ) : status === STATUS.FAILED ? (
            <div className="error">Error: {error}</div>
          ) : (
            <div className="product-list">
              {paginatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isFavorite={favorites.includes(product.id)}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))}
            </div>
          )}
          {filteredProducts.length > LIMIT && (
            <ProductListingPagination
              currentPage={currentPage}
              totalPages={Math.ceil(filteredProducts.length / LIMIT)}
              onPageChange={setCurrentPage}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductListingPage;
