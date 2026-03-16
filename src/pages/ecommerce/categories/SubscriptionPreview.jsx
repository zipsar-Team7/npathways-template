import React from "react";
import { upcomingSubscriptions } from "../../../data/products";
import Button from "../../../components/common/Button";
import ProductSidebar from "./ProductSidebar";
import "./CategoryPages.css";

const SubscriptionPreview = () => {
  return (
    <div className="product-category-page fade-in">
      {/* Hero */}
      <section className="bg-gray-50 py-20 text-center border-b border-gray-100">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">Subscriptions</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Long-term continuity and priority access for students who want to
            stay connected to the global industry and academic network.
          </p>
        </div>
      </section>

      <section className="service-single-layout">
        <div className="container">
          <ProductSidebar />

          <div className="category-content">
            {/* Coming Soon Banner */}
            <div className="coming-soon-banner">
              <span className="coming-soon-badge">Coming Soon</span>
              <h2 className="text-2xl font-bold mb-4">
                Subscription Plans Under Development
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                We are finalizing our subscription models to ensure they provide
                maximum value throughout your international education and career
                journey.
              </p>
            </div>

            {/* Preview Cards */}
            <div className="subscription-preview-grid">
              {upcomingSubscriptions.map((item) => (
                <div key={item.id} className="subscription-preview-card">
                  <span className="preview-badge">Planned Offering</span>
                  <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    {item.description}
                  </p>

                  <div className="feature-list-preview mb-6">
                    {item.features.map((f, i) => (
                      <div key={i} className="feature-item">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-gray-400"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="premium-outline"
                    size="small"
                    disabled
                    fullWidth
                  >
                    Coming Soon
                  </Button>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="contact-cta-box">
              <h3>Want to be notified?</h3>
              <p>
                Join the waitlist to receive an update when our subscription
                plans go live.
              </p>
              <div className="cta-buttons">
                <Button
                  variant="premium"
                  size="large"
                  onClick={() =>
                    alert(
                      "Notification request recorded. We'll notify you when subscriptions are available!"
                    )
                  }
                >
                  Notify Me When Available
                </Button>
                <Button
                  variant="premium-outline"
                  size="large"
                  onClick={() => (window.location.href = "/products")}
                >
                  Explore Current Products
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubscriptionPreview;
