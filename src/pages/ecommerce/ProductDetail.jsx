import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, formatCurrency } from '../../data/products';
import { useCart } from '../../context/CartContext';
import Button from '../../components/common/Button';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="section text-center">
        <h2>Product not found</h2>
        <Button onClick={() => navigate('/products')}>Back to Products</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    // Optional: show a notification or redirect
  };

  return (
    <div className="product-detail-page fade-in">
      <section className="section product-hero bg-gray">
        <div className="container">
          <div className="grid grid-2 gap-16 items-center">
            <div className="product-image-container">
               <img src={`https://placehold.co/600x600/000000/FFFFFF?text=${product.name.split(' ').join('+')}`} alt={product.name} className="rounded-3xl shadow-xl" />
            </div>
            <div className="product-info">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">{product.category}</span>
              <h1 className="mb-4">{product.name}</h1>
              <div className="price mb-8">
                <span className="text-3xl font-bold">{formatCurrency(product.price)}</span>
              </div>
              
              <div className="product-guiding-sections space-y-8 mb-10">
                <div className="guide-box">
                  <h4 className="text-xs uppercase font-bold text-gray-400 mb-2">Who it's for</h4>
                  <p className="text-gray-700">{product.whoItIsFor}</p>
                </div>
                <div className="guide-box">
                  <h4 className="text-xs uppercase font-bold text-gray-400 mb-2">What you unlock</h4>
                  <p className="text-gray-700">{product.whatItUnlocks}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="primary" size="large" onClick={handleAddToCart}>
                  {product.category === 'Assessments' ? 'Begin Assessment' : 'Register Now'}
                </Button>
                <Button variant="outline" size="large" onClick={() => navigate('/contact')}>
                  Ask a Question
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-2 gap-16">
            <div className="description-section">
              <h2 className="mb-6">Description</h2>
              <p className="text-gray-600 text-lg mb-8">{product.description}</p>
              
              <h3 className="mb-4">Key Features</h3>
              <ul className="check-list space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} style={{ listStyle: 'none', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="journey-fit-section">
              <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100">
                <h3 className="mb-6">How it fits the Journey</h3>
                <div className="journey-path">
                  <div className="path-item opacity-40 mb-4">
                    <span className="text-xs font-bold uppercase block">Stage 1: Alignment</span>
                  </div>
                  <div className="path-item mb-4 border-l-4 border-black pl-4">
                    <span className="text-xs font-bold uppercase block text-black">Current: {product.name}</span>
                    <p className="text-sm text-gray-500 mt-1">Building the essential readiness foundation.</p>
                  </div>
                  <div className="path-item opacity-40">
                    <span className="text-xs font-bold uppercase block">Stage 3: Execution</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* After Purchase Section */}
      <section className="section bg-black text-white text-center">
        <div className="container">
          <h2 className="text-white mb-12">After Your Purchase</h2>
          <div className="grid grid-3 gap-8">
            <div className="after-box">
              <div className="text-3xl mb-4">📧</div>
              <h4 className="text-white">Email Confirmation</h4>
              <p className="text-xs text-gray-400 mt-2">Instant access instructions and receipt.</p>
            </div>
            <div className="after-box">
              <div className="text-3xl mb-4">🔓</div>
              <h4 className="text-white">Dashboard Unlock</h4>
              <p className="text-xs text-gray-400 mt-2">Your entitlement is immediately activated.</p>
            </div>
            <div className="after-box">
              <div className="text-3xl mb-4">📞</div>
              <h4 className="text-white">Guided Support</h4>
              <p className="text-xs text-gray-400 mt-2">Access to our helpline for technical or advisory steps.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
