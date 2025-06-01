import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import CartPopup from '../components/CartPopup';
import CheckoutPopup from '../components/CheckoutPopup';
import { Product } from '../types/Product';
import '../styles/ProductsPage.css';


const dummyProducts: Product[] = [
  // Fresh Vegetables
  { id: 1, name: 'Fresh Kale', category: 'Fresh Vegetables', price: 40, image: '/images/kale.jpg', description: 'Organic fresh kale' },
  { id: 2, name: 'Spinach', category: 'Fresh Vegetables', price: 50, image: '/images/spinach.jpg', description: 'Rich in iron and fiber' },
  { id: 3, name: 'Lettuce', category: 'Fresh Vegetables', price: 60, image: '/images/lettuce.jpg', description: 'Crisp and refreshing' },
  { id: 4, name: 'Tomatoes', category: 'Fresh Vegetables', price: 70, image: '/images/tomatoes.jpg', description: 'Juicy organic tomatoes' },
  { id: 5, name: 'Cabbage', category: 'Fresh Vegetables', price: 55, image: '/images/cabbage.jpg', description: 'Locally grown cabbage' },

  // Dried Vegetables
  { id: 6, name: 'Dried Kale', category: 'Dried Vegetables', price: 80, image: '/images/dried-kale.jpg', description: 'Sun-dried kale flakes' },
  { id: 7, name: 'Dried Spinach', category: 'Dried Vegetables', price: 85, image: '/images/dried-spinach.jpg', description: 'Dried spinach powder' },
  { id: 8, name: 'Dried Carrots', category: 'Dried Vegetables', price: 90, image: '/images/dried-carrots.jpg', description: 'Sweet dried carrots' },
  { id: 9, name: 'Dried Cabbage', category: 'Dried Vegetables', price: 75, image: '/images/dried-cabbage.jpg', description: 'Shredded dried cabbage' },
  { id: 10, name: 'Dried Onions', category: 'Dried Vegetables', price: 95, image: '/images/dried-onions.jpg', description: 'Crispy dried onions' },

  // Spices & Herbs
  { id: 11, name: 'Dried Rosemary', category: 'Spices & Herbs', price: 60, image: '/images/rosemary.jpg', description: 'Fragrant rosemary leaves' },
  { id: 12, name: 'Dried Oregano', category: 'Spices & Herbs', price: 65, image: '/images/oregano.jpg', description: 'Aromatic oregano' },
  { id: 13, name: 'Ginger Powder', category: 'Spices & Herbs', price: 70, image: '/images/ginger.jpg', description: 'Strong ginger flavor' },
  { id: 14, name: 'Turmeric Powder', category: 'Spices & Herbs', price: 75, image: '/images/turmeric.jpg', description: 'Bright turmeric root powder' },
  { id: 15, name: 'Mixed Herbs', category: 'Spices & Herbs', price: 100, image: '/images/mixed-herbs.jpg', description: 'Blend of organic herbs' },
];

const ProductsPage: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('All');

  useEffect(() => {
    const stored = localStorage.getItem('nyakaziCart');
    if (stored) setCart(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('nyakaziCart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const handleCheckoutSubmit = (formData: { name: string; whatsapp: string; location: string }) => {
    const message = `Hello, I'm ${formData.name}. I'd like to order:\n\n${cart.map(p =>
      `- ${p.name} x${p.quantity} = Ksh ${p.price * (p.quantity || 1)}`
    ).join('\n')}\n\nTotal: Ksh ${cart.reduce((sum, p) => sum + (p.price * (p.quantity || 1)), 0)}\n\nDeliver to: ${formData.location}\nWhatsApp: ${formData.whatsapp}`;
    
    const encoded = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/+254703642280?text=${encoded}`;
    window.open(whatsappURL, '_blank');

    setCart([]);
    setShowCheckout(false);
  };

  const filteredProducts = categoryFilter === 'All'
    ? dummyProducts
    : dummyProducts.filter(p => p.category === categoryFilter);

  return (
    <div className="products-page">
      <h1 className="section-title">Our Organic Products</h1>

      <div className="category-nav">
        {['All', 'Fresh Vegetables', 'Dried Vegetables', 'Spices & Herbs'].map(cat => (
          <button
            key={cat}
            className={categoryFilter === cat ? 'active' : ''}
            onClick={() => setCategoryFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            onShowDetails={() => alert(product.description)} // Optional: Replace with a popup if needed
          />
        ))}
      </div>

      <button className="floating-cart-btn" onClick={() => setShowCart(true)}>
        View Cart ({cart.reduce((sum, p) => sum + (p.quantity || 1), 0)})
      </button>

      {showCart && (
        <CartPopup
          cartItems={cart}
          onClose={() => setShowCart(false)}
          onCheckout={() => {
            setShowCart(false);
            setShowCheckout(true);
          }}
          onRemove={handleRemoveFromCart}
        />
      )}

      {showCheckout && (
        <CheckoutPopup
          onClose={() => setShowCheckout(false)}
          onSubmit={handleCheckoutSubmit}
        />
      )}
    </div>
  );
};

export default ProductsPage;
