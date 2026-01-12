import React from 'react';
import { getProductsByCategory, formatCurrency } from '../../../data/products';
import Button from '../../../components/common/Button';
import Card from '../../../components/common/Card';
import './CategoryPages.css';

const AssessmentList = () => {
  const assessments = getProductsByCategory('Assessments');

  return (
    <div className="product-category-page assessments-list fade-in">
      <section className="section category-hero bg-gray">
        <div className="container text-center">
          <span className="category-tag">Phase 1: Assess</span>
          <h1>Scientific <span className="text-primary">Assessments</span></h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Clarity is built, not found. Our scientific assessments reduce confusion and risk 
            by providing a data-backed foundation for every decision.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2 gap-12 items-center mb-16">
            <div>
              <h2 className="mb-6">Why Assessments Come First</h2>
              <p className="text-gray-700 mb-6">
                Most students jump straight into applications. This is why 60% of students regret 
                their initial course choice within the first year.
              </p>
              <ul className="check-list">
                <li>Identify hidden natural strengths</li>
                <li>Remove external bias from career picking</li>
                <li>Align academic interests with industry demand</li>
              </ul>
            </div>
            <div className="bg-white p-8 border border-gray-100 rounded-3xl shadow-sm">
              <h4 className="mb-4">Assessment Logic</h4>
              <div className="logic-step p-4 border-l-2 border-black mb-4">
                <span className="font-bold">Step 1: Intake</span>
                <p className="text-sm text-gray-500">Psychometric and interest-based inputs.</p>
              </div>
              <div className="logic-step p-4 border-l-2 border-black mb-4">
                <span className="font-bold">Step 2: Analysis</span>
                <p className="text-sm text-gray-500">Cross-referencing with global university standards.</p>
              </div>
              <div className="logic-step p-4 border-l-2 border-black">
                <span className="font-bold">Step 3: Outcome</span>
                <p className="text-sm text-gray-500">A clear readiness map for your future.</p>
              </div>
            </div>
          </div>

          <div className="product-grid">
            {assessments.map(item => (
              <Card key={item.id} className="guided-product-card p-0 overflow-hidden">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3>{item.name}</h3>
                    <span className="price-tag font-bold">{formatCurrency(item.price)}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  
                  <div className="product-meta mb-8 space-y-3">
                    <div className="meta-item">
                      <span className="label">Who it's for:</span>
                      <span className="value">{item.whoItIsFor}</span>
                    </div>
                    <div className="meta-item">
                      <span className="label">Time Required:</span>
                      <span className="value">{item.timeRequired}</span>
                    </div>
                    <div className="meta-item">
                      <span className="label">Outcome:</span>
                      <span className="value">{item.outcome}</span>
                    </div>
                  </div>

                  <Button variant="primary" fullWidth onClick={() => window.location.href=`/products/${item.id}`}>
                    Take Assessment
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

      {/* Sample Insights */}
      <section className="section bg-black text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">Sample Reports</h2>
            <p className="text-gray-400">See the level of detail we provide to guide your journey.</p>
          </div>
          <div className="grid grid-2 gap-12">
            <div className="bg-gray-900 aspect-video rounded-2xl border border-gray-800 flex items-center justify-center">
              <span className="text-gray-600">[Report Preview: Career Mapping]</span>
            </div>
            <div className="bg-gray-900 aspect-video rounded-2xl border border-gray-800 flex items-center justify-center">
              <span className="text-gray-600">[Report Preview: Strength Analysis]</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssessmentList;
