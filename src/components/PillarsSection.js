import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../styles/pillars.css";
const PillarsSection = () => {
    return (_jsxs("section", { id: "pillars", className: "nyakazi-pillars-section", children: [_jsxs("div", { className: "pillars-decor", children: [_jsx("div", { className: "floating-leaf pillar-leaf-1" }), _jsx("div", { className: "floating-leaf pillar-leaf-2" }), _jsx("div", { className: "floating-leaf pillar-leaf-3" })] }), _jsxs("div", { className: "container-fluid px-lg-5", children: [_jsx("div", { className: "row", children: _jsx("div", { className: "col-12 text-center", children: _jsxs("div", { className: "pillars-header", children: [_jsxs("h2", { className: "section-title", children: ["Our ", _jsx("span", { className: "highlight-text", children: "Pillars" })] }), _jsxs("div", { className: "title-underline", children: [_jsx("span", { className: "underline-dot" }), _jsx("span", { className: "underline-line" }), _jsx("span", { className: "underline-dot" })] }), _jsx("p", { className: "section-subtitle", children: "The foundations that guide our organic farming philosophy" })] }) }) }), _jsx("div", { className: "row g-4 mt-4", children: [
                            {
                                title: "Mission",
                                icon: "fas fa-bullseye",
                                description: "To Continuously Deliver Quality Organic Products Focused On Customer Needs.",
                                image: "/mission.jpeg",
                                delay: 100,
                            },
                            {
                                title: "Vision",
                                icon: "fas fa-eye",
                                description: "To be the lead provider of local, organic and sustainable food solutions.",
                                image: "/vision.jpeg",
                                delay: 200,
                            },
                            {
                                title: "Objectives",
                                icon: "fas fa-check-circle",
                                image: "/objectives.png",
                                delay: 300,
                                objectives: [
                                    "Provide healthy food options for busy scheduled individuals",
                                    "Promote decent work to the youths towards economic growth",
                                    "Improve farmers' livelihoods by providing consistent markets",
                                    "Promote sustainable food systems through value addition",
                                ],
                            },
                        ].map((pillar, index) => (_jsx("div", { className: "col-lg-4 col-md-6", children: _jsxs("div", { className: `pillar-card ${pillar.title.toLowerCase()}-card`, "data-aos": "fade-up", "data-aos-delay": pillar.delay, children: [_jsx("div", { className: "card-icon", children: _jsx("i", { className: pillar.icon }) }), _jsxs("div", { className: "card-content", children: [_jsx("h3", { children: pillar.title }), _jsx("div", { className: "divider" }), pillar.objectives ? (_jsx("ul", { className: "objectives-list", children: pillar.objectives.map((obj, i) => (_jsxs("li", { children: [_jsx("span", { className: "check-icon", children: _jsx("i", { className: "fas fa-check" }) }), " ", obj] }, i))) })) : (_jsx("p", { children: pillar.description }))] }), _jsxs("div", { className: "card-image", children: [_jsx("img", { src: pillar.image, alt: `Nyakazi Organics ${pillar.title}` }), _jsx("div", { className: "image-overlay" })] })] }) }, index))) })] })] }));
};
export default PillarsSection;
