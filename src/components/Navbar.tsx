// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Import the CSS styles (extract your styles here)

const Navbar: React.FC = () => {
  return (
    <header className="nyakazi-header position-relative">
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <p className="mb-0">
                <span className="highlight-text">New!</span> Organic Spices and Herbs now available.{" "}
                <a><Link to="/products" className="highlight-text" data-text="Products"> Click Me! </Link></a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg organic-navbar">
        <div className="container-fluid px-lg-5">
          <Link to="/" className="navbar-brand">
            <div className="brand-container">
              <img className="brand-logo" src="/logo_processed.jpg" alt="Nyakazi Organics" />

            </div>
          </Link>

          {/* Mobile Search Toggle */}
          <button className="btn search-toggle d-lg-none order-1 me-2" type="button" data-bs-toggle="collapse" data-bs-target="#mobileSearch" aria-expanded="false">
            <i className="fas fa-search"></i>
          </button>

          {/* Hamburger Menu */}
          <button className="navbar-toggler custom-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false">
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav mx-auto animated-nav">
              <li className="nav-item"><Link to="/home" className="nav-link active" data-text="Home">Home</Link></li>
              <li className="nav-item"><a className="nav-link" href="#about" data-text="About">About</a></li>
              <li className="nav-item"><Link to="/products" className="nav-link active" data-text="Products">Products</Link></li>
              <li className="nav-item"><a className="nav-link" href="#pillars" data-text="Values">Values</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact" data-text="Contact">Contact</a></li>
              <li className="nav-item"><Link to="/blog" className="nav-link" data-text="Blog">Blog</Link></li>
            </ul>

            {/* Utilities: Search, Social, Cart */}
            <div className="navbar-utilities d-flex align-items-center">
              <div className="search-wrapper d-none d-lg-block">
                <button className="search-toggle-btn" type="button" data-bs-toggle="collapse" data-bs-target="#desktopSearch" aria-expanded="false">
                  <i className="fas fa-search"></i>
                </button>
                <div className="collapse search-collapse" id="desktopSearch">
                  <form className="search-form">
                    <input type="text" placeholder="Search vegetables..." className="search-input" />
                    <button type="submit" className="search-submit"><i className="fas fa-arrow-right"></i></button>
                  </form>
                </div>
              </div>

              <div className="social-links">
                <a href="https://wa.me/+254792940014" className="social-link whatsapp-pulse" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i><span className="pulse-effect"></span>
                </a>
                <a href="#" className="social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              </div>

              <div className="cart-wrapper">
                <button className="cart-btn" type="button">
                  <i className="fas fa-shopping-basket"></i>
                  <span className="cart-count">0</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Search */}
      <div className="collapse" id="mobileSearch">
        <div className="container-fluid py-2 bg-light">
          <form className="mobile-search-form">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search vegetables..." />
              <button className="btn btn-success" type="submit">Search</button>
            </div>
          </form>
        </div>
      </div>
        <div className="pillars-decor">
            <div className="floating-leaf pillar-leaf-1"></div>
              <div className="floating-leaf pillar-leaf-2"></div>
            <div className="floating-leaf pillar-leaf-3"></div>
          </div>
    </header>
  );
};

export default Navbar;
