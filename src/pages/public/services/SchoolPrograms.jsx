import React from 'react';
import Button from '../../../components/common/Button';
import Card from '../../../components/common/Card';
import './SchoolPrograms.css';

const SchoolPrograms = () => {
  const programs = [
    {
      name: "Career Discovery Programs",
      audience: "Grades 8-10",
      description: "Structured workshops to introduce students to the diverse landscape of modern careers."
    },
    {
      name: "Student Readiness Programs",
      audience: "Grades 11-12",
      description: "Comprehensive guidance on building global profiles and university readiness."
    },
    {
      name: "Parent Awareness Sessions",
      audience: "School Parents",
      description: "Educating parents on the shifting educational system and collaborative decision-making."
    },
    {
      name: "Faculty Development",
      audience: "School Counselors & Teachers",
      description: "Training faculty to integrate career clarity into their student interactions."
    }
  ];

  return (
    <div className="services-page school-programs fade-in">
      {/* Hero Section */}
      <section className="section services-hero school-programs-hero">
        <div className="container">
          <h1 className="mb-6">School Programs</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl">
            Clearly defined programs designed for seamless integration into academic calendars. 
            We provide the structure; schools provide the stage.
          </p>
          <Button variant="primary" size="large" onClick={() => window.location.href='/contact'}>
            Schedule a School Consultation
          </Button>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section bg-white text-center">
        <div className="container">
          <h2 className="mb-6">Why School Programs Exist</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Career guidance often feels like an 'extra' task. Our programs are designed to fit 
            naturally into the school's mission of student success, making institutional impact 
            measurable and sustainable.
          </p>
          <div className="grid grid-4 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="program-card p-8 border-gray-100 border text-center">
                <div className="text-4xl mb-6">🏫</div>
                <h4 className="mb-4">{program.name}</h4>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{program.audience}</p>
                <p className="text-sm text-gray-600">{program.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Model */}
      <section className="section bg-black text-white">
        <div className="container">
          <div className="grid grid-2 gap-16 items-center">
            <div>
              <h2 className="text-white mb-8">Our Delivery Models</h2>
              <p className="text-lg text-gray-300 mb-8">
                Every school is different. We offer flexible engagement models to ensure our 
                programs meet your institutional capacity.
              </p>
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center font-bold">W</div>
                  <div>
                    <h4>Interactive Workshops</h4>
                    <p className="text-sm text-gray-400">High-energy, focused sessions for specific cohorts.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center font-bold">L</div>
                  <div>
                    <h4>Long-term Engagements</h4>
                    <p className="text-sm text-gray-400">Ongoing guidance systems that run across the academic year.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center font-bold">A</div>
                  <div>
                    <h4>Annual Support</h4>
                    <p className="text-sm text-gray-400">Strategic partnership including audits and leadership advisory.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-12 rounded-3xl border border-gray-800">
              <h3 className="text-white mb-6">Key Statistics</h3>
              <div className="space-y-8">
                <div>
                  <h5 className="text-gray-400 uppercase tracking-widest text-xs mb-2">Student Engagement Rate</h5>
                  <div className="w-full bg-gray-800 h-2 rounded-full">
                    <div className="bg-white w-[85%] h-full rounded-full"></div>
                  </div>
                  <p className="text-right mt-2 font-bold">85%</p>
                </div>
                <div>
                  <h5 className="text-gray-400 uppercase tracking-widest text-xs mb-2">School Retention</h5>
                  <div className="w-full bg-gray-800 h-2 rounded-full">
                    <div className="bg-white w-[92%] h-full rounded-full"></div>
                  </div>
                  <p className="text-right mt-2 font-bold">92%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section text-center bg-gray-50">
        <div className="container">
          <h2 className="mb-6">Empower Your Students</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Discover how NPathways school programs can provide the structure and support your 
            institution needs to build long-term student success.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary" size="large" onClick={() => window.location.href='/contact'}>
              Explore School Programs
            </Button>
            <Button variant="outline" size="large" onClick={() => window.location.href='/contact'}>
              Schedule a School Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolPrograms;
