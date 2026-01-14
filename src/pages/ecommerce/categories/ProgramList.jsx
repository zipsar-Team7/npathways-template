import React from "react";
import { getProductsByCategory, formatCurrency } from "../../../data/products";
import Button from "../../../components/common/Button";
import ProductSidebar from "./ProductSidebar";
import "./CategoryPages.css";

const ProgramList = () => {
  const programs = getProductsByCategory("Programs");

  return (
    <div className="product-category-page fade-in">
      <section className="bg-gray-50 py-20 text-center border-b border-gray-100">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">Structured Programs</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Mid-term engagements for sustained growth and mentorship.
          </p>
        </div>
      </section>

      <section className="service-single-layout">
        <div className="container">
          <div className="service-single-grid">
            <ProductSidebar />

            <div className="category-content">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                alt="Programs Overview"
                className="category-hero-image"
              />

              <h2>Sustained Mentorship & Growth</h2>
              <p className="lead">
                Sometimes a short sprint isn't enough. Our structured programs
                provide 3-6 months of continuous engagement, ensuring you stay
                on track with your academic and extracurricular goals through
                consistent mentorship.
              </p>

              {/* Features Grid */}
              <div className="features-grid-2">
                <div className="feature-box">
                  <h4>Regular Check-ins</h4>
                  <p className="text-sm">
                    Bi-weekly 1:1 sessions with your dedicated mentor to track
                    progress and adjust strategies.
                  </p>
                </div>
                <div className="feature-box">
                  <h4>Progress Tracking</h4>
                  <p className="text-sm">
                    Quarterly reports on your readiness index and milestone
                    achievements.
                  </p>
                </div>
                <div className="feature-box">
                  <h4>Resource Library</h4>
                  <p className="text-sm">
                    Unlimited access to templates, guides, and tools for essays,
                    resumes, and more.
                  </p>
                </div>
                <div className="feature-box">
                  <h4>Expert Network</h4>
                  <p className="text-sm">
                    Connect with university alumni and industry professionals in
                    your field of interest.
                  </p>
                </div>
              </div>

              {/* Our Benefits */}
              <h3 className="text-2xl font-bold mb-6 mt-12">
                Program Benefits
              </h3>
              <ul className="benefits-list">
                <li>
                  <div className="icon">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="text">
                    <h5>Dedicated Advisor</h5>
                    <p>
                      One primary mentor who knows your journey intimately and
                      guides you from start to finish.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="text">
                    <h5>Accountability Framework</h5>
                    <p>
                      Structured milestones and deadlines to keep you moving
                      forward consistently.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="text">
                    <h5>Community Support</h5>
                    <p>
                      Join a cohort of students with similar goals for peer
                      learning and motivation.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="text">
                    <h5>Guaranteed Outcomes</h5>
                    <p>
                      90% of program graduates achieve their stated goals within
                      the timeline.
                    </p>
                  </div>
                </li>
              </ul>

              {/* Process */}
              <h3 className="text-2xl font-bold mb-6 mt-12">
                How Our Programs Work
              </h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Intake & Goal Setting</h4>
                    <p>
                      Complete assessment and define clear, measurable
                      objectives with your advisor.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Customized Roadmap</h4>
                    <p>
                      Receive a personalized action plan with weekly and monthly
                      milestones.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Execution & Support</h4>
                    <p>
                      Regular mentorship sessions, resource access, and
                      continuous progress tracking.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Review & Next Steps</h4>
                    <p>
                      Quarterly evaluations and recommendations for continued
                      growth beyond the program.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="mb-8 font-bold text-2xl mt-12">
                Available Programs
              </h3>

              <div className="content-product-list">
                {programs.map((item) => (
                  <div key={item.id} className="product-list-item">
                    <div className="product-list-item-content">
                      <h3>{item.name}</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        {item.description}
                      </p>
                      <div className="product-meta-row">
                        <span className="meta-label">Duration:</span>
                        <span>{item.duration}</span>
                        <span className="meta-sep">|</span>
                        <span className="meta-label">Format:</span>
                        <span>{item.deliveryModel}</span>
                      </div>
                    </div>
                    <div className="product-list-item-actions">
                      <span className="price">
                        {formatCurrency(item.price)}
                      </span>
                      <Button
                        variant="premium"
                        size="medium"
                        onClick={() =>
                          (window.location.href = `/products/${item.id}`)
                        }
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="contact-cta-box">
                <h3>Not Sure Which Program Fits Your Needs?</h3>
                <p>
                  Let our advisors help you choose the right path based on your
                  profile and goals.
                </p>
                <Button
                  variant="premium-outline"
                  size="large"
                  onClick={() => (window.location.href = "/contact")}
                  className="mt-4"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramList;
