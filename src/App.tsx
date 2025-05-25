import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import BlogPage from './pages/BlogPage'
import HomePage from './pages/HomePage'
import LandingPage from './components/LandingPage';
import { CartProvider } from './context/CartContext'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

function App() {
  const location = useLocation();
  const [showLayout, setShowLayout] = useState(true);

  useEffect(() => {
    // Hide navbar and footer only on the landing page ("/")
    setShowLayout(location.pathname !== '/');
  }, [location]);

  return (
    <CartProvider>
      <div className="App">
        {showLayout && <Navbar />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        {showLayout && <Footer />}
      </div>
    </CartProvider>
  )
}

export default App