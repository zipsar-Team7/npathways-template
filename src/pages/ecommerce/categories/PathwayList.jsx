import React from "react";
import { Link } from "react-router-dom";
import { getProductsByCategory, formatCurrency } from "../../../data/products";
import Button from "../../../components/common/Button";
import ProductSidebar from "./ProductSidebar";
import "./CategoryPages.css";

const PathwayList = () => {
  const pathways = getProductsByCategory("Pathways");

  return (
    <div className="product-category-page fade-in">
      {/* Hero */}
      <section className="bg-gray-50 py-20 text-center border-b border-gray-100">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">Full Pathways</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            End-to-end guidance from today until your first day on campus.
          </p>
        </div>
      </section>

      <section className="service-single-layout">
        <div className="container">
          <ProductSidebar />

          <div className="category-content">
            <div className="product-card-grid">
              {pathways.map((item) => (
                <div key={item.id} className="product-card">
                  <div className="product-card-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="product-card-body">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="product-card-meta">
                      <span>Duration: {item.duration}</span>
                    </div>
                    <div className="product-card-footer">
                      <span className="price">
                        {formatCurrency(item.price)}
                      </span>
                      <Link to={`/products/${item.id}`}>
                        <Button variant="premium" size="small">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PathwayList;
