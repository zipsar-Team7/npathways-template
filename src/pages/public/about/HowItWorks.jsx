import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./AboutGeneral.css";

const HowItWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      num: "01",
      title: "Clarity Compass™ Assessment",
      desc: "We start with a deep dive into your strengths and EQ. This isn't just a test; it's your career foundation.",
    },
    {
      num: "02",
      title: "Global Goal Mapping",
      desc: "Identifying the right countries and industry trends that align with your long-term residency and career goals.",
    },
    {
      num: "03",
      title: "University Matchmaking",
      desc: "Comparing curricula, research opportunities, and lifestyle to find your perfect academic home.",
    },
    {
      num: "04",
      title: "Skill Gap Analysis",
      desc: "If your profile lacks certain technical or soft skills, we fill them through our specialized bootcamps.",
    },
    {
      num: "05",
      title: "Story-Driven Applications",
      desc: "We help you craft SOPs that aren't just templates, but powerful narratives of your individual growth.",
    },
    {
      num: "06",
      title: "Financial Architecture",
      desc: "Navigating education loans, scholarships, and budgeting for a stress-free transition.",
    },
    {
      num: "07",
      title: "The Visa Siege",
      desc: "Meticulous documentation and mock interviews to ensure your entry is seamless and successful.",
    },
    {
      num: "08",
      title: "Pre-Departure Orientation",
      desc: "Cultural hacks, banking setup, and survival skills for your first 30 days in a new country.",
    },
    {
      num: "09",
      title: "Settling In",
      desc: "Assistance with accommodation coordination and your first week of administrative hurdles.",
    },
    {
      num: "10",
      title: "On-Going Mentorship",
      desc: "We remain your partner throughout your degree and during your first job search abroad.",
    },
  ];

  return (
    <div className="about-shared-page">
      {/* Hero Section */}
      <section className="about-hero-minimal">
        <div className="about-container">
          <div className="breadcrumbs">Home / About / How It Works</div>
          <h1>
            Your 10-Step Journey <br /> <span>To Global Success</span>
          </h1>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section style={{ padding: "8rem 0" }}>
        <div className="about-container">
          <div className="about-section-header">
            <span className="badge">The Roadmap</span>
            <h2>How We Build Your Future</h2>
            <p>
              From the first spark of an idea to your first job in a new
              country, we are with you every single step of the way.
            </p>
          </div>

          <div
            style={{
              position: "relative",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            {/* Vertical Line */}
            <div
              style={{
                position: "absolute",
                left: "50px",
                top: "0",
                bottom: "0",
                width: "1px",
                backgroundColor: "#eee",
                zIndex: 0,
              }}
            ></div>

            {steps.map((step, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "3rem",
                  marginBottom: "5rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundColor: "#000",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    flexShrink: 0,
                    boxShadow: "0 0 0 10px #fff",
                  }}
                >
                  {step.num}
                </div>

                <div
                  style={{
                    padding: "2.5rem",
                    backgroundColor: "#fff",
                    border: "1px solid #f0f0f0",
                    borderRadius: "12px",
                    flex: 1,
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  className="step-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#000";
                    e.currentTarget.style.transform = "translateX(10px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#f0f0f0";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <h3 style={{ marginBottom: "1rem", color: "#000" }}>
                    {step.title}
                  </h3>
                  <p style={{ color: "#666", lineHeight: "1.7", margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section
        style={{ backgroundColor: "#121212", padding: "8rem 0", color: "#fff" }}
      >
        <div className="about-container">
          <div className="about-grid-2">
            <div>
              <span
                style={{
                  color: "#888",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                }}
              >
                Our Philosophy
              </span>
              <h2
                style={{ fontSize: "3rem", margin: "1.5rem 0", color: "#fff" }}
              >
                Beyond Admissions
              </h2>
              <p
                style={{ color: "#aaa", fontSize: "1.2rem", lineHeight: "1.8" }}
              >
                Most consultants stop after the visa sticker is on your
                passport. At NPathways, that's only step 7. We believe our true
                value is proven when you successfully integrate into your new
                life and career.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#1a1a1a",
                padding: "3rem",
                borderRadius: "20px",
                border: "1px solid #333",
              }}
            >
              <div style={{ marginBottom: "2rem" }}>
                <h4 style={{ color: "#fff", marginBottom: "1rem" }}>
                  ✓ Transparent Pricing
                </h4>
                <p style={{ color: "#888" }}>
                  No hidden charges or university kickbacks that bias our
                  advice.
                </p>
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <h4 style={{ color: "#fff", marginBottom: "1rem" }}>
                  ✓ Ethics Over Profit
                </h4>
                <p style={{ color: "#888" }}>
                  We only recommend universities that truly fit your profile and
                  budget.
                </p>
              </div>
              <div>
                <h4 style={{ color: "#fff", marginBottom: "1rem" }}>
                  ✓ Mentorship for Life
                </h4>
                <p style={{ color: "#888" }}>
                  Join an exclusive alumni network of students already thriving
                  abroad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: "10rem 0", textAlign: "center" }}>
        <div className="about-container">
          <h2 style={{ fontSize: "3rem", marginBottom: "2rem" }}>
            Ready to take Step 01?
          </h2>
          <Link
            to="/services/career-assessments"
            className="about-btn-premium"
            style={{ marginBottom: "1rem" }}
          >
            Start Your Assessment
          </Link>
          <p style={{ color: "#888", marginTop: "1.5rem" }}>
            Join 10,000+ students who started their journey with us.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
