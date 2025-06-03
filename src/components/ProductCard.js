import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import '../styles/ProductCard.css';
const ProductCard = ({ product, onAddToCart, onShowDetails }) => {
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
    return (_jsxs("div", { className: "product-card", children: [_jsxs("div", { className: "product-preview", onClick: () => onShowDetails(product), role: "button", tabIndex: 0, onKeyPress: (e) => e.key === 'Enter' && onShowDetails(product), children: [_jsx("img", { src: product.image, alt: product.name, className: "product-image" }), _jsx("h3", { className: "product-name", children: product.name })] }), _jsxs("p", { className: "product-price", children: ["Ksh ", product.price.toFixed(2)] }), _jsx("button", { className: `add-to-cart ${isAdding ? 'adding' : ''}`, onClick: handleAddToCart, disabled: isAdding, children: isAdding ? 'Adding...' : 'Add to Cart' }), showMessage && (_jsxs("div", { className: "cart-message", children: ["\u2713 ", product.name, " added to cart!"] }))] }));
};
export default ProductCard;
