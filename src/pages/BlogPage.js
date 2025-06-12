import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BlogSection from '../components/BlogSection';
import HeroCarousel from '../components/HeroCarousel';
import AboutSection from '../components/AboutSection';
import PillarsSection from '../components/PillarsSection';
import ContactSection from '../components/ContactSection';
const BlogPage = () => {
    return (_jsxs("div", { className: "blog-page-wrapper", children: [_jsx(BlogSection, {}), _jsx(HeroCarousel, {}), _jsx(AboutSection, {}), _jsx(PillarsSection, {}), _jsx(ContactSection, {})] }));
};
export default BlogPage;
