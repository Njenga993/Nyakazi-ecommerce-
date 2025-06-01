import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/CartPopup.css';
const CartPopup = ({ cartItems, onClose, onCheckout, onRemove }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price * (item.quantity ?? 1), 0);
    return (_jsx("div", { className: "cart-popup-overlay", onClick: onClose, children: _jsxs("div", { className: "cart-popup", onClick: (e) => e.stopPropagation(), children: [_jsx("h2", { children: "Your Cart" }), _jsx("button", { className: "close-btn", onClick: onClose, children: "\u00D7" }), cartItems.length === 0 ? (_jsx("p", { className: "empty", children: "Your cart is empty" })) : (_jsx("ul", { className: "cart-items", children: cartItems.map((item) => (_jsxs("li", { className: "cart-item", children: [_jsxs("span", { children: [item.name, " (x", item.quantity ?? 1, ")"] }), _jsxs("span", { children: ["Ksh ", item.price * (item.quantity ?? 1)] }), _jsx("button", { onClick: () => onRemove(item.id), className: "remove-btn", children: "Remove" })] }, item.id))) })), _jsxs("div", { className: "cart-footer", children: [_jsxs("strong", { children: ["Total: Ksh ", total.toFixed(2)] }), _jsx("button", { className: "checkout-btn", onClick: onCheckout, children: "Checkout" })] })] }) }));
};
export default CartPopup;
