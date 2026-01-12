import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import './Shop.css';

const Shop = () => {
  const categories = [
    {
      id: 'assessments',
      name: 'Assessments',
      tag: 'Phase 1: Assess',
      description: 'Scientific map of cognitive patterns and personality traits to identify natural strengths.',
      link: '/products/assessments',
      icon: '📊'
    },
    {
      id: 'bootcamps',
      name: 'Bootcamps',
      tag: 'Phase 2: Accelerate',
      description: 'Intensive accelerators designed to build specific readiness dimensions in record time.',
      link: '/products/bootcamps',
      icon: '🚀'
    },
    {
      id: 'programs',
      name: 'Programs',
      tag: 'Phase 3: Execute',
      description: 'Mid-term structured engagements focused on building core transition competencies.',
      link: '/products/programs',
      icon: '🏛️'
    },
    {
      id: 'pathways',
      name: 'Full Pathways',
      tag: 'Phase 4: Complete Guidance',
      description: 'End-to-end guided journey from assessment to enrollment in top-tier global institutions.',
      link: '/products/pathways',
      icon: '🗺️'
    },
    {
      id: 'subscriptions',
      name: 'Subscriptions',
      tag: 'Coming Soon',
      description: 'Long-term continuity and priority access for our global industry network.',
      link: '/products/subscriptions',
      icon: '📅',
      disabled: true
    }
  ];

  return (
    <div className="shop-page products-home fade-in">
      {/* Intro Section */}
      <section className="section bg-gray products-hero">
        <div className="container text-center">
          <h1>Structured <span className="text-primary">Products</span></h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Guidance, not just content. Our products are designed to unlock specific stages 
            of your journey, ensuring you are ready for what comes next.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3 gap-8">
            {categories.map(cat => (
              <div key={cat.id} className={`product-category-card p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all ${cat.disabled ? 'opacity-70 grayscale' : ''}`}>
                <div className="text-4xl mb-6">{cat.icon}</div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block">{cat.tag}</span>
                <h3 className="mb-4">{cat.name}</h3>
                <p className="text-sm text-gray-600 mb-8">{cat.description}</p>
                
                <Link to={cat.link} className="category-btn-link">
                  <Button variant={cat.disabled ? 'outline' : 'primary'} fullWidth disabled={cat.disabled}>
                    {cat.disabled ? 'Coming Soon' : 'Explore Category'}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="section bg-black text-white">
        <div className="container text-center">
          <h2 className="text-white mb-12">The Product Logic</h2>
          <div className="grid grid-4 gap-8">
            <div className="logic-box">
              <span className="text-xs font-bold text-gray-500 uppercase block mb-2">Step 1</span>
              <h4 className="text-white">Assess</h4>
              <p className="text-xs text-gray-400 mt-2">Identify strengths and gaps first.</p>
            </div>
            <div className="logic-box">
              <span className="text-xs font-bold text-gray-500 uppercase block mb-2">Step 2</span>
              <h4 className="text-white">Unlock</h4>
              <p className="text-xs text-gray-400 mt-2">Gain access to specific programs.</p>
            </div>
            <div className="logic-box">
              <span className="text-xs font-bold text-gray-500 uppercase block mb-2">Step 3</span>
              <h4 className="text-white">Execute</h4>
              <p className="text-xs text-gray-400 mt-2">Build your profile systematically.</p>
            </div>
            <div className="logic-box">
              <span className="text-xs font-bold text-gray-500 uppercase block mb-2">Step 4</span>
              <h4 className="text-white">Outcome</h4>
              <p className="text-xs text-gray-400 mt-2">Successful global transition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <div className="container">
          <h2 className="mb-6">Not sure which one you need?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Take our initial readiness check to see which assessment or program fits your current stage.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary" size="large" onClick={() => window.location.href='/products/assessments'}>
              Explore Assessments
            </Button>
            <Button variant="outline" size="large" onClick={() => window.location.href='/contact'}>
              Check Your Readiness
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
