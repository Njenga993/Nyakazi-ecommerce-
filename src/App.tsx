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
    return <Loader />;
  }

  return (
    <CartProvider>
      <div className="App">
        {showLayout && <Navbar />}
        <Routes>
          <Route path="/Nyakazi-ecommerce-" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/products" element={<ProductsPage />} />
          {/* More routes can go here */}
        </Routes>
        {showLayout && <Footer />}
      </div>
    </CartProvider>
  );
}

export default App;
