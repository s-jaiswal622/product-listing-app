import React from "react";
import './Styles.css';
import Card from "../../component/Card";
import type { Product } from "../../types";

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <Card className="product-card">
      <div className="card-image-container">
        <img
          src={product.thumbnail || product.images[0]}
          alt={product.title}
          className="card-image"
        />
        <span
          className="wishlist-icon"
          onClick={() => onToggleFavorite(product.id)}
        >
          {isFavorite ? "❤️" : "🤍"}
        </span>
      </div>
      <div className="card-body">
        <div className="card-title">{product.title}</div>
        <div className="card-price">Price: ₹{product.price}</div>
        <div className="card-category">Category: {product.category}</div>
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
    </Card>
  );
};

export default ProductCard;
