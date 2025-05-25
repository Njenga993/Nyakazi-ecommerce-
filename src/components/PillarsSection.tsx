import React from "react";
import "../styles/pillars.css";

const PillarsSection: React.FC = () => {
  return (
    <section id="pillars" className="nyakazi-pillars-section">
      {/* Decorative elements */}
      <div className="pillars-decor">
        <div className="floating-leaf pillar-leaf-1"></div>
        <div className="floating-leaf pillar-leaf-2"></div>
        <div className="floating-leaf pillar-leaf-3"></div>
      </div>

      <div className="container-fluid px-lg-5">
        {/* Header */}
        <div className="row">
          <div className="col-12 text-center">
            <div className="pillars-header">
              <h2 className="section-title">
                Our <span className="highlight-text">Pillars</span>
              </h2>
              <div className="title-underline">
                <span className="underline-dot"></span>
                <span className="underline-line"></span>
                <span className="underline-dot"></span>
              </div>
              <p className="section-subtitle">
                The foundations that guide our organic farming philosophy
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4 mt-4">
          {[
            {
              title: "Mission",
              icon: "fas fa-bullseye",
              description:
                "To Continuously Deliver Quality Organic Products Focused On Customer Needs.",
              image: "/mission.jpeg",
              delay: 100,
            },
            {
              title: "Vision",
              icon: "fas fa-eye",
              description:
                "To be the lead provider of local, organic and sustainable food solutions.",
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
          ].map((pillar, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className={`pillar-card ${pillar.title.toLowerCase()}-card`}
                data-aos="fade-up"
                data-aos-delay={pillar.delay}
              >
                <div className="card-icon">
                  <i className={pillar.icon}></i>
                </div>
                <div className="card-content">
                  <h3>{pillar.title}</h3>
                  <div className="divider"></div>
                  {pillar.objectives ? (
                    <ul className="objectives-list">
                      {pillar.objectives.map((obj, i) => (
                        <li key={i}>
                          <span className="check-icon">
                            <i className="fas fa-check"></i>
                          </span>{" "}
                          {obj}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{pillar.description}</p>
                  )}
                </div>
                <div className="card-image">
                  <img src={pillar.image} alt={`Nyakazi Organics ${pillar.title}`} />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
