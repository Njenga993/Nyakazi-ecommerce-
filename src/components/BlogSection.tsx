import { useState, useEffect } from 'react';
import { FaWhatsapp, FaSearch, FaCalendarAlt, FaUser, FaTags, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../styles/Blog.css"; // Import your CSS styles

interface BlogPost {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  link: string;
  featured?: boolean;
}

const BlogSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Sample blog data with expanded content
  const blogPosts: BlogPost[] = [
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

  return (
    <div className="blog-page">
      {/* Blog Header */}
      <header className="blog-header">
        <div className="container">
          <h1>Nyakazi Organics Blog</h1>
          <p className="subtitle">Insights on sustainable farming, nutrition, and community engagement</p>
          
          <div className="search-container">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="blog-main">
        <div className="container">
          {/* Featured Post */}
          {featuredPost && (
            <div className="featured-post">
              <div className="featured-image">
                <img src={featuredPost.image} alt={featuredPost.title} />
                <div className="featured-badge">Featured</div>
              </div>
              <div className="featured-content">
                <div className="post-meta">
                  <span><FaCalendarAlt /> {new Date(featuredPost.date).toLocaleDateString()}</span>
                  <span><FaUser /> {featuredPost.author}</span>
                </div>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>
                <Link to={featuredPost.link} className="read-more">
                  Read Full Article <FaArrowRight />
                </Link>
              </div>
            </div>
          )}

          {/* Categories */}
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={activeCategory === category.id ? 'active' : ''}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          {isLoading ? (
            <div className="loading-posts">
              <div className="spinner"></div>
              <p>Loading articles...</p>
            </div>
          ) : (
            <div className="blog-grid">
              {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <article key={post.id} className="blog-card">
                    <div className="card-image">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="card-content">
                      <div className="post-meta">
                        <span><FaCalendarAlt /> {new Date(post.date).toLocaleDateString()}</span>
                        <span><FaUser /> {post.author}</span>
                      </div>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <div className="post-tags">
                        {post.tags.map(tag => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                      <Link to={post.link} className="read-more">
                        Read More <FaArrowRight />
                      </Link>
                    </div>
                  </article>
                ))
              ) : (
                <div className="no-results">
                  <h3>No articles found</h3>
                  <p>Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          )}

          {/* Newsletter Subscription */}
          <div className="newsletter-section">
            <div className="newsletter-content">
              <h3>Stay Updated with Our Latest Articles</h3>
              <p>Subscribe to our newsletter for monthly insights on organic farming and healthy living</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email address" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/+254792940014" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    </div>
  );
};


export default BlogSection;
