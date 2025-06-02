import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import Footer from './components/Footer';
import Loader from './components/Loader'; // 👈 import loader
import { CartProvider } from './context/CartContext';
function App() {
    const location = useLocation();
    const [showLayout, setShowLayout] = useState(true);
    const [loading, setLoading] = useState(true); // 👈 loader state
    // Show/hide Navbar + Footer
    useEffect(() => {
        setShowLayout(location.pathname !== '/h');
    }, [location]);
    // Loader timer (once on mount)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500); // 2.5s delay
        return () => clearTimeout(timer);
    }, []);
    // Show loader first
    if (loading) {
        return _jsx(Loader, {});
    }
    return (_jsx(CartProvider, { children: _jsxs("div", { className: "App", children: [showLayout && _jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/Nyakazi-ecommerce-", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/blog", element: _jsx(BlogPage, {}) }), _jsx(Route, { path: "/products", element: _jsx(ProductsPage, {}) })] }), showLayout && _jsx(Footer, {})] }) }));
}
export default App;
