import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { FaWhatsapp, FaSearch, FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../styles/Blog.css"; // Import your CSS styles
const BlogSection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [isLoading, setIsLoading] = useState(true);
    // Sample blog data with expanded content
    const blogPosts = [
        {
            id: 1,
            title: 'Sustainable Farming Practices',
            image: `${import.meta.env.BASE_URL}./Managu-600x400.png`,
            excerpt: 'Discover the methods we use to promote sustainability in agriculture.',
            content: `
        <p>At Nyakazi Organics, we believe sustainable farming is not just a practice but a way of life. Our methods focus on:</p>
        <ul>
          <li>Organic pest control using natural predators</li>
          <li>Crop rotation to maintain soil health</li>
          <li>Water conservation through drip irrigation</li>
          <li>Composting to enrich our soils naturally</li>
        </ul>
        <p>These practices ensure we deliver the healthiest produce while protecting our environment.</p>
      `,
            date: '2023-09-15',
            author: 'Jane Muthoni',
            tags: ['farming', 'sustainability'],
            link: './blog/sustainable-farming',
            featured: true
        },
        {
            id: 2,
            title: 'Health Benefits of Indigenous Vegetables',
            image: `${import.meta.env.BASE_URL}./terere fresh.png`,
            excerpt: 'Learn about the nutritional advantages of incorporating indigenous vegetables into your diet.',
            content: `
        <p>Indigenous vegetables like terere, managu, and saga are nutritional powerhouses:</p>
        <div class="nutrition-facts">
          <h4>Nutritional Benefits:</h4>
          <ul>
            <li>Rich in vitamins A, C, and K</li>
            <li>High in dietary fiber</li>
            <li>Packed with essential minerals like iron and calcium</li>
            <li>Contain powerful antioxidants</li>
          </ul>
        </div>
        <p>We grow these vegetables using organic methods to preserve their maximum nutritional value.</p>
      `,
            date: '2023-08-22',
            author: 'Dr. Wanjiku Kariuki',
            tags: ['nutrition', 'health'],
            link: './blog/indigenous-vegetables'
        },
        {
            id: 3,
            title: 'Community Engagement Initiatives',
            image: `${import.meta.env.BASE_URL}./women.jpeg`,
            excerpt: 'Explore how Nyakazi Organics is making a difference in local communities.',
            content: `
        <p>Our community programs include:</p>
        <h4>Women's Empowerment</h4>
        <p>Training local women in organic farming techniques to start their own small-scale farms.</p>
        
        <h4>School Programs</h4>
        <p>Teaching children about nutrition and sustainable agriculture through school garden projects.</p>
        
        <h4>Farmer Cooperatives</h4>
        <p>Supporting local farmers with resources and market access for their organic produce.</p>
      `,
            date: '2023-07-10',
            author: 'James Kariuki',
            tags: ['community', 'empowerment'],
            link: '/blog/community-initiatives'
        },
        {
            id: 4,
            title: 'Seasonal Planting Guide',
            image: `${import.meta.env.BASE_URL}./terere fresh.png`,
            excerpt: 'Learn what to plant each season for optimal organic yields.',
            content: `
        <h4>Our Seasonal Planting Calendar</h4>
        <div class="planting-calendar">
          <div class="season">
            <h5>Long Rains (March-May)</h5>
            <p>Best for: Kale, Spinach, Tomatoes, Beans</p>
          </div>
          <div class="season">
            <h5>Short Rains (October-December)</h5>
            <p>Best for: Cabbage, Carrots, Peas, Onions</p>
          </div>
        </div>
        <p>We provide detailed guides to our cooperative farmers each season.</p>
      `,
            date: '2023-06-18',
            author: 'Samuel Njoroge',
            tags: ['farming', 'seasonal'],
            link: './blog/seasonal-planting'
        },
        {
            id: 5,
            title: 'Organic Pest Control Methods',
            image: `${import.meta.env.BASE_URL}./v1.jpg`,
            excerpt: 'Natural ways to protect your crops without harmful chemicals.',
            content: `
        <p>Our effective organic pest control strategies:</p>
        <h4>Companion Planting</h4>
        <p>Planting basil with tomatoes to repel flies and mosquitoes.</p>
        
        <h4>Natural Predators</h4>
        <p>Encouraging ladybugs and lacewings that feed on aphids.</p>
        
        <h4>Homemade Sprays</h4>
        <p>Using neem oil and chili pepper sprays as natural deterrents.</p>
      `,
            date: '2023-05-05',
            author: 'Grace Wambui',
            tags: ['farming', 'pest-control'],
            link: './blog/organic-pest-control'
        }
    ];
    const categories = [
        { id: 'all', name: 'All Articles' },
        { id: 'farming', name: 'Farming Techniques' },
        { id: 'nutrition', name: 'Nutrition' },
        { id: 'community', name: 'Community' },
        { id: 'sustainability', name: 'Sustainability' }
    ];
    useEffect(() => {
        // Simulate loading data
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'all' ||
            post.tags.includes(activeCategory);
        return matchesSearch && matchesCategory;
    });
    const featuredPost = blogPosts.find(post => post.featured);
    return (_jsxs("div", { className: "blog-page", children: [_jsx("header", { className: "blog-header", children: _jsxs("div", { className: "container", children: [_jsx("h1", { children: "Nyakazi Organics Blog" }), _jsx("p", { className: "subtitle", children: "Insights on sustainable farming, nutrition, and community engagement" }), _jsx("div", { className: "search-container", children: _jsxs("div", { className: "search-box", children: [_jsx(FaSearch, { className: "search-icon" }), _jsx("input", { type: "text", placeholder: "Search articles...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) })] }) })] }) }), _jsx("main", { className: "blog-main", children: _jsxs("div", { className: "container", children: [featuredPost && (_jsxs("div", { className: "featured-post", children: [_jsxs("div", { className: "featured-image", children: [_jsx("img", { src: featuredPost.image, alt: featuredPost.title }), _jsx("div", { className: "featured-badge", children: "Featured" })] }), _jsxs("div", { className: "featured-content", children: [_jsxs("div", { className: "post-meta", children: [_jsxs("span", { children: [_jsx(FaCalendarAlt, {}), " ", new Date(featuredPost.date).toLocaleDateString()] }), _jsxs("span", { children: [_jsx(FaUser, {}), " ", featuredPost.author] })] }), _jsx("h2", { children: featuredPost.title }), _jsx("p", { children: featuredPost.excerpt }), _jsxs(Link, { to: featuredPost.link, className: "read-more", children: ["Read Full Article ", _jsx(FaArrowRight, {})] })] })] })), _jsx("div", { className: "category-filter", children: categories.map(category => (_jsx("button", { className: activeCategory === category.id ? 'active' : '', onClick: () => setActiveCategory(category.id), children: category.name }, category.id))) }), isLoading ? (_jsxs("div", { className: "loading-posts", children: [_jsx("div", { className: "spinner" }), _jsx("p", { children: "Loading articles..." })] })) : (_jsx("div", { className: "blog-grid", children: filteredPosts.length > 0 ? (filteredPosts.map(post => (_jsxs("article", { className: "blog-card", children: [_jsx("div", { className: "card-image", children: _jsx("img", { src: post.image, alt: post.title }) }), _jsxs("div", { className: "card-content", children: [_jsxs("div", { className: "post-meta", children: [_jsxs("span", { children: [_jsx(FaCalendarAlt, {}), " ", new Date(post.date).toLocaleDateString()] }), _jsxs("span", { children: [_jsx(FaUser, {}), " ", post.author] })] }), _jsx("h3", { children: post.title }), _jsx("p", { children: post.excerpt }), _jsx("div", { className: "post-tags", children: post.tags.map(tag => (_jsx("span", { className: "tag", children: tag }, tag))) }), _jsxs(Link, { to: post.link, className: "read-more", children: ["Read More ", _jsx(FaArrowRight, {})] })] })] }, post.id)))) : (_jsxs("div", { className: "no-results", children: [_jsx("h3", { children: "No articles found" }), _jsx("p", { children: "Try adjusting your search or filter criteria" })] })) })), _jsx("div", { className: "newsletter-section", children: _jsxs("div", { className: "newsletter-content", children: [_jsx("h3", { children: "Stay Updated with Our Latest Articles" }), _jsx("p", { children: "Subscribe to our newsletter for monthly insights on organic farming and healthy living" }), _jsxs("form", { className: "newsletter-form", children: [_jsx("input", { type: "email", placeholder: "Your email address", required: true }), _jsx("button", { type: "submit", children: "Subscribe" })] })] }) })] }) }), _jsx("a", { href: "https://wa.me/+254792940014", className: "whatsapp-float", target: "_blank", rel: "noopener noreferrer", children: _jsx(FaWhatsapp, {}) })] }));
};
export default BlogSection;
