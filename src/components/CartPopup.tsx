import React from 'react';
import '../styles/CartPopup.css';
import { Product } from '../types/Product';


interface Props {
  cartItems: Product[];
  onClose: () => void;
  onCheckout: () => void;
  onRemove: (id: number) => void;
}

const CartPopup: React.FC<Props> = ({ cartItems, onClose, onCheckout, onRemove }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * (item.quantity ?? 1), 0);

  return (
    <div className="cart-popup-overlay" onClick={onClose}>
      <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
        <h2>Your Cart</h2>
        <button className="close-btn" onClick={onClose}>×</button>
        {cartItems.length === 0 ? (
          <p className="empty">Your cart is empty</p>
        ) : (
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                    <span>{item.name} (x{item.quantity ?? 1})</span>
                    <span>Ksh {item.price * (item.quantity ?? 1)}</span>
                <button onClick={() => onRemove(item.id)} className="remove-btn">Remove</button>
              </li>
            ))}
          </ul>
        )}
        <div className="cart-footer">
          <strong>Total: Ksh {total.toFixed(2)}</strong>
          <button className="checkout-btn" onClick={onCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
