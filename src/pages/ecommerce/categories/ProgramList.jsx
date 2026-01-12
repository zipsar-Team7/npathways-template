import React from 'react';
import { getProductsByCategory, formatCurrency } from '../../../data/products';
import Button from '../../../components/common/Button';
import Card from '../../../components/common/Card';
import './CategoryPages.css';

const ProgramList = () => {
  const programs = getProductsByCategory('Programs');

  return (
    <div className="product-category-page programs-list fade-in">
      <section className="section category-hero bg-gray">
        <div className="container text-center">
          <span className="category-tag">Phase 3: Execute</span>
          <h1>Structured <span className="text-primary">Programs</span></h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Mid-term structured engagements designed to guide students through the complexities 
            of transition and readiness at scale.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2 gap-12 items-center mb-16">
            <div>
              <h2 className="mb-6">When Programs are Recommended</h2>
              <p className="text-gray-700 mb-6">
                Programs are ideal for students who need more than a quick intervention. They 
                provide the continuity and structural support needed to manage long-term 
                academic and profile goals.
              </p>
              <div className="p-6 bg-black text-white rounded-2xl">
                <h4 className="mb-4">Program Outcome Logic</h4>
                <p className="text-sm text-gray-400">
                  Assess {'->'} Align {'->'} Execute. Our programs ensure that the hard work of 
                  preparation is done systematically, not frantically.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 border border-gray-100 rounded-3xl shadow-sm">
              <h4 className="mb-6">Who should choose this?</h4>
              <ul className="check-list space-y-4">
                <li>
                  <strong>Grade 10/11 Students:</strong> Who want to build a profile without burnout.
                </li>
                <li>
                  <strong>Institutional Partners:</strong> Schools looking for a standard framework for cohorts.
                </li>
                <li>
                  <strong>Career Switchers:</strong> Students moving to radically different global domains.
                </li>
              </ul>
            </div>
          </div>

          <div className="product-grid">
            {programs.map(item => (
              <Card key={item.id} className="guided-product-card p-0 overflow-hidden">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3>{item.name}</h3>
                    <span className="price-tag font-bold">{formatCurrency(item.price)}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  
                  <div className="product-meta mb-8 space-y-3">
                    <div className="meta-item">
                      <span className="label">Target Audience:</span>
                      <span className="value">{item.whoItIsFor}</span>
                    </div>
                    <div className="meta-item">
                      <span className="label">Duration:</span>
                      <span className="value">{item.duration}</span>
                    </div>
                    <div className="meta-item">
                      <span className="label">Delivery Model:</span>
                      <span className="value">{item.deliveryModel}</span>
                    </div>
                  </div>

                  <Button variant="primary" fullWidth onClick={() => window.location.href=`/products/${item.id}`}>
                    Explore Programs
                  </Button>
                </div>
                <div className="card-footer bg-gray-50 p-4 text-center">
                  <p className="text-xs text-gray-400">{item.whatItUnlocks}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramList;
