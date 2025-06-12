import { jsx as _jsx } from "react/jsx-runtime";
import BlogSection from '../components/BlogSection';
import '../styles/BlogPage.css'; // Assuming you have a CSS file for styling
const BlogPage = () => {
    return (_jsx("div", { className: "blog-page-wrapper", children: _jsx(BlogSection, {}) }));
};
export default BlogPage;
