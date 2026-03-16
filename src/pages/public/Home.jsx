import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../../components/common/Button";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const destinations = [
    {
      name: "United States",
      img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2070&auto=format&fit=crop",
      size: "large",
    },
    {
      name: "United Kingdom",
      img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
      size: "small",
    },
    {
      name: "Canada",
      img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop",
      size: "small",
    },
    {
      name: "Australia",
      img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2030&auto=format&fit=crop",
      size: "medium",
    },
    {
      name: "Germany",
      img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop",
      size: "medium",
    },
  ];

  return (
    <div className="home-redesign">
      {/* Hero Section - Split Layout */}
      <section className="home-hero-premium">
        <div className="container hero-split">
          <div className="hero-content-left">
            <span className="hero-badge-minimal">
              Global Education Reimagined
            </span>
            <h1 className="hero-title-premium">
              Find Your <br /> <span>Global Pathway</span>
            </h1>
            <p className="hero-desc-premium">
              Premium study abroad guidance from career discovery to
              post-arrival support. We don't just find you a university; we find
              you a future.
            </p>
            <div className="hero-actions-premium">
              <Button variant="premium" onClick={() => navigate("/contact")}>
                Book Free Consultation
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  style={{ marginLeft: "10px" }}
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
              <Button
                variant="premium-outline"
                onClick={() => navigate("/about/how-it-works")}
              >
                How It Works
              </Button>
            </div>
          </div>
          <div className="hero-visual-right">
            <div className="hero-image-container">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                alt="Student Success"
                className="hero-main-img"
              />
              <div className="stats-nugget">
                <span className="nugget-number">98%</span>
                <span className="nugget-label">Visa Success</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Course Finder */}
        {/* <div className="course-finder-container">
          <div className="finder-card">
            <div className="finder-field">
              <label>Where to?</label>
              <select>
                <option>All Destinations</option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
              </select>
            </div>
            <div className="finder-field">
              <label>Study Level</label>
              <select>
                <option>Bachelors</option>
                <option>Masters</option>
                <option>PhD</option>
              </select>
            </div>
            <div className="finder-field">
              <label>Subject</label>
              <input type="text" placeholder="e.g. Computer Science" />
            </div>
            <button className="finder-submit">Search Pathways</button>
          </div>
        </div> */}
      </section>

      {/* Services Highlight - Tour Categories Style */}
      <section className="highlights-section">
        <div className="container">
          <div className="section-header-premium">
            <span className="badge">Our Ecosystem</span>
            <h2>Complete Student Support</h2>
          </div>
          <div className="highlights-grid">
            {[
              {
                title: "Career Discovery",
                icon: "01",
                desc: "Psychometric & Ikigai mapping",
              },
              {
                title: "Admissions",
                icon: "02",
                desc: "Expert university shortlisting",
              },
              {
                title: "Visa Success",
                icon: "03",
                desc: "98% success rate in filing",
              },
              {
                title: "Support",
                icon: "04",
                desc: "Arrival & accommodation help",
              },
            ].map((item, i) => (
              <div key={i} className="highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations - Masonry Style */}
      <section className="destinations-section">
        <div className="container">
          <div className="section-header-premium">
            <span className="badge">Destinations</span>
            <h2>Popular Pathways</h2>
          </div>
          <div className="destinations-masonry">
            {destinations.map((dest, i) => (
              <div key={i} className={`dest-card ${dest.size}`}>
                <img src={dest.img} alt={dest.name} />
                <div className="dest-overlay">
                  <h3>{dest.name}</h3>
                  <Link to="/products/pathways">Explore Programs →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Slider - Brand Alliances */}
      <section className="partners-slider-section">
        <div className="container">
          <h3 className="partners-title">Our University Partners</h3>
          <div className="partners-track">
            {/* Grayscale placeholders for partner logos */}
            <div className="partner-logo">IVY LEAGUE HUB</div>
            <div className="partner-logo">RUSSELL GROUP</div>
            <div className="partner-logo">GLOBAL TECH U</div>
            <div className="partner-logo">EUROPEAN INSTITUTE</div>
            <div className="partner-logo">PACIFIC ACADEMY</div>
          </div>
        </div>
      </section>

      {/* Teaser: How It Works */}
      <section className="journey-teaser">
        <div className="container">
          <div className="teaser-box">
            <div className="teaser-text">
              <h2>The 10-Step Clarity Journey</h2>
              <p>
                From the first assessment to your first day abroad, we've
                perfected every step of the process.
              </p>
              <Link to="/about/how-it-works">
                <span style={{ color: "#fff" }}>See The Roadmap</span>
              </Link>
            </div>
            <div className="teaser-visual">
              <div className="step-blob">10</div>
              <div className="step-label">Steps to Success</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
