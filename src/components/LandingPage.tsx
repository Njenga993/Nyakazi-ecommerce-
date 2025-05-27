// src/components/LandingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css'; // Import the CSS styles for the landing page


const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title">Pure. Organic. Nutritious.</h1>
              <p className="hero-subtitle">Nyakazi Organics brings you the finest sun-dried vegetables and herbs straight from nature's bounty</p>
              <div className="hero-cta">
                <Link to="/home" className="btn btn-primary me-3">Shop Now</Link>
                <Link to="/AboutSection" className="btn btn-outline">Learn More</Link>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="hero-image-container">
                <img 
                  src="/Managu-600x400.png" 
                  alt="Organic vegetables" 
                  className="hero-image"
                />
                <div className="leaf-decoration leaf-1"></div>
                <div className="leaf-decoration leaf-2"></div>
                <div className="leaf-decoration leaf-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Nature's Best, Delivered to You</h2>
          </div>
          <div className="row">
            <div className="col-md-4 feature-card">
              <div className="feature-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>100% Organic</h3>
              <p>Certified organic produce grown without synthetic pesticides or fertilizers.</p>
            </div>
            <div className="col-md-4 feature-card">
              <div className="feature-icon">
                <i className="fas fa-sun"></i>
              </div>
              <h3>Sun-Dried</h3>
              <p>Naturally preserved using traditional sun-drying methods to retain nutrients.</p>
            </div>
            <div className="col-md-4 feature-card">
              <div className="feature-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Healthy Living</h3>
              <p>Promoting wellness through nutrient-rich, chemical-free food products.</p>
            </div>
          </div>
        </div>
      </section>

      
      

      
    </div>
  );
};

export default LandingPage;