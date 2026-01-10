import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-content">
          <div className="hero-text fade-in">
            <div className="hero-badge">
              <span className="hero-badge-icon"></span>
              <span>Trusted by students from 55+ countries</span>
            </div>
            <h1 className="hero-title">
              Study Abroad with <span className="accent">Clarity</span> & Confidence
            </h1>
            <p className="hero-description">
              From career discovery to visa success — NPathways guides students and families at every step of their journey.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">
                Free Fitment Test
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-secondary">
                Explore Services
              </button>
            </div>
          </div>
          <div className="hero-image slide-up">
            <div className="hero-image-placeholder">
              <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
                <circle cx="150" cy="150" r="120" fill="rgba(191, 255, 153, 0.1)"/>
                <path d="M100 150 L150 100 L200 150 L150 200 Z" fill="rgba(198, 206, 240, 0.3)"/>
                <circle cx="150" cy="150" r="40" fill="var(--accent-primary)"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card fade-in">
            <div className="stat-number">500+</div>
            <div className="stat-label">Students Placed</div>
          </div>
          <div className="stat-card fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="stat-number">98%</div>
            <div className="stat-label">Visa Success Rate</div>
          </div>
          <div className="stat-card fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="stat-number">50+</div>
            <div className="stat-label">University Partners</div>
          </div>
          <div className="stat-card fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="stat-number">15+</div>
            <div className="stat-label">Countries Covered</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <span className="section-badge">Comprehensive Support</span>
          <h2 className="section-title">Everything you need for your study abroad journey</h2>
          <p className="section-description">
            Expert guidance at every step of your international education journey
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card fade-in">
            <div className="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="service-title">Global Education Consulting</h3>
            <p className="service-description">
              University shortlisting and admission support
            </p>
            <a href="/services" className="service-link">
              Learn More →
            </a>
          </div>

          <div className="service-card fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="service-title">Career Guidance</h3>
            <p className="service-description">
              1-on-1 personalized strategy sessions
            </p>
            <a href="/services" className="service-link">
              Learn More →
            </a>
          </div>

          <div className="service-card fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 8H17M7 12H17M7 16H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="service-title">Visa Assistance</h3>
            <p className="service-description">
              End-to-end documentation and filing support
            </p>
            <a href="/services" className="service-link">
              Learn More →
            </a>
          </div>

          <div className="service-card fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="service-title">Profile Building & Skill Readiness</h3>
            <p className="service-description">
              Admission-ready and future-ready. We help students build winning profiles.
            </p>
            <a href="/services" className="service-link">
              Learn More →
            </a>
          </div>

          <div className="service-card fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 9L12 2L21 9V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="service-title">Departure & Arrival Support</h3>
            <p className="service-description">
              Sim-cards | Fx | Bank & accommodation registration
            </p>
            <a href="/services" className="service-link">
              Learn More →
            </a>
          </div>

          <div className="service-card fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="service-title">Flagship Programs</h3>
            <p className="service-description">
              Flagship programs to prepare for study&nbsp;abroad - ISAs, IELTS, GRE, etc.
            </p>
            <a href="/shop" className="service-link">
              Learn More →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Start creating clear, concise plans within minutes</h2>
          <p className="cta-description">
            Join hundreds of students who have successfully achieved their study abroad dreams with NPathways
          </p>
          <button className="btn-primary">
            Get Started for Free
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
