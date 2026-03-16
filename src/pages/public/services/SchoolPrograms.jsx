import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { supportServices } from "../../../data/services";
import Button from "../../../components/common/Button";
import "./ServiceDetails.css";

const SchoolPrograms = () => {
  const service = supportServices.find((s) => s.id === "school-programs");
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState(null);

  if (!service) return null;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="service-detail-page fade-in">
      {/* Hero / Breadcrumb */}
      <section className="service-hero bg-gray">
        <div className="container text-center">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <span className="text-black font-medium">Programs</span>
          </nav>
          <h1>{service.name}</h1>
        </div>
      </section>

      <div className="container">
        <div className="service-layout-grid">
          {/* Sidebar */}
          <aside className="service-sidebar">
            <div className="sidebar-widget">
              <h3 className="widget-title">All Services</h3>
              <ul className="sidebar-nav">
                {supportServices.map((s) => (
                  <li key={s.id} className="sidebar-nav-item">
                    <Link
                      to={s.link}
                      className={`sidebar-nav-link ${
                        location.pathname === s.link ? "active" : ""
                      }`}
                    >
                      {s.name}
                      <span>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Fixed Image Panel */}
          <div className="service-image-panel">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
              alt="Structured school programs"
            />
          </div>

          {/* Main Content */}
          <main className="service-main-content">
            <section className="service-intro mb-12">
              <h2>{service.shortDescription}</h2>
              <p className="text-xl text-gray-700 mb-8">
                {service.longDescription}
              </p>

              <h3>Program Modules</h3>
              <ul className="check-list space-y-4 mb-10">
                {service.features.map((f, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-black font-bold">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="benefits-section mb-12">
              <h3>Core Advantages</h3>
              <div className="benefits-grid">
                {service.benefits.map((b, i) => (
                  <div key={i} className="benefit-card">
                    <h4>{b.title}</h4>
                    <p>{b.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="faq-section">
              <h3>Program FAQ</h3>
              <div className="faq-accordion">
                {service.faq.map((item, index) => (
                  <div key={index} className="faq-item">
                    <div
                      className="faq-question"
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{item.question}</span>
                      <span>{openFaq === index ? "−" : "+"}</span>
                    </div>
                    {openFaq === index && (
                      <div className="faq-answer fade-in">{item.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Program Catalog Section - Moved from Sidebar */}
            <section className="resources-section mb-12">
              <h3>Program Catalog</h3>
              <div className="resources-grid">
                <a
                  href="#"
                  className="download-item"
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="download-icon">🏦</div>
                  <div className="download-info">
                    <span className="download-name">
                      Structured Programs Catalog
                    </span>
                    <span className="download-size">PDF (3.0 MB)</span>
                  </div>
                </a>
              </div>
            </section>

            {/* Start Your Program CTA - Moved from Sidebar */}
            <section className="help-cta-section">
              <div className="help-cta-box">
                <h3>Start Your Program</h3>
                <p>Programs designed to fit into your academic calendar.</p>
                <Button
                  variant="premium"
                  size="large"
                  onClick={() => (window.location.href = "/products/programs")}
                >
                  View Active Programs
                </Button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SchoolPrograms;
