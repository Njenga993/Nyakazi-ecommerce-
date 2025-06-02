import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/ProductCard.css';
const ProductCard = ({ product, onAddToCart, onShowDetails }) => {
    return (_jsxs("div", { className: "product-card", children: [_jsxs("div", { className: "product-preview", onClick: () => onShowDetails(product), role: "button", tabIndex: 0, onKeyPress: (e) => e.key === 'Enter' && onShowDetails(product), children: [_jsx("img", { src: product.image, alt: product.name, className: "product-image" }), _jsx("h3", { className: "product-name", children: product.name })] }), _jsxs("p", { className: "product-price", children: ["Ksh ", product.price.toFixed(2)] }), _jsx("button", { className: "add-to-cart", onClick: () => onAddToCart(product), children: "Add to Cart" })] }));
};
export default ProductCard;
