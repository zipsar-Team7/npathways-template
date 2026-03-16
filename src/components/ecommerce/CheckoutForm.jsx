import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from '../common/Button';
import { formatCurrency } from '../../data/products';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const navigate = useNavigate();
  const { clearCart, getCartTotal } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    termsAccepted: false,
    refundPolicyAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate payment processing
    // In a real app, this would integrate with Razorpay/Stripe
    
    setTimeout(() => {
      alert('Order placed successfully! In a real app, you would be redirected to payment gateway.');
      clearCart();
      navigate('/dashboard/my-products'); // Redirect to dashboard after purchase
    }, 1500);
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h3>Billing Information</h3>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          required
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            required
            value={formData.zipCode}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="legal-section">
        <h3>Consent & Agreements</h3>
        <p className="legal-notice">
          Please review our policies before continuing. Digital products are non-refundable once sent.
        </p>
        
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="termsAccepted"
            name="termsAccepted"
            required
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <label htmlFor="termsAccepted">
            I agree to the <a href="/terms" target="_blank">Terms & Conditions</a>
          </label>
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="refundPolicyAccepted"
            name="refundPolicyAccepted"
            required
            checked={formData.refundPolicyAccepted}
            onChange={handleChange}
          />
          <label htmlFor="refundPolicyAccepted">
            I understand usage of the <a href="/refund" target="_blank">Refund Policy</a> (Non-refundable after delivery)
          </label>
        </div>
      </div>

      <Button 
        type="submit" 
        variant="primary" 
        fullWidth 
        size="large"
        disabled={!formData.termsAccepted || !formData.refundPolicyAccepted}
      >
        Pay {formatCurrency(getCartTotal() * 1.18)}
      </Button>
      
      <div className="secure-badge">
        [Secure] SSL Secured Payment
      </div>
    </form>
  );
};

export default CheckoutForm;
