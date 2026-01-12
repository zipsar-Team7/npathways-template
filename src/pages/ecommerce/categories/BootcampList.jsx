import React from 'react';
import { getProductsByCategory, formatCurrency } from '../../../data/products';
import Button from '../../../components/common/Button';
import Card from '../../../components/common/Card';
import './CategoryPages.css';

const BootcampList = () => {
  const bootcamps = getProductsByCategory('Bootcamps');

  return (
    <div className="product-category-page bootcamps-list fade-in">
      <section className="section category-hero bg-gray">
        <div className="container text-center">
          <span className="category-tag">Phase 2: Accelerate</span>
          <h1>Intensive <span className="text-primary">Bootcamps</span></h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Positioned as accelerators, not just courses. Our bootcamps are intensive interventions 
            designed to build specific readiness dimensions in record time.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
                <h3 className="mb-6">The Bootcamp Philosophy</h3>
                <div className="space-y-8">
                  <div className="philosophy-item">
                    <h4 className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs">1</span>
                      Focused Interventions
                    </h4>
                    <p className="text-sm text-gray-600 mt-2 ml-11">
                      Deep dives into specific domains rather than broad overviews.
                    </p>
                  </div>
                  <div className="philosophy-item">
                    <h4 className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs">2</span>
                      Outcome Driven
                    </h4>
                    <p className="text-sm text-gray-600 mt-2 ml-11">
                      Every bootcamp ends with a tangible project or profile addition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="mb-6">Why Bootcamps Work</h2>
              <p className="text-gray-700 mb-6">
                Standard academic profiles are often not enough for elite global universities. 
                Our bootcamps provide the practical edge and specialization that sets students apart.
              </p>
              <ul className="check-list">
                <li>Build a provable portfolio in weeks</li>
                <li>Interact with global industry experts</li>
                <li>Gain priority access to pathway mentorship</li>
              </ul>
            </div>
          </div>

          <div className="product-grid">
            {bootcamps.map(item => (
              <Card key={item.id} className="guided-product-card p-0 overflow-hidden">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3>{item.name}</h3>
                    <span className="price-tag font-bold">{formatCurrency(item.price)}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  
                  <div className="product-meta mb-8 space-y-3">
                    <div className="meta-item">
                      <span className="label">Focus Area:</span>
                      <span className="value">Global Admissions & Profile Strength</span>
                    </div>
                    <div className="meta-item">
                      <span className="label">Duration:</span>
                      <span className="value">{item.duration}</span>
                    </div>
                    <div className="meta-item">
                      <span className="label">Mode:</span>
                      <span className="value">{item.mode}</span>
                    </div>
                  </div>

                  <Button variant="primary" fullWidth onClick={() => window.location.href=`/products/${item.id}`}>
                    View Details
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

      {/* Profile Impact */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12">Outcome & Profile Impact</h2>
          <div className="grid grid-3 gap-8">
            <Card className="p-8 border-gray-100 border text-center">
              <div className="text-3xl mb-4">📄</div>
              <h4>Portfolio Check</h4>
              <p className="text-sm text-gray-600">Verification of projects by industry professionals.</p>
            </Card>
            <Card className="p-8 border-gray-100 border text-center">
              <div className="text-3xl mb-4">🏆</div>
              <h4>Certificate of Completion</h4>
              <p className="text-sm text-gray-600">A verified credential for your university application.</p>
            </Card>
            <Card className="p-8 border-gray-100 border text-center">
              <div className="text-3xl mb-4">🤝</div>
              <h4>Networking</h4>
              <p className="text-sm text-gray-600">Access to a network of like-minded global aspirants.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BootcampList;
