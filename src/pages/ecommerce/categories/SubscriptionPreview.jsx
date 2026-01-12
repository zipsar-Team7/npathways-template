import React from 'react';
import { upcomingSubscriptions } from '../../../data/products';
import Button from '../../../components/common/Button';
import Card from '../../../components/common/Card';
import './CategoryPages.css';

const SubscriptionPreview = () => {
  return (
    <div className="product-category-page subscriptions-list fade-in">
      <section className="section category-hero bg-gray">
        <div className="container text-center">
          <span className="category-tag bg-gray-400">Phase 5: Continuity</span>
          <h1>Mentorship <span className="text-primary">Subscriptions</span></h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Long-term continuity and priority access for students who want to stay connected 
            to the global industry and academic network.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="coming-soon-banner p-12 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 text-center mb-16">
            <span className="text-xl font-bold text-gray-400 block mb-4 uppercase tracking-[0.2em]">Coming Soon</span>
            <p className="max-w-xl mx-auto text-gray-500">
              We are finalizing our subscription models to ensure they provide maximum value 
              throughout your international education and career.
            </p>
          </div>

          <div className="product-grid opacity-60 pointer-events-none grayscale">
            {upcomingSubscriptions.map(item => (
              <Card key={item.id} className="guided-product-card p-8 bg-white border border-gray-100">
                <span className="text-xs font-bold text-gray-300 uppercase mb-4 block">Planned Offering</span>
                <h3 className="mb-4">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-8">{item.description}</p>
                
                <ul className="check-list mb-8">
                  {item.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <Button variant="outline" disabled fullWidth>
                  Check Availability Later
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <h3 className="mb-6">Want to be notified?</h3>
            <p className="text-gray-600 mb-8">
              Join the waitlist to receive an update when our subscription plans go live.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="primary" onClick={() => alert('Notification request recorded.')}>
                Notify Me When Available
              </Button>
              <Button variant="outline" onClick={() => window.location.href='/products'}>
                Explore Current Products
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubscriptionPreview;
