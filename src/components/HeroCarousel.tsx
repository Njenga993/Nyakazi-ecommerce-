import React, { useState, useEffect } from 'react';
import '../styles/HeroCarousel.css';
import managuImg from '/Managu-600x400.png';
import terereImg from '/Terere-600x400.png';
import spiderPlantImg from '/spices.jpg';

const slides = [
  {
    tag: "From Nature's Heart",
    heading: "NYAKAZI ORGANICS",
    tagline: "Fresh from Kenya's Fertile Soils",
    description: "At Nyakazi Organics, we bring you premium organic vegetables from small-scale farmers across Our Beloved Country. Our youth-led social enterprise is committed to sustainable farming and community development.",
    primaryText: "Contact Us",
    primaryLink: "mailto:nyakaziorganics@gmail.com",
    secondaryText: "Learn More",
    secondaryLink: "#about",
    image: managuImg,
    alt: "Fresh Managu"
  },
  {
    tag: "Naturally Preserved",
    heading: "SUN-DRIED GOODNESS",
    tagline: "Traditional Methods, Modern Nutrition",
    description: "Our unique sun-drying process preserves nutrients and flavor in every 50g package. Enjoy convenient, long-lasting organic vegetables that bring authentic taste to your kitchen all year round.",
    notice: "Available",
    noticeText: "Nationwide delivery",
    primaryText: "Order Now",
    primaryLink: "mailto:nyakaziorganics@gmail.com",
    secondaryText: "Learn More",
    secondaryLink: "#about",
    image: terereImg,
    alt: "Organic Terere"
  },
  {
    tag: "Sustainable Future",
    heading: "COMMUNITY IMPACT",
    tagline: "Empowering Farmers, Nourishing Communities",
    description: "Your purchase supports sustainable farming and local communities. Join our movement for a healthier planet, empowered farmers, and nutritious food that respects both people and nature.",
    primaryText: "Partner With Us",
    primaryLink: "mailto:nyakaziorganics@gmail.com",
    secondaryText: "Our Mission",
    secondaryLink: "#pillars",
    image: spiderPlantImg,
    alt: "Spider Plant"
  }
];

const HeroCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  // Auto-rotation for the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!transitioning) {
        setTransitioning(true);
        setActiveIndex((prev) => (prev + 1) % slides.length);
        setTimeout(() => setTransitioning(false), 700); // Match this with your CSS transition time
      }
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, [transitioning]);

  const goToSlide = (index: number) => {
    if (!transitioning) {
      setTransitioning(true);
      setActiveIndex(index);
      setTimeout(() => setTransitioning(false), 700);
    }
  };

  return (
    <section className="hero-section position-relative">
      <div className="carousel-progress-container">
        {slides.map((_, index) => (
          <div 
            key={index} 
            className={`carousel-progress ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            <div className="progress-fill"></div>
          </div>
        ))}
      </div>

      <div className="hero-carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`carousel-item ${index === activeIndex ? 'active' : ''} ${index === (activeIndex - 1 + slides.length) % slides.length ? 'prev' : ''} ${index === (activeIndex + 1) % slides.length ? 'next' : ''}`}
            >
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-md-6">
                    <div className="carousel-content">
                      <div className="content-wrapper">
                        <div className="content-tag">{slide.tag}</div>
                        <h1 className="animated-text">{slide.heading}</h1>
                        <p className="hero-tagline">{slide.tagline}</p>
                        <div className="hero-description">
                          <p>{slide.description}</p>
                        </div>
                        
                        {slide.notice && (
                          <div className="delivery-notice">
                            <span className="notice-badge pulse-animation">{slide.notice}</span>
                            <span className="notice-text">{slide.noticeText}</span>
                          </div>
                        )}
                        
                        <div className="action-wrapper">
                          <a href={slide.primaryLink} className="primary-btn hover-effect">
                            {slide.primaryText}
                            <span className="btn-icon">→</span>
                          </a>
                          <a href={slide.secondaryLink} className="secondary-btn hover-effect">
                            {slide.secondaryText}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="image-container">
                      <div className="image-overlay"></div>
                      <img src={slide.image} className="feature-image" alt={slide.alt} />
                      <div className="image-accents">
                        <div className="accent accent-1"></div>
                        <div className="accent accent-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control carousel-control-prev" onClick={() => goToSlide((activeIndex - 1 + slides.length) % slides.length)}>
          <span className="carousel-arrow">‹</span>
        </button>
        <button className="carousel-control carousel-control-next" onClick={() => goToSlide((activeIndex + 1) % slides.length)}>
          <span className="carousel-arrow">›</span>
        </button>
      </div>

      <div className="carousel-scroll-indicator">
        <div className="scroll-down">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;