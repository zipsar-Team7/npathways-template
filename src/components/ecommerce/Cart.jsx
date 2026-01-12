import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from '../common/Button';
import { formatCurrency } from '../../data/products';
import './Cart.css';

const Cart = () => {
  const { 
    cartItems, 
    isCartOpen, 
    toggleCart, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal 
  } = useCart();
  
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    toggleCart();
    navigate('/checkout');
  };

  return (
    <>
      <div className="cart-overlay" onClick={toggleCart}></div>
      <div className="cart-sidebar slide-left">
        <div className="cart-header">
          <h2>Your Cart ({cartItems.length})</h2>
          <button className="close-btn" onClick={toggleCart}>✕</button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <span className="empty-icon">🛒</span>
              <p>Your cart is empty</p>
              <Button variant="outline" fullWidth onClick={() => { toggleCart(); navigate('/products'); }}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={`https://placehold.co/100x100/F5F5F5/000000?text=${item.name.charAt(0)}`} alt={item.name} />
                </div>
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p className="item-price">{formatCurrency(item.price)}</p>
                  <div className="item-controls">
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-amount">{formatCurrency(getCartTotal())}</span>
            </div>
            <p className="cart-note">Taxes calculated at checkout</p>
            <Button variant="primary" fullWidth size="large" onClick={handleCheckout}>
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
