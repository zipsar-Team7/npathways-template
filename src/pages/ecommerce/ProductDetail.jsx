import { useParams, useNavigate } from "react-router-dom";
import { getProductById, formatCurrency } from "../../data/products";
import { useCart } from "../../context/CartContext";
import Button from "../../components/common/Button";
import ProductSidebar from "./categories/ProductSidebar";
import "./ProductDetail.css";
import "./categories/CategoryPages.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="section text-center">
        <h2>Product not found</h2>
        <Button onClick={() => navigate("/products")}>Back to Products</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  // Benefits based on category
  const getBenefits = () => {
    switch (product.category) {
      case "Assessments":
        return [
          {
            title: "Data-Backed Career Mapping",
            desc: "Match your cognitive strengths to 500+ global career paths.",
          },
          {
            title: "Personalized Readiness Reports",
            desc: "Detailed analysis of strengths, weaknesses, and ideal profiles.",
          },
          {
            title: "Expert Debrief Sessions",
            desc: "60-minute 1:1 consultation to interpret your results.",
          },
          {
            title: "Lifetime Access",
            desc: "Your assessment data saved and accessible anytime.",
          },
        ];
      case "Bootcamps":
        return [
          {
            title: "Portfolio-Ready Deliverables",
            desc: "Complete projects to showcase in your applications.",
          },
          {
            title: "Industry Mentor Access",
            desc: "Work directly with professionals in your target field.",
          },
          {
            title: "Skill Certifications",
            desc: "Earn verifiable certificates upon completion.",
          },
          {
            title: "Peer Collaboration",
            desc: "Network with like-minded students.",
          },
        ];
      case "Pathways":
        return [
          {
            title: "Unlimited Support Hours",
            desc: "No caps on sessions or hours until you're admitted.",
          },
          {
            title: "All Products Included",
            desc: "Full access to assessments, bootcamps, and programs.",
          },
          {
            title: "Application Management",
            desc: "We handle every detail from shortlisting to submission.",
          },
          {
            title: "Visa & Pre-Departure Support",
            desc: "Complete assistance with documentation and travel.",
          },
        ];
      default:
        return [];
    }
  };

  // Process steps based on category
  const getProcessSteps = () => {
    switch (product.category) {
      case "Assessments":
        return [
          {
            step: 1,
            title: "Complete Assessment",
            desc: "Answer psychometric questions (45-60 minutes).",
          },
          {
            step: 2,
            title: "Automated Analysis",
            desc: "AI-powered analysis of your responses.",
          },
          {
            step: 3,
            title: "Receive Report",
            desc: "Get a comprehensive PDF report within 48 hours.",
          },
          {
            step: 4,
            title: "Expert Consultation",
            desc: "Schedule a 1:1 session with our advisors.",
          },
        ];
      case "Bootcamps":
        return [
          {
            step: 1,
            title: "Foundation (Week 1)",
            desc: "Introduction to core concepts and goal setting.",
          },
          {
            step: 2,
            title: "Execution (Week 2-3)",
            desc: "Intensive project work and mentor feedback.",
          },
          {
            step: 3,
            title: "Presentation (Week 4)",
            desc: "Final submission and certification.",
          },
        ];
      case "Pathways":
        return [
          {
            step: 1,
            title: "Discovery & Assessment",
            desc: "Complete all readiness assessments (Month 1-2).",
          },
          {
            step: 2,
            title: "Profile Building",
            desc: "Enroll in bootcamps and programs (Month 3-8).",
          },
          {
            step: 3,
            title: "Application Execution",
            desc: "Craft essays and submit applications (Month 9-12).",
          },
          {
            step: 4,
            title: "Admission & Visa",
            desc: "Receive offers and complete visa (Month 13-15).",
          },
          {
            step: 5,
            title: "Pre-Departure",
            desc: "Arrange accommodation and travel (Month 16+).",
          },
        ];
      default:
        return [];
    }
  };

  // FAQ based on category
  const getFAQ = () => {
    switch (product.category) {
      case "Assessments":
        return [
          {
            q: "How accurate are these assessments?",
            a: "Our assessments have a 92% accuracy rate in predicting career satisfaction.",
          },
          {
            q: "Can I retake the assessment?",
            a: "Yes, but we recommend waiting at least 6 months between assessments.",
          },
        ];
      case "Bootcamps":
        return [
          {
            q: "Are bootcamps online or offline?",
            a: "We offer both hybrid and fully online bootcamps.",
          },
          {
            q: "Will I get a certificate?",
            a: "Yes, all graduates receive a globally recognized certificate.",
          },
        ];
      case "Pathways":
        return [
          {
            q: "When should I start?",
            a: "Ideally 12-18 months before your target application deadlines.",
          },
          {
            q: "What if I don't get admitted?",
            a: "We continue working with you for free until you do.",
          },
        ];
      default:
        return [];
    }
  };

  const benefits = getBenefits();
  const processSteps = getProcessSteps();
  const faq = getFAQ();

  return (
    <div className="product-detail-page fade-in">
      {/* Top Bar Navigation */}
      <div className="product-topbar-wrapper">
        <div className="container">
          <ProductSidebar />
        </div>
      </div>

      {/* Split Layout: Fixed Image Left, Scrollable Content Right */}
      <div className="product-split-layout">
        {/* Fixed Image Panel */}
        <div className="product-image-panel">
          <img src={product.image} alt={product.name} />
          <div className="product-price-badge">
            {formatCurrency(product.price)}
          </div>
        </div>

        {/* Scrollable Content Panel */}
        <div className="product-content-panel">
          <div className="product-content-inner">
            {/* Header */}
            <div className="product-header-section">
              <span className="category-tag">{product.category}</span>
              <h1>{product.name}</h1>
              <p className="lead">{product.description}</p>
              <div className="product-meta-info">
                {product.timeRequired && (
                  <span>Time: {product.timeRequired}</span>
                )}
                {product.duration && <span>Duration: {product.duration}</span>}
                {product.whoItIsFor && <span>For: {product.whoItIsFor}</span>}
              </div>
              <div className="product-price-inline">
                {formatCurrency(product.price)}
              </div>
              <div className="product-actions">
                <Button
                  variant="premium"
                  size="large"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="premium-outline"
                  size="large"
                  onClick={() => navigate("/checkout")}
                >
                  {product.category === "Assessments"
                    ? "Take Assessment"
                    : "Buy Now"}
                </Button>
              </div>
            </div>

            {/* Benefits */}
            {benefits.length > 0 && (
              <section className="detail-section">
                <h3>What's Included</h3>
                <ul className="benefits-list">
                  {benefits.map((b, i) => (
                    <li key={i}>
                      <div className="icon">✓</div>
                      <div className="text">
                        <h5>{b.title}</h5>
                        <p>{b.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Process Steps */}
            {processSteps.length > 0 && (
              <section className="detail-section">
                <h3>How It Works</h3>
                <div className="process-steps">
                  {processSteps.map((s, i) => (
                    <div key={i} className="process-step">
                      <div className="step-number">{s.step}</div>
                      <div className="step-content">
                        <h4>{s.title}</h4>
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ */}
            {faq.length > 0 && (
              <section className="detail-section">
                <h3>Frequently Asked Questions</h3>
                <div className="faq-section">
                  {faq.map((item, i) => (
                    <div key={i} className="faq-item">
                      <h5>{item.q}</h5>
                      <p>{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Contact CTA */}
            <div className="contact-cta-box">
              <h3>Have Questions?</h3>
              <p>Our advisors are here to help you make the right choice.</p>
              <Button
                variant="premium-outline"
                size="large"
                onClick={() => (window.location.href = "/contact")}
                className="bg-white text-black border-white"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
