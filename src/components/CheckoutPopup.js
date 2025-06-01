import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import '../styles/CheckoutPopup.css';
const CheckoutPopup = ({ onClose, onSubmit }) => {
    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [location, setLocation] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, whatsapp, location });
    };
    return (_jsx("div", { className: "checkout-overlay", onClick: onClose, children: _jsxs("form", { className: "checkout-popup", onClick: (e) => e.stopPropagation(), onSubmit: handleSubmit, children: [_jsx("h2", { children: "Checkout" }), _jsx("button", { className: "close-btn", onClick: onClose, children: "\u00D7" }), _jsx("input", { type: "text", placeholder: "Your Name", value: name, onChange: (e) => setName(e.target.value), required: true }), _jsx("input", { type: "tel", placeholder: "WhatsApp Number", value: whatsapp, onChange: (e) => setWhatsapp(e.target.value), required: true }), _jsx("textarea", { placeholder: "Delivery Location", value: location, onChange: (e) => setLocation(e.target.value), required: true }), _jsx("button", { type: "submit", children: "Send Order via WhatsApp" })] }) }));
};
export default CheckoutPopup;
