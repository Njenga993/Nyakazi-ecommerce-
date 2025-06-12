import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
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
const HeroCarousel = () => {
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
    const goToSlide = (index) => {
        if (!transitioning) {
            setTransitioning(true);
            setActiveIndex(index);
            setTimeout(() => setTransitioning(false), 700);
        }
    };
    return (_jsxs("section", { className: "hero-section position-relative", children: [_jsx("div", { className: "carousel-progress-container", children: slides.map((_, index) => (_jsx("div", { className: `carousel-progress ${index === activeIndex ? 'active' : ''}`, onClick: () => goToSlide(index), children: _jsx("div", { className: "progress-fill" }) }, index))) }), _jsxs("div", { className: "hero-carousel", children: [_jsx("div", { className: "carousel-inner", children: slides.map((slide, index) => (_jsx("div", { className: `carousel-item ${index === activeIndex ? 'active' : ''} ${index === (activeIndex - 1 + slides.length) % slides.length ? 'prev' : ''} ${index === (activeIndex + 1) % slides.length ? 'next' : ''}`, children: _jsx("div", { className: "container-fluid p-0", children: _jsxs("div", { className: "row g-0", children: [_jsx("div", { className: "col-md-6", children: _jsx("div", { className: "carousel-content", children: _jsxs("div", { className: "content-wrapper", children: [_jsx("div", { className: "content-tag", children: slide.tag }), _jsx("h1", { className: "animated-text", children: slide.heading }), _jsx("p", { className: "hero-tagline", children: slide.tagline }), _jsx("div", { className: "hero-description", children: _jsx("p", { children: slide.description }) }), slide.notice && (_jsxs("div", { className: "delivery-notice", children: [_jsx("span", { className: "notice-badge pulse-animation", children: slide.notice }), _jsx("span", { className: "notice-text", children: slide.noticeText })] })), _jsxs("div", { className: "action-wrapper", children: [_jsxs("a", { href: slide.primaryLink, className: "primary-btn hover-effect", children: [slide.primaryText, _jsx("span", { className: "btn-icon", children: "\u2192" })] }), _jsx("a", { href: slide.secondaryLink, className: "secondary-btn hover-effect", children: slide.secondaryText })] })] }) }) }), _jsx("div", { className: "col-md-6", children: _jsxs("div", { className: "image-container", children: [_jsx("div", { className: "image-overlay" }), _jsx("img", { src: slide.image, className: "feature-image", alt: slide.alt }), _jsxs("div", { className: "image-accents", children: [_jsx("div", { className: "accent accent-1" }), _jsx("div", { className: "accent accent-2" })] })] }) })] }) }) }, index))) }), _jsx("button", { className: "carousel-control carousel-control-prev", onClick: () => goToSlide((activeIndex - 1 + slides.length) % slides.length), children: _jsx("span", { className: "carousel-arrow", children: "\u2039" }) }), _jsx("button", { className: "carousel-control carousel-control-next", onClick: () => goToSlide((activeIndex + 1) % slides.length), children: _jsx("span", { className: "carousel-arrow", children: "\u203A" }) })] }), _jsx("div", { className: "carousel-scroll-indicator", children: _jsxs("div", { className: "scroll-down", children: [_jsx("span", { children: "Scroll Down" }), _jsx("div", { className: "scroll-arrow" })] }) })] }));
};
export default HeroCarousel;
