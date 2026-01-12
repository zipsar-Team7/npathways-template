import { Link } from 'react-router-dom';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { consultancyServices, supportServices } from '../../data/services';
// We also need products for the preview section, let's fix the import
import { products as digitalProducts } from '../../data/products';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page fade-in">
      {/* Hero */}
      <section className="section bg-gray services-hero">
        <div className="container text-center">
          <h1>Our <span className="text-primary">Services</span></h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Comprehensive support for your global education journey, from stakeholder alignment to 
            intensive core offerings.
          </p>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2 gap-12">
            {/* Category 1 */}
            <div className="service-category-card p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block">Stakeholder Services</span>
              <h2 className="mb-6">For Parents & Schools</h2>
              <p className="text-gray-600 mb-8">
                Institutional and parental alignment programs designed to ensure 
                safety, clarity, and institutional success.
              </p>
              <div className="space-y-4">
                <Link to="/services/parents" className="category-link flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-black hover:text-white transition-all">
                  <span>For Parents</span>
                  <span>→</span>
                </Link>
                <Link to="/services/schools" className="category-link flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-black hover:text-white transition-all">
                  <span>For Schools</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Category 2 */}
            <div className="service-category-card p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block">Core Offerings</span>
              <h2 className="mb-6">Readiness & Accelerators</h2>
              <p className="text-gray-600 mb-8">
                Scientific assessments and intensive bootcamps focused on 
                student readiness for global education.
              </p>
              <div className="space-y-4">
                <Link to="/services/assessments" className="category-link flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-black hover:text-white transition-all">
                  <span>Career & Assessments</span>
                  <span>→</span>
                </Link>
                <Link to="/services/bootcamps" className="category-link flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-black hover:text-white transition-all">
                  <span>Bootcamps</span>
                  <span>→</span>
                </Link>
                <Link to="/services/school-programs" className="category-link flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-black hover:text-white transition-all">
                  <span>School Programs</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultancy Services - Journey Timeline */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h2 className="section-title">The Student Journey</h2>
            <p className="section-subtitle">How we manage transitions and readiness at scale</p>
          </div>
          
          <div className="journey-timeline">
            {consultancyServices.map((service, index) => (
              <div key={service.id} className={`journey-step ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="step-number">
                  <span>Step {index + 1}</span>
                </div>
                
                <div className="step-content">
                  <div className="step-icon">{service.icon}</div>
                  <h3 className="step-title">{service.name}</h3>
                  <p className="step-description">{service.description}</p>
                  
                  <div className="features-list">
                    <h4>What's Included:</h4>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <span className="checkmark">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section text-center">
        <div className="container">
          <h2 className="mb-6">Not Sure Where to Start?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Book a discovery session with our experts to find the right path for your specific needs.
          </p>
          <Button variant="primary" size="large" onClick={() => window.location.href='/contact'}>
            Book a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
