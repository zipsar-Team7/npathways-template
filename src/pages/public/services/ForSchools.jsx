import React from 'react';
import Button from '../../../components/common/Button';
import Card from '../../../components/common/Card';
import { CommonDataSection, CatalogueItem } from '../../../components/services/ServicesCommon';
import './ForSchools.css';

const ForSchools = () => {
  const schoolResources = [
    {
      type: "Research Paper",
      title: "Impact of Early Career Literacy",
      description: "A study on student outcomes when career clarity is introduced at the high-school level."
    },
    {
      type: "Brochure",
      title: "Institutional Services Guide 2026",
      description: "Complete list of programs, workshops, and audits we provide to partner schools."
    },
    {
      type: "Case Study",
      title: "Global Readiness at Scale",
      description: "How we implemented a global readiness framework for a network of 500+ students."
    }
  ];

  return (
    <div className="services-page for-schools fade-in">
      {/* Hero Section */}
      <section className="section services-hero school-hero">
        <div className="container">
          <h1 className="mb-6">For Schools</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl">
            “This is a structured partner, not a vendor.” We work institutionally to align academic 
            goals with global student outcomes.
          </p>
          <Button variant="primary" size="large" onClick={() => window.location.href='/contact'}>
            Partner With NPathways
          </Button>
        </div>
      </section>

      {/* Partnership Model */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-2 gap-16 items-center">
            <div>
              <h2 className="mb-8">Institutional Partnership Model</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  We don't just provide services; we integrate with your existing academic calendar 
                  to provide a long-term collaboration approach.
                </p>
                <div className="p-6 bg-gray-50 border-r-4 border-black border-l-0 text-right">
                  <h4 className="mb-2">Long-term Focus</h4>
                  <p className="text-sm text-gray-600">
                    Programs designed to run over 1-3 years for consistent student growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-2 gap-4">
              <Card className="p-6 border-black border-t-2">
                <h4>Academic Alignment</h4>
                <p className="text-sm text-gray-600">Mapping career readiness to school curricula.</p>
              </Card>
              <Card className="p-6 border-black border-t-2">
                <h4>Systemic Impact</h4>
                <p className="text-sm text-gray-600">Standardizing counseling across the entire grade.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Provided */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-16">Institutional Services</h2>
          <div className="grid grid-4 gap-6">
            <div className="institutional-service-box">
              <div className="service-number">01</div>
              <h4>Guidance Systems</h4>
              <p>End-to-end digital systems for school counselors to track student progress.</p>
            </div>
            <div className="institutional-service-box">
              <div className="service-number">02</div>
              <h4>Readiness Audits</h4>
              <p>Annual audit of students to identify clarity and skill gaps at the cohort level.</p>
            </div>
            <div className="institutional-service-box">
              <div className="service-number">03</div>
              <h4>Parent Engagement</h4>
              <p>Structured sessions to align parent expectations with student capability.</p>
            </div>
            <div className="institutional-service-box">
              <div className="service-number">04</div>
              <h4>Transition Readiness</h4>
              <p>Specific programs for Grade 12 students moving to global institutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Exposure */}
      <section className="section bg-black text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">Global & Industry Exposure</h2>
            <p className="text-gray-400">Connecting your students to established international ecosystems.</p>
          </div>
          <div className="grid grid-2 gap-12">
            <div className="p-10 border border-gray-700 rounded-3xl">
              <h3 className="text-white mb-6">Partner Regions</h3>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="px-4 py-2 bg-gray-800 rounded-full">North America</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full">United Kingdom</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full">European Union</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full">Australia & NZ</span>
              </div>
              <p className="mt-8 text-gray-400 text-sm">
                *We facilitate institutional connections and readiness alignment with universities in these regions.
              </p>
            </div>
            <div className="p-10 border border-gray-700 rounded-3xl">
              <h3 className="text-white mb-6">Global Readiness Alignment</h3>
              <p className="text-lg text-gray-300">
                Our programs ensure students meet the 'Global Entry' standards of top-tier 
                international institutions, focusing on profile strength and skill readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Catalogue */}
      <section className="section catalog-section">
        <div className="container">
          <h2 className="mb-12">Institutional Resource Catalogue</h2>
          <CatalogueItem category="School Administration Resources" items={schoolResources} />
        </div>
      </section>

      <CommonDataSection />

      {/* Final CTA */}
      <section className="section text-center bg-gray-50">
        <div className="container">
          <h2 className="mb-6">Begin Your Institutional Partnership</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Schedule a consultation to discuss how NPathways can integrate with your school's 
            existing counseling framework and enhance student readiness.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary" size="large" onClick={() => window.location.href='/contact'}>
              Partner With NPathways
            </Button>
            <Button variant="outline" size="large" onClick={() => window.location.href='/contact'}>
              Request Institutional Overview
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForSchools;
