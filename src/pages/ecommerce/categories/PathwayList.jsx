import React from 'react';
import { getProductsByCategory, formatCurrency } from '../../../data/products';
import Button from '../../../components/common/Button';
import Card from '../../../components/common/Card';
import './CategoryPages.css';

const PathwayList = () => {
  const pathways = getProductsByCategory('Pathways');

  return (
    <div className="product-category-page pathways-list fade-in">
      <section className="section category-hero bg-gray">
        <div className="container text-center">
          <span className="category-tag">Phase 4: Complete Guidance</span>
          <h1>Full Pathway <span className="text-primary">Packages</span></h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            High-trust, high-commitment offerings for families seeking end-to-end management 
            of the global education journey.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2 gap-16 items-center mb-16">
            <div>
              <h2 className="mb-6">Who Needs a Full Pathway?</h2>
              <p className="text-gray-700 text-lg mb-8">
                The global admission landscape is increasingly complex and competitive. 
                Full pathways are for families who value consistency, expert monitoring, 
                and a single point of responsibility for the student's success.
              </p>
              <div className="space-y-4">
                <div className="p-4 border border-gray-100 rounded-xl">
                  <span className="font-bold block mb-1">Consistency</span>
                  <p className="text-sm text-gray-500">Same advisor from Grade 11 through to enrollment.</p>
                </div>
                <div className="p-4 border border-gray-100 rounded-xl">
                  <span className="font-bold block mb-1">Strategic Oversight</span>
                  <p className="text-sm text-gray-500">Not just filling forms; we manage the student's 'brand'.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <h3 className="mb-6">Guidance Over Time</h3>
              <div className="journey-vertical">
                <div className="journey-point mb-8 flex gap-6">
                  <div className="dot w-4 h-4 bg-black rounded-full mt-1 shrink-0"></div>
                  <div>
                    <span className="font-bold block">Years 1-2: Readiness</span>
                    <p className="text-sm text-gray-500">Profile building, test prep, domain research.</p>
                  </div>
                </div>
                <div className="journey-point mb-8 flex gap-6">
                  <div className="dot w-4 h-4 bg-black rounded-full mt-1 shrink-0"></div>
                  <div>
                    <span className="font-bold block">Application Season</span>
                    <p className="text-sm text-gray-500">Selection, Essay drafting, SOP audits.</p>
                  </div>
                </div>
                <div className="journey-point flex gap-6">
                  <div className="dot w-4 h-4 bg-black rounded-full mt-1 shrink-0"></div>
                  <div>
                    <span className="font-bold block">Post-Admission</span>
                    <p className="text-sm text-gray-500">Visa support, orientation, transition planning.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pathway-packages-grid">
            {pathways.map(item => (
              <Card key={item.id} className="guided-product-card p-0 overflow-hidden border-2 border-black">
                <div className="p-10">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Premium Guidance</span>
                      <h2>{item.name}</h2>
                    </div>
                    <div className="text-right">
                      <span className="price-tag font-bold text-2xl">{formatCurrency(item.price)}</span>
                      <p className="text-xs text-gray-400 mt-1">Starting Price</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-lg mb-8">{item.description}</p>
                  
                  <div className="grid grid-2 gap-8 mb-10">
                    <div className="meta-item">
                      <span className="label">Ideal For:</span>
                      <span className="value">{item.whoItIsFor}</span>
                    </div>
                    <div className="meta-item">
                      <span className="label">Advisor Involvement:</span>
                      <span className="value font-bold text-black">{item.advisorInvolvement}</span>
                    </div>
                    <div className="meta-item">
                      <span className="label">Duration:</span>
                      <span className="value">{item.duration}</span>
                    </div>
                    <div className="meta-item">
                      <span className="label">Capacity:</span>
                      <span className="value">Limited to 15 students/cycle</span>
                    </div>
                  </div>

                  <div className="features-columns grid grid-2 gap-6 mb-10">
                    {item.features.map((f, idx) => (
                      <div key={idx} className="flex gap-3 text-sm">
                        <span className="text-black">●</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="primary" size="large" fullWidth onClick={() => window.location.href='/contact'}>
                    Book a Pathway Consultation
                  </Button>
                </div>
                <div className="card-footer bg-gray-50 p-6 text-center">
                  <p className="text-sm font-medium text-gray-600">{item.whatItUnlocks}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PathwayList;
