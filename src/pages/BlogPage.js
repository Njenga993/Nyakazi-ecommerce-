import { jsx as _jsx } from "react/jsx-runtime";
import BlogSection from '../components/BlogSection';
const BlogPage = () => {
    return (_jsx("div", { className: "blog-page-wrapper", children: _jsx(BlogSection, {}) }));
};
export default BlogPage;
