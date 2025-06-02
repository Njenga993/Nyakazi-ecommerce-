import React from 'react';
import '../styles/ProductCard.css';
import { Product } from '../types/Product';

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
  onShowDetails: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, onAddToCart, onShowDetails }) => {
  return (
    <div className="product-card">
      <div
        className="product-preview"
        onClick={() => onShowDetails(product)}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && onShowDetails(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
        <h3 className="product-name">{product.name}</h3>
      </div>
      <p className="product-price">Ksh {product.price.toFixed(2)}</p>
      <button className="add-to-cart" onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
