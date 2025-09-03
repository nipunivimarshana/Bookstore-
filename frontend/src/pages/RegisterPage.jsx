import { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // TODO: Implement actual registration logic
      console.log('Registration attempt:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // TODO: Handle successful registration (redirect, store token, etc.)
      console.log('Registration successful');
      
    } catch (error) {
      console.error('Registration failed:', error);
      // TODO: Handle registration error (show error message)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-card">
          <div className="register-header">
            <h2 className="register-title">Create Your Account</h2>
            <p className="register-subtitle">Join our community and start your reading journey today!</p>
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your full name"
                required
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your email address"
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Create a strong password"
                required
                autoComplete="new-password"
              />
            </div>

            <div className="form-options">
              <label className="checkbox-container">
                <input type="checkbox" className="checkbox-input" required />
                <span className="checkbox-label">
                  I agree to the{' '}
                  <Link to="/terms" className="terms-link">
                    Terms of Service
                  </Link>
                  {' '}and{' '}
                  <Link to="/privacy" className="terms-link">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            <button 
              type="submit" 
              className={`register-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading-spinner"></span>
                  Creating Account...
                </>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          <div className="register-footer">
            <p className="signin-text">
              Already have an account?{' '}
              <Link to="/login" className="signin-link">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
