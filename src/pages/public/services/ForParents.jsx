import React from 'react';
import Button from '../../../components/common/Button';
import Card from '../../../components/common/Card';
import { CommonDataSection, CatalogueItem } from '../../../components/services/ServicesCommon';
import './ForParents.css';

const ForParents = () => {
  const parentalResources = [
    {
      type: "Article",
      title: "The 21st Century Career Landscape",
      description: "Understanding shifting industry requirements and the skills your child actually needs."
    },
    {
      type: "Video",
      title: "The NPathways Journey Explained",
      description: "A 5-minute guide for parents on how we manage readiness and transitions."
    },
    {
      type: "Checklist",
      title: "Readiness Milestones",
      description: "A year-by-year checklist for parents to track student growth and clarity."
    }
  ];

  return (
    <div className="services-page for-parents fade-in">
      {/* Hero Section */}
      <section className="section services-hero">
        <div className="container">
          <div className="grid grid-2 items-center">
            <div className="hero-content">
              <h1 className="mb-6">For Parents</h1>
              <p className="text-xl text-gray-700 mb-8">
                “I understand the system, I can see progress, and my child is safe.”
              </p>
              <Button variant="primary" size="large" onClick={() => window.location.href='/contact'}>
                Book a Parent Guidance Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Role Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-2 gap-12">
            <div>
              <h2 className="mb-6">The Parent's Role</h2>
              <p className="text-lg text-gray-700 mb-6">
                Navigating a student's future is a joint effort. We believe in clear boundaries and 
                collaborative decision-making.
              </p>
              <div className="role-box p-8 border-l-4 border-black bg-gray-50">
                <h4 className="mb-4">Decisions Parents Influence:</h4>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Financial planning and budget alignment</li>
                  <li>Early-stage career domain preferences</li>
                  <li>Long-term life goals and location preferences</li>
                </ul>
              </div>
            </div>
            <div className="p-8 bg-gray-900 text-white rounded-3xl">
              <h3 className="mb-6">What NPathways Handles</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Scientific profiling and aptitude mapping</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Institutional research and requirement matching</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Application mechanics and transition readiness</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Ethical, unbiased career counseling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Visibility */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Full Progress Visibility</h2>
            <p className="text-gray-600">No guesswork. Just clarity on every milestone.</p>
          </div>
          <div className="grid grid-3 gap-8">
            <Card className="p-8 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3>Real-time Tracking</h3>
              <p className="text-sm text-gray-600">Access student readiness audits and project status anytime.</p>
            </Card>
            <Card className="p-8 text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3>Milestone Clarity</h3>
              <p className="text-sm text-gray-600">Sync with annual timelines and critical decision deadlines.</p>
            </Card>
            <Card className="p-8 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3>Direct Checkpoints</h3>
              <p className="text-sm text-gray-600">Scheduled transparent updates on student clarity and gaps.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="section bg-black text-white">
        <div className="container">
          <div className="grid grid-2 gap-16 items-center">
            <div>
              <h2 className="mb-8 text-white">Safety & Ethics First</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="text-3xl text-gray-400">🔒</div>
                  <div>
                    <h4>Data Privacy</h4>
                    <p className="text-gray-400">Student profiles and data are encrypted and institutionally protected.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-3xl text-gray-400">🏛️</div>
                  <div>
                    <h4>Structured Guidance</h4>
                    <p className="text-gray-400">Evidence-based advice versus anecdotal or random decisions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-12 rounded-3xl">
              <p className="text-2xl font-light italic text-gray-300">
                "As parents, we are partners in a process that values clarity over hype. NPathways ensures 
                every decision is backed by data and student capability."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section className="section catalog-section">
        <div className="container">
          <h2 className="mb-12">Parental Resource Catalogue</h2>
          <CatalogueItem category="Featured Resources" items={parentalResources} />
        </div>
      </section>

      <CommonDataSection />

      {/* Final CTA */}
      <section className="section text-center bg-gray-50">
        <div className="container">
          <h2 className="mb-6">Ready to start the journey?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Book a guidance session specifically designed for parents to understand the NPathways 
            readiness framework and how it applies to your child.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary" size="large" onClick={() => window.location.href='/contact'}>
              Book a Parent Guidance Session
            </Button>
            <Button variant="outline" size="large" onClick={() => window.location.href='/services'}>
              Explore the Student Journey
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForParents;
