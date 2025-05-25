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

      {/* Products Showcase */}
      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Products</span>
            <h2 className="section-title">Premium Organic Selection</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="product-card">
                <div className="product-badge">New</div>
                <img src="/Managu-600x400.png" alt="Dried Vegetables" className="product-image" />
                <div className="product-details">
                  <h3>Sun-Dried Vegetables</h3>
                  <p className="product-description">Perfect for soups, stews, and year-round nutrition.</p>
                  <Link to="/products/dried" className="product-link">Explore <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="product-card">
                <img src="/Managu-600x400.png" alt="Fresh Vegetables" className="product-image" />
                <div className="product-details">
                  <h3>Fresh Vegetables</h3>
                  <p className="product-description">Seasonal, farm-fresh produce delivered to your doorstep.</p>
                  <Link to="/products/fresh" className="product-link">Explore <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="product-card">
                <img src="/Managu-600x400.png" alt="Vegetable Powders" className="product-image" />
                <div className="product-details">
                  <h3>Vegetable Powders</h3>
                  <p className="product-description">Concentrated nutrition for smoothies and cooking.</p>
                  <Link to="/products/powders" className="product-link">Explore <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="product-card">
                <div className="product-badge">Popular</div>
                <img src="/Managu-600x400.png" alt="Gift Packages" className="product-image" />
                <div className="product-details">
                  <h3>Gift Packages</h3>
                  <p className="product-description">Thoughtful presents for health-conscious loved ones.</p>
                  <Link to="/products/gifts" className="product-link">Explore <i className="fas fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Link to="/products" className="btn btn-outline-primary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">What Our Customers Say</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="testimonial-text">"The sun-dried vegetables have become a staple in my kitchen. The flavor is incredible and they're so convenient!"</p>
                <div className="testimonial-author">
                  <img src="/Managu-600x400.png" alt="Sarah K." className="author-avatar" />
                  <div>
                    <h4>Sarah K.</h4>
                    <p>Nairobi</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="testimonial-text">"I love knowing exactly where my food comes from. Nyakazi's transparency is as good as their products."</p>
                <div className="testimonial-author">
                  <img src="/Managu-600x400.png" alt="James M." className="author-avatar" />
                  <div>
                    <h4>James M.</h4>
                    <p>Mombasa</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <p className="testimonial-text">"The vegetable powders are a game-changer for my morning smoothies. So much nutrition in just a spoonful!"</p>
                <div className="testimonial-author">
                  <img src="/Managu-600x400.png" alt="Amina W." className="author-avatar" />
                  <div>
                    <h4>Amina W.</h4>
                    <p>Kisumu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Nature's Goodness?</h2>
            <p>Join our community of health-conscious individuals today.</p>
            <div className="cta-buttons">
              <Link to="/shop" className="btn btn-light me-3">Shop Now</Link>
              <Link to="/contact" className="btn btn-outline-light">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;