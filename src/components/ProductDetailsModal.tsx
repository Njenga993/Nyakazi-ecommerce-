import React from 'react';
import '../styles/ProductDetailsModal.css';
import { Product } from '../types/Product';

interface Props {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductDetailsModal: React.FC<Props> = ({ product, onClose, onAddToCart }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={product.image} alt={product.name} className="modal-image" />
        <h2>{product.name}</h2>
        <p className="modal-category">{product.category}</p>
        <p className="modal-description">{product.description}</p>
        <p className="modal-price">Ksh {product.price.toFixed(2)}</p>
        <button className="modal-add-btn" onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
