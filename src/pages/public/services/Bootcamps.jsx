import React from 'react';
import Button from '../../../components/common/Button';
import Card from '../../../components/common/Card';
import './Bootcamps.css';

const Bootcamps = () => {
  const bootcamps = [
    {
      name: "Global Career Blueprint",
      audience: "Grades 10-12",
      duration: "4 Weeks",
      mode: "Hybrid",
      description: "Intensive domain exploration and profile building for global aspirants."
    },
    {
      name: "Skill-Up Accelerator",
      audience: "Undergraduates",
      duration: "2 Weeks",
      mode: "Online",
      description: "Focused intervention to bridge technical and soft skill gaps for internships."
    },
    {
      name: "Transition Readiness",
      audience: "Final Year Students",
      duration: "3 Weeks",
      mode: "Hybrid",
      description: "Preparing for the cultural and academic shift to international universities."
    }
  ];

  return (
    <div className="services-page bootcamps-page fade-in">
      {/* Hero Section */}
      <section className="section services-hero bootcamp-hero">
        <div className="container">
          <div className="grid grid-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">Accelerator Bootcamps</h1>
              <p className="text-xl text-gray-700 mb-8">
                Positioned as accelerators, not just courses. Our bootcamps are intensive interventions 
                designed to build specific readiness dimensions in record time.
              </p>
              <div className="flex gap-4">
                <Button variant="primary" size="large" onClick={() => window.location.href='/contact'}>
                  View Upcoming Bootcamps
                </Button>
                <Button variant="outline" size="large" onClick={() => window.location.href='/services/assessments'}>
                  Check Readiness First
                </Button>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
              <h3 className="mb-6">The Bootcamp Philosophy</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h5 className="font-bold">Focused Interventions</h5>
                    <p className="text-sm text-gray-600">Deep dives into specific domains rather than broad overviews.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h5 className="font-bold">Outcome Driven</h5>
                    <p className="text-sm text-gray-600">Every bootcamp ends with a tangible project or profile addition.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bootcamp Listings */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-center mb-16">Active & Upcoming Bootcamps</h2>
          <div className="grid grid-3 gap-8">
            {bootcamps.map((camp, index) => (
              <Card key={index} className="bootcamp-card p-0 overflow-hidden" hoverable>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{camp.mode}</span>
                    <span className="text-xs font-bold bg-gray-100 px-3 py-1 rounded-full">{camp.duration}</span>
                  </div>
                  <h3 className="mb-4">{camp.name}</h3>
                  <p className="text-sm text-gray-600 mb-6">{camp.description}</p>
                  <div className="border-t pt-4">
                    <span className="text-xs text-gray-400">Target Audience</span>
                    <p className="text-sm font-semibold">{camp.audience}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-2 gap-16 items-center">
            <div className="p-10 bg-black text-white rounded-3xl">
              <h2 className="text-white mb-8">What You Gain</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-green-400">⚡</span>
                  <p>Strengthened academic and professional profiles for university applications.</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400">⚡</span>
                  <p>Tangible skill sets validated through hands-on projects.</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-green-400">⚡</span>
                  <p>Networking opportunities with industry mentors and peers.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-6">When to Choose a Bootcamp?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Bootcamps are recommended when a student has identified a clarity gap or needs a 
                rapid profile boost before application cycles.
              </p>
              <Button variant="outline" size="large" onClick={() => window.location.href='/contact'}>
                Get Recommendation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section text-center">
        <div className="container">
          <h2 className="mb-6">Fuel Your Readiness</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Our bootcamps are curated for high-impact results. Explore the full schedule and 
            secure your spot in the next cohort.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary" size="large" onClick={() => window.location.href='/contact'}>
              View Upcoming Bootcamps
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bootcamps;
