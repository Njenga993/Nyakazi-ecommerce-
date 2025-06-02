// Footer.tsx
import { useState } from 'react';
import '../styles/Footer.css'; // Import your CSS styles here
import { Link } from "react-router-dom";

const Footer = () => {
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  const toggleFaq = () => {
    setIsFaqOpen(!isFaqOpen);
  };

  return (
    <footer className="nyakazi-footer">
      {/* Footer main section */}
      <div className="footer-main">
        <div className="container-fluid px-lg-5">
          <div className="row g-4">
            {/* Logo and tagline section */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-brand mb-4">
                <a href="index.html">
                  <img src="./logo_processed.jpg" alt="Nyakazi Organics" className="footer-logo" />
                </a>
              </div>
              <p className="footer-tagline">
                "From Local Farms, Year Round Nutrition To Lasting Health"
              </p>
              <div className="footer-social-links mt-4">
                <a href="https://wa.me/+254792940014" className="footer-social-link whatsapp-pulse" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i>
                  <span className="pulse-effect"></span>
                </a>
                <a href="https://www.instagram.com/nyakaziorganics/" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61573147688980" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
<div className="col-lg-3 col-md-6">
  <h3 className="footer-heading">Quick Links</h3>
  <ul className="footer-links">
    <li>
      <Link to="/Nyakazi-ecommerce-" className="footer-link">
        <i className="fas fa-leaf link-icon"></i> Home
      </Link>
    </li>
    <li>
      <a href="#about" className="footer-link">
        <i className="fas fa-leaf link-icon"></i> About Us
      </a>
    </li>
        <li>
      <Link to="/products" className="footer-link">
        <i className="fas fa-leaf link-icon"></i> Products
      </Link>
    </li>
    <li>
      <a href="#pillars" className="footer-link">
        <i className="fas fa-leaf link-icon"></i> Values
      </a>
    </li>
    <li>
      <a href="#contact" className="footer-link">
        <i className="fas fa-leaf link-icon"></i> Contact
      </a>
    </li>
    <li>
      <Link to="/blog" className="footer-link">
        <i className="fas fa-leaf link-icon"></i> Blog
      </Link>
    </li>
  </ul>
</div>

            
            {/* Contact Information */}
            <div className="col-lg-3 col-md-6">
              <h3 className="footer-heading">Contact Us</h3>
              <ul className="footer-contact">
                <li>
                  <i className="fas fa-map-marker-alt contact-icon"></i>
                  <div className="contact-info">
                    <span>Along Nakuru - Nairobi Highway</span>
                    <span>Gilgil Near Kariandusi, Nakuru County</span>
                    <a href="https://maps.app.goo.gl/ZRmNXBfRNBc6xGPW7" className="location-link" target="_blank" rel="noopener noreferrer">
                      View on map <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <i className="fas fa-phone-alt contact-icon"></i>
                  <div className="contact-info">
                    <a href="tel:0792940014">0792 94 00 14</a>
                  </div>
                </li>
                <li>
                  <i className="fas fa-envelope contact-icon"></i>
                  <div className="contact-info">
                    <a href="mailto:nyakaziorganics@gmail.com">nyakaziorganics@gmail.com</a>
                    <a href="mailto:info@nyakazi.org">info@nyakazi.org</a>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Photo Gallery */}
            <div className="col-lg-3 col-md-6">
              <h3 className="footer-heading">Photo Gallery</h3>
              <div className="footer-gallery">
                <div className="gallery-grid">
                  <div className="gallery-item">
                    <img src="./Managu-600x400.png" alt="Managu" className="gallery-img" />
                  </div>
                  <div className="gallery-item">
                    <img src="./FreshMushroom.jpeg" alt="Terere" className="gallery-img" />
                  </div>
                  <div className="gallery-item">
                    <img src="./Spider-Plant.png" alt="Spider Plant" className="gallery-img" />
                  </div>
                  <div className="gallery-item">
                    <img src="./spices.jpg" alt="Spider Plant" className="gallery-img" />
                  </div>
                  <div className="gallery-item">
                    <img src="./FreshMushroom.jpeg" alt="Terere" className="gallery-img" />
                  </div>
                  <div className="gallery-item">
                    <img src="./spices.jpg" alt="Managu" className="gallery-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="faq-section">
                <h3 className={`footer-heading faq-toggle ${isFaqOpen ? 'active' : ''}`} onClick={toggleFaq}>
                  <span>Frequently Asked Questions</span>
                  <i className={`fas fa-chevron-down faq-icon ${isFaqOpen ? 'rotated' : ''}`}></i>
                </h3>
                <div className={`faq-container ${isFaqOpen ? 'active' : ''}`}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="faq-item">
                        <h4 className="faq-question">What are African Indigenous Vegetables (AIVs)?</h4>
                        <p className="faq-answer">AIVs are traditional vegetables that are native to Africa, known for their nutritional value and ability to grow in local conditions.</p>
                      </div>
                      <div className="faq-item">
                        <h4 className="faq-question">How do I store powdered vegetables?</h4>
                        <p className="faq-answer">Store powdered vegetables in a cool, dry place in an airtight container to maintain freshness.</p>
                      </div>
                      <div className="faq-item">
                        <h4 className="faq-question">Are Nyakazi Organics' products certified organic?</h4>
                        <p className="faq-answer">Yes, our products are certified.</p>
                      </div>
                      <div className="faq-item">
                        <h4 className="faq-question">How can I purchase your products?</h4>
                        <p className="faq-answer">You can purchase our products directly from our website or contact us for delivery options.</p>
                      </div>
                      <div className="faq-item">
                        <h4 className="faq-question">What is the shelf life of your dried vegetables?</h4>
                        <p className="faq-answer">Our dried vegetables have a shelf life of up to 12 months when stored properly in a cool, dry place.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="faq-item">
                        <h4 className="faq-question">Are your products gluten-free?</h4>
                        <p className="faq-answer">Yes, all of our products are naturally gluten-free as they are made from organic vegetables and mushrooms.</p>
                      </div>
                      <div className="faq-item">
                        <h4 className="faq-question">Do you offer delivery services?</h4>
                        <p className="faq-answer">Yes, we offer delivery services to different regions. Contact us to know more about delivery options.</p>
                      </div>
                      <div className="faq-item">
                        <h4 className="faq-question">What payment methods do you accept?</h4>
                        <p className="faq-answer">We accept payments via mobile money, bank transfers, and cash on delivery for local orders.</p>
                      </div>
                      <div className="faq-item">
                        <h4 className="faq-question">Can I buy your products in bulk?</h4>
                        <p className="faq-answer">Yes, we offer bulk purchases for businesses, markets, and institutions. Please contact us for more details.</p>
                      </div>
                      <div className="faq-item">
                        <h4 className="faq-question">Do you offer wholesale prices?</h4>
                        <p className="faq-answer">Yes, we offer special pricing for bulk and wholesale purchases. Reach out to us for further information.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright bar */}
      <div className="copyright-bar">
        <div className="container-fluid px-lg-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0">Copyright © {new Date().getFullYear()} NYAKAZI ORGANICS | All Rights Reserved</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="mb-0">Design & Developed by <a href="https://techlungs.co.ke/" target="_blank" rel="noopener noreferrer" className="designer-link">Techlungs</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;