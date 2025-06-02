import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/ProductDetailsModal.css';
const ProductDetailsModal = ({ product, onClose, onAddToCart }) => {
    return (_jsx("div", { className: "modal-overlay", onClick: onClose, children: _jsxs("div", { className: "modal-content", onClick: e => e.stopPropagation(), children: [_jsx("button", { className: "modal-close", onClick: onClose, children: "\u00D7" }), _jsx("img", { src: product.image, alt: product.name, className: "modal-image" }), _jsx("h2", { children: product.name }), _jsx("p", { className: "modal-category", children: product.category }), _jsx("p", { className: "modal-description", children: product.description }), _jsxs("p", { className: "modal-price", children: ["Ksh ", product.price.toFixed(2)] }), _jsx("button", { className: "modal-add-btn", onClick: () => onAddToCart(product), children: "Add to Cart" })] }) }));
};
export default ProductDetailsModal;
