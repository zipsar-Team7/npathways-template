import React from 'react';
import Button from '../../../components/common/Button';
import Card from '../../../components/common/Card';
import './CareerAssessments.css';

const CareerAssessments = () => {
  const assessments = [
    {
      title: "Psychometric Assessment",
      purpose: "Map cognitive patterns and personality traits.",
      who: "Students in Grades 8-10 looking for early direction.",
      outcome: "Scientific identification of natural strengths."
    },
    {
      title: "Career Interest Mapping",
      purpose: "Align academic interests with industry domains.",
      who: "High schoolers (Grades 11-12) finalizing career paths.",
      outcome: "List of top 3 career domains for future study."
    },
    {
      title: "Readiness & Gap Analysis",
      purpose: "Compare current skills against global university standards.",
      who: "Global aspirants aiming for top-tier institutions.",
      outcome: "A personalized roadmap to bridge skill gaps."
    },
    {
      title: "Skill & Aptitude Snapshot",
      purpose: "Quick evaluation of quantitative and verbal logic.",
      who: "Students preparing for entrance or competitive exams.",
      outcome: "Baseline scores and areas of improvement."
    }
  ];

  return (
    <div className="services-page career-assessments fade-in">
      {/* Hero Section */}
      <section className="section services-hero assessment-hero text-center">
        <div className="container">
          <h1 className="mb-6">Career & Assessments</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Clarity is built, not found. Our scientific assessments reduce confusion and risk 
            by providing a data-backed foundation for every decision.
          </p>
          <Button variant="primary" size="large" onClick={() => window.location.href='/contact'}>
            Book a Career Discovery Session
          </Button>
        </div>
      </section>

      {/* Assessment Catalogue */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-center mb-16">Assessment Catalogue</h2>
          <div className="grid grid-2 bg-gray-50 rounded-3xl overflow-hidden border border-gray-100">
            {assessments.map((test, index) => (
              <div key={index} className="assessment-item p-10 border-b border-r border-gray-200 hover:bg-white transition-colors">
                <h3 className="mb-4">{test.title}</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Purpose</span>
                    <p className="text-sm text-gray-600">{test.purpose}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Who it’s for</span>
                    <p className="text-sm text-gray-600">{test.who}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Outcome</span>
                    <p className="text-sm font-semibold text-black">{test.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Outputs */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">Actionable Insights, Not Just Scores</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our reports don't just give you a number. They provide a narrative of the student's 
                potential and a clear path forward.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-2"><strong>→</strong> Cognitive pattern mapping</li>
                <li className="flex gap-2"><strong>→</strong> Preferred learning styles</li>
                <li className="flex gap-2"><strong>→</strong> Career domain compatibility indices</li>
              </ul>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-3xl shadow-lg">
              <div className="bg-gray-50 p-8 rounded-2xl flex flex-col items-center justify-center min-h-[300px] border-dashed border-2 border-gray-200">
                <span className="text-4xl mb-4">📄</span>
                <p className="font-bold text-gray-400">Sample Report Preview</p>
                <p className="text-xs text-gray-400 mt-2">(Visual preview only)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section text-center">
        <div className="container">
          <h2 className="mb-6">Gain Clarity Today</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Not sure which assessment is right for you? Book a discovery session to talk to our 
            experts and find the best starting point for your student journey.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary" size="large" onClick={() => window.location.href='/contact'}>
              Explore Assessments
            </Button>
            <Button variant="outline" size="large" onClick={() => window.location.href='/contact'}>
              Book a Career Discovery Session
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerAssessments;
