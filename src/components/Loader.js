import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Leaf } from 'lucide-react';
import '../styles/Loader.css'; // Adjust the path as necessary
const Loader = () => {
    return (_jsxs("div", { className: "loader-wrapper", children: [_jsx("div", { className: "leaf-spinner", children: _jsx(Leaf, { className: "leaf-icon", size: 48 }) }), _jsx("p", { className: "loader-text", children: "Loading Freshness..." })] }));
};
export default Loader;
