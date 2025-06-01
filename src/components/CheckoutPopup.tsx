import React, { useState } from 'react';
import '../styles/CheckoutPopup.css';

interface Props {
  onClose: () => void;
  onSubmit: (formData: { name: string; whatsapp: string; location: string }) => void;
}

const CheckoutPopup: React.FC<Props> = ({ onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, whatsapp, location });
  };

  return (
    <div className="checkout-overlay" onClick={onClose}>
      <form className="checkout-popup" onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <button className="close-btn" onClick={onClose}>×</button>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="WhatsApp Number"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          required
        />
        <textarea
          placeholder="Delivery Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button type="submit">Send Order via WhatsApp</button>
      </form>
    </div>
  );
};

export default CheckoutPopup;
