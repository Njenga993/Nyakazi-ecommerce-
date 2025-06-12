import BlogSection from '../components/BlogSection';
import HeroCarousel from '../components/HeroCarousel';
import AboutSection from '../components/AboutSection';
import PillarsSection from '../components/PillarsSection';
import ContactSection from '../components/ContactSection';

const BlogPage = () => {
  return (
    <div className="blog-page-wrapper">
      <BlogSection />
      <HeroCarousel />
      <AboutSection />
      <PillarsSection />
      <ContactSection />
    </div>
  );
};

export default BlogPage;