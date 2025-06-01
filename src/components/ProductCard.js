import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/ProductCard.css';
const ProductCard = ({ product, onAddToCart, onShowDetails }) => {
    return (_jsxs("div", { className: "product-card", children: [_jsx("img", { src: product.image, alt: product.name, className: "product-image", onClick: () => onShowDetails(product) }), _jsx("h3", { className: "product-name", children: product.name }), _jsxs("p", { className: "product-price", children: ["Ksh ", product.price.toFixed(2)] }), _jsx("button", { className: "add-to-cart", onClick: () => onAddToCart(product), children: "Add to Cart" })] }));
};
export default ProductCard;
