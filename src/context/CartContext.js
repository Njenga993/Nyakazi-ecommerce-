import { jsx as _jsx } from "react/jsx-runtime";
// src/context/CartContext.tsx
import { createContext, useContext, useState } from "react";
const CartContext = createContext(undefined);
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };
    const removeFromCart = (productId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== productId));
    };
    const clearCart = () => setCartItems([]);
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    return (_jsx(CartContext.Provider, { value: { cartItems, addToCart, removeFromCart, clearCart, getTotalPrice }, children: children }));
};
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context)
        throw new Error("useCart must be used within a CartProvider");
    return context;
};
