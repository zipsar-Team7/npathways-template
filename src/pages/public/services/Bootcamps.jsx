import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { supportServices } from '../../../data/services';
import Button from '../../../components/common/Button';
import './ServiceDetails.css';

const Bootcamps = () => {
  const service = supportServices.find(s => s.id === 'bootcamps');
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
            <span className="text-black font-medium">Bootcamps</span>
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
                {supportServices.map(s => (
                  <li key={s.id} className="sidebar-nav-item">
                    <Link 
                      to={s.link} 
                      className={`sidebar-nav-link ${location.pathname === s.link ? 'active' : ''}`}
                    >
                      {s.name}
                      <span>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-widget">
              <h3 className="widget-title">Upcoming Calendars</h3>
              <a href="#" className="download-item" onClick={(e) => e.preventDefault()}>
                <div className="download-icon">📅</div>
                <div className="download-info">
                  <span className="download-name">Spring 2024 Schedule</span>
                  <span className="download-size">PDF (1.8 MB)</span>
                </div>
              </a>
            </div>

            <div className="sidebar-widget contact-widget">
              <h3 className="widget-title">Join a Batch</h3>
              <p>Slots are limited per cohort. Register interest early.</p>
              <Button variant="outline" fullWidth onClick={() => window.location.href='/products/bootcamps'}>
                View Active Bootcamps
              </Button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="service-main-content">
            <img 
              src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=2070&auto=format&fit=crop" 
              alt="Accelerated bootcamps" 
              className="featured-image shadow-xl" 
            />
            
            <section className="service-intro mb-12">
              <h2>{service.shortDescription}</h2>
              <p className="text-xl text-gray-700 mb-8">{service.longDescription}</p>
              
              <h3>Bootcamp Highlights</h3>
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
              <h3>What You Gain</h3>
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
              <h3>Bootcamp FAQ</h3>
              <div className="faq-accordion">
                {service.faq.map((item, index) => (
                  <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(index)}>
                      <span>{item.question}</span>
                      <span>{openFaq === index ? '−' : '+'}</span>
                    </div>
                    {openFaq === index && (
                      <div className="faq-answer fade-in">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Bootcamps;
