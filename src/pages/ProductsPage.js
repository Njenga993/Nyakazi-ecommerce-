import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import CartPopup from '../components/CartPopup';
import CheckoutPopup from '../components/CheckoutPopup';
import ProductDetailsModal from '../components/ProductDetailsModal';
import '../styles/ProductsPage.css';
const dummyProducts = [
    // Fresh Vegetables
    {
        id: 1,
        name: 'Fresh Managu (Black Nightshade) , Net: 1kg',
        category: 'Fresh Vegetables',
        price: 200,
        image: `${import.meta.env.BASE_URL}images/managu-600x400.png`,
        description: 'Rich in vitamins A and C for immunity support. Promotes healthy digestion and detoxification.'
    },
    {
        id: 2,
        name: 'Fresh Terere (Amaranth) , Net: 1kg',
        category: 'Fresh Vegetables',
        price: 200,
        image: `${import.meta.env.BASE_URL}images/terere-fresh.png`,
        description: 'High in iron to prevent anemia. Loaded with antioxidants for glowing skin.'
    },
    {
        id: 3,
        name: 'Fresh Sagaa (Spider Plant) , Net: 1kg',
        category: 'Fresh Vegetables',
        price: 200,
        image: `${import.meta.env.BASE_URL}images/spider-plant.png`,
        description: 'Helps regulate blood sugar. Excellent fiber source for gut health.'
    },
    {
        id: 4,
        name: 'Fresh Spinach , Net: 1kg',
        category: 'Fresh Vegetables',
        price: 150,
        image: `${import.meta.env.BASE_URL}images/spider-plant.png`,
        description: 'Rich in iron and folate for energy. Strengthens bones with natural calcium.'
    },
    {
        id: 5,
        name: 'Fresh Oyster Mushrooms , Net: 250g',
        category: 'Fresh Vegetables',
        price: 250,
        image: `${import.meta.env.BASE_URL}images/fresh-mushroom.jpg`,
        description: 'Boosts immunity with beta-glucans. Low in calories, great for weight control.'
    },
    // Dried Vegetables
    {
        id: 6,
        name: 'Dried Managu (Black Nightshade) , Net: 50g',
        category: 'Dried Vegetables',
        price: 200,
        image: `${import.meta.env.BASE_URL}images/managu-600x400.png`,
        description: 'Sun-dried and nutrient-packed. Long shelf life for convenient use.'
    },
    {
        id: 7,
        name: 'Dried Spinach , Net: 50g',
        category: 'Dried Vegetables',
        price: 150,
        image: `${import.meta.env.BASE_URL}images/spider-plant.png`,
        description: 'Retains essential iron and calcium. Ideal for quick, healthy meals.'
    },
    {
        id: 8,
        name: 'Dried Terere (Amaranth) , Net: 50g',
        category: 'Dried Vegetables',
        price: 200,
        image: `${import.meta.env.BASE_URL}images/terere-600x400.png`,
        description: 'Loaded with Vitamin A for vision and skin. Provides lysine for body repair.'
    },
    {
        id: 9,
        name: 'Dried Sagaa (Spider Plant) , Net: 50g',
        category: 'Dried Vegetables',
        price: 200,
        image: `${import.meta.env.BASE_URL}images/spider-plant.png`,
        description: 'Naturally preserves nutrients. Supports digestion and appetite.'
    },
    {
        id: 10,
        name: 'Dried Oyster Mushrooms , Net: 50g',
        category: 'Dried Vegetables',
        price: 300,
        image: `${import.meta.env.BASE_URL}images/mushroom-picsart.jpg`,
        description: 'High in protein and fiber. Contains powerful antioxidants for cell health.'
    },
    // Spices & Herbs
    {
        id: 11,
        name: 'Rosemary Pure Ground , Net: 50g',
        category: 'Spices & Herbs',
        price: 90,
        image: `${import.meta.env.BASE_URL}images/spices.jpg`,
        description: 'Improves memory and focus. Fights inflammation and supports joint health.'
    },
    {
        id: 12,
        name: 'Garlic Pure Ground , Net: 50g',
        category: 'Spices & Herbs',
        price: 120,
        image: `${import.meta.env.BASE_URL}images/spices.jpg`,
        description: 'Naturally lowers blood pressure. Boosts the immune system.'
    },
    {
        id: 13,
        name: 'Ginger Pure Ground , Net: 50g',
        category: 'Spices & Herbs',
        price: 100,
        image: `${import.meta.env.BASE_URL}images/spices.jpg`,
        description: 'Relieves nausea and supports digestion. Anti-inflammatory and immunity booster.'
    },
    {
        id: 14,
        name: 'Cinnamon Pure Ground , Net: 50g',
        category: 'Spices & Herbs',
        price: 110,
        image: `${import.meta.env.BASE_URL}images/spices.jpg`,
        description: 'Balances blood sugar levels. Packed with powerful antioxidants.'
    },
    {
        id: 15,
        name: 'Cayenne Pepper Pure Ground , Net: 50g',
        category: 'Spices & Herbs',
        price: 90,
        image: `${import.meta.env.BASE_URL}images/spices.jpg`,
        description: 'Speeds up metabolism and burns fat. Clears sinuses and boosts circulation.'
    }
];
const ProductsPage = () => {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [categoryFilter, setCategoryFilter] = useState('All');
    useEffect(() => {
        const stored = localStorage.getItem('nyakaziCart');
        if (stored)
            setCart(JSON.parse(stored));
    }, []);
    useEffect(() => {
        localStorage.setItem('nyakaziCart', JSON.stringify(cart));
    }, [cart]);
    const handleAddToCart = (product) => {
        setCart(prev => {
            const exists = prev.find(p => p.id === product.id);
            if (exists) {
                return prev.map(p => p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };
    const handleRemoveFromCart = (id) => {
        setCart(prev => prev.filter(p => p.id !== id));
    };
    const handleCheckoutSubmit = (formData) => {
        const message = `Hello, I'm ${formData.name}. I'd like to order:\n\n${cart.map(p => `- ${p.name} x${p.quantity} = Ksh ${p.price * (p.quantity || 1)}`).join('\n')}\n\nTotal: Ksh ${cart.reduce((sum, p) => sum + (p.price * (p.quantity || 1)), 0)}\n\nDeliver to: ${formData.location}\nWhatsApp: ${formData.whatsapp}`;
        const encoded = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/+254703642280?text=${encoded}`;
        window.open(whatsappURL, '_blank');
        setCart([]);
        setShowCheckout(false);
    };
    const filteredProducts = categoryFilter === 'All'
        ? dummyProducts
        : dummyProducts.filter(p => p.category === categoryFilter);
    return (_jsxs("div", { className: "products-page", children: [_jsx("h1", { className: "section-title", children: "Our Organic Products" }), _jsx("div", { className: "category-nav", children: ['All', 'Fresh Vegetables', 'Dried Vegetables', 'Spices & Herbs'].map(cat => (_jsx("button", { className: categoryFilter === cat ? 'active' : '', onClick: () => setCategoryFilter(cat), children: cat }, cat))) }), _jsx("div", { className: "products-grid", children: filteredProducts.map(product => (_jsx(ProductCard, { product: product, onAddToCart: handleAddToCart, onShowDetails: () => setSelectedProduct(product) }, product.id))) }), _jsxs("button", { className: "floating-cart-btn", onClick: () => setShowCart(true), children: ["View Cart (", cart.reduce((sum, p) => sum + (p.quantity || 1), 0), ")"] }), showCart && (_jsx(CartPopup, { cartItems: cart, onClose: () => setShowCart(false), onCheckout: () => {
                    setShowCart(false);
                    setShowCheckout(true);
                }, onRemove: handleRemoveFromCart })), showCheckout && (_jsx(CheckoutPopup, { onClose: () => setShowCheckout(false), onSubmit: handleCheckoutSubmit })), selectedProduct && (_jsx(ProductDetailsModal, { product: selectedProduct, onClose: () => setSelectedProduct(null), onAddToCart: handleAddToCart }))] }));
};
export default ProductsPage;
