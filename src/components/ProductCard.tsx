import React, { useState } from 'react';
import '../styles/ProductCard.css';
import { Product } from '../types/Product';

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
  onShowDetails: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, onAddToCart, onShowDetails }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Call the original onAddToCart function
    onAddToCart(product);
    
    // Show success message
    setShowMessage(true);
    
    // Hide the message after 2 seconds
    setTimeout(() => {
      setShowMessage(false);
      setIsAdding(false);
    }, 2000);
  };

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
      
      <button 
        className={`add-to-cart ${isAdding ? 'adding' : ''}`}
        onClick={handleAddToCart}
        disabled={isAdding}
      >
        {isAdding ? 'Adding...' : 'Add to Cart'}
      </button>
      
      {showMessage && (
        <div className="cart-message">
          ✓ {product.name} added to cart!
        </div>
      )}
    </div>
  );
};

export default ProductCard;