import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  try {
    const { cartItems, removeFromCart, updateQuantity, cartTotal, itemCount } = useCart();
    
    // Safely handle cart state - ensure it's always an array
    const items = cartItems || [];
    
    // Debug logging (can be removed in production)
    // console.log('CartPage rendered, cartItems:', cartItems, 'items:', items, 'itemCount:', itemCount);

  const handleQuantityChange = (productId, newQuantity) => {
    const quantity = parseInt(newQuantity);
    if (quantity >= 0) {
      updateQuantity(productId, quantity);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(price);
  };

  // Handle author data (could be string or object)
  const getAuthorName = (author) => {
    if (typeof author === 'string') {
      return author;
    }
    if (author && author.name) {
      return author.name;
    }
    return 'Unknown Author';
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-container">
          <div className="cart-header">
            <h1>Shopping Cart</h1>
            <div className="progress-indicator">
              <div className="progress-step active">1 SHOPPING CART</div>
              <div className="progress-step">2 CHECKOUT DETAILS</div>
              <div className="progress-step">3 ORDER COMPLETE</div>
            </div>
          </div>
          
          <div className="empty-cart">
            <div className="empty-cart-content">
              <h2>Your cart is currently empty</h2>
              <p>Looks like you haven't added any items to your cart yet.</p>
              <Link to="/store" className="continue-shopping-btn">
                <span>←</span> Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <div className="progress-indicator">
            <div className="progress-step active">1 SHOPPING CART</div>
            <div className="progress-step">2 CHECKOUT DETAILS</div>
            <div className="progress-step">3 ORDER COMPLETE</div>
          </div>
        </div>

        <div className="cart-content">
          <div className="cart-items-section">
            <div className="section-header">
              <h2>PRODUCT</h2>
            </div>
            
            <div className="cart-items">
              {items.length > 0 ? items.map((item) => (
                <div key={item.id} className="cart-item">
                  <button 
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                  >
                    ×
                  </button>
                  
                  <div className="item-image">
                    <img 
                      src={item.image || '/api/placeholder/150/200'} 
                      alt={item.title}
                      onError={(e) => {
                        e.target.src = '/api/placeholder/150/200';
                      }}
                    />
                  </div>
                  
                  <div className="item-details">
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-author">by {getAuthorName(item.author)}</p>
                    <div className="item-price">{formatPrice(item.price)}</div>
                  </div>
                  
                  <div className="item-quantity">
                    <label>Quantity:</label>
                    <div className="quantity-controls">
                      <button 
                        className="quantity-btn"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        min="1"
                        className="quantity-input"
                      />
                      <button 
                        className="quantity-btn"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="item-subtotal">
                    <div className="subtotal-label">Subtotal:</div>
                    <div className="subtotal-price">{formatPrice(item.price * item.quantity)}</div>
                  </div>
                </div>
              )) : (
                <div className="empty-cart-message">
                  <p>Your cart is empty</p>
                </div>
              )}
            </div>
            
            <Link to="/store" className="continue-shopping-btn">
              <span>←</span> Continue Shopping
            </Link>
          </div>

          <div className="cart-totals-section">
            <div className="section-header">
              <h2>CART TOTALS</h2>
            </div>
            
            <div className="totals-content">
              <div className="total-row">
                <span>Subtotal:</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              
              <div className="total-row shipping">
                <span>Shipping:</span>
                <span>Shipping costs are calculated during checkout.</span>
              </div>
              
              <div className="total-row final-total">
                <span>Total:</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              
              <button className="checkout-btn">
                PROCEED TO CHECKOUT
              </button>
              
              <div className="coupon-section">
                <div className="coupon-header">
                  <span className="coupon-icon">🎫</span>
                  <span>Coupon</span>
                </div>
                <div className="coupon-input-group">
                  <input 
                    type="text" 
                    placeholder="Coupon code" 
                    className="coupon-input"
                  />
                  <button className="apply-coupon-btn">Apply coupon</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="recommendations-section">
          <h2>You may also like</h2>
          <div className="recommendations-grid">
            {/* Placeholder for recommended products */}
            <div className="recommendation-item">
              <div className="recommendation-image">
                <img src="/api/placeholder/200/250" alt="Recommended book" />
                <button className="wishlist-btn">♡</button>
              </div>
              <h4>Booktrovert Canvas Tote Bag</h4>
              <div className="recommendation-price">{formatPrice(1990)}</div>
              <button className="add-to-cart-btn">ADD TO CART</button>
            </div>
            
            <div className="recommendation-item">
              <div className="recommendation-image">
                <img src="/api/placeholder/200/250" alt="Recommended book" />
                <button className="wishlist-btn">♡</button>
              </div>
              <h4>Glocusent Willow Head Book Light</h4>
              <div className="recommendation-price">{formatPrice(5290)}</div>
              <button className="select-options-btn">SELECT OPTIONS</button>
            </div>
            
            <div className="recommendation-item">
              <div className="recommendation-image">
                <img src="/api/placeholder/200/250" alt="Recommended book" />
                <button className="wishlist-btn">♡</button>
              </div>
              <h4>Glocusent Upgraded Bookmark Book Light</h4>
              <div className="recommendation-price">{formatPrice(6490)}</div>
              <button className="select-options-btn">SELECT OPTIONS</button>
            </div>
            
            <div className="recommendation-item">
              <div className="recommendation-image">
                <img src="/api/placeholder/200/250" alt="Recommended book" />
                <button className="wishlist-btn">♡</button>
              </div>
              <h4>Glocusent Upgraded Neck Reading Light</h4>
              <div className="recommendation-price">{formatPrice(11990)}</div>
              <button className="select-options-btn">SELECT OPTIONS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  } catch (error) {
    console.error('Error in CartPage:', error);
    return (
      <div className="cart-page">
        <div className="cart-container">
          <div className="error-container">
            <h2>Something went wrong</h2>
            <p>There was an error loading your cart. Please try again.</p>
            <button 
              className="retry-button" 
              onClick={() => window.location.reload()}
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default CartPage;
