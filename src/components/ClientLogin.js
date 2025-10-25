import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ClientLogin = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt:', loginData);
      setIsLoading(false);
      // Here you would typically handle the login logic
      alert('Login functionality would be implemented here');
    }, 1500);
  };

  const loginOptions = [
    {
      title: "Personal Banking",
      icon: "fas fa-user",
      description: "Access your personal accounts, investments, and financial dashboard",
      features: ["View account balances", "Transfer funds", "Pay bills", "Investment portfolio"]
    },
    {
      title: "Business Banking",
      icon: "fas fa-building",
      description: "Manage your business accounts, payroll, and corporate finances",
      features: ["Business accounts", "Payroll management", "Corporate cards", "Business loans"]
    },
    {
      title: "Wealth Management",
      icon: "fas fa-chart-line",
      description: "Access premium wealth management services and portfolio analysis",
      features: ["Portfolio analytics", "Wealth reports", "Advisor access", "Performance tracking"]
    }
  ];

  return (
    <div className="client-login-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Client Login Portal</h1>
          <p>Secure access to your financial accounts and investment portfolio</p>
          <Link to="/" className="cta-button-light">
            Back to Home
          </Link>
        </div>
      </section>

      <div className="container">
        <div className="login-container">
          {/* Login Options */}
          <div className="login-options">
            <div className="section-title">
              <h2>Choose Your Login Type</h2>
              <p>Select the type of account you want to access</p>
            </div>

            <div className="options-grid">
              {loginOptions.map((option, index) => (
                <div key={index} className="login-option-card">
                  <div className="option-icon">
                    <i className={option.icon}></i>
                  </div>
                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                  <ul>
                    {option.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Login Form */}
          <div className="login-form-section">
            <div className="login-form-container">
              <div className="form-header">
                <h2>Sign In to Your Account</h2>
                <p>Enter your credentials to access your financial dashboard</p>
              </div>

              <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                  <label htmlFor="username">
                    <i className="fas fa-user"></i>
                    Username or Client ID
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={loginData.username}
                    onChange={handleInputChange}
                    placeholder="Enter your username or client ID"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="fas fa-lock"></i>
                    Password
                  </label>
                  <div className="password-input-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={loginData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                  </div>
                </div>

                <div className="form-options">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={loginData.rememberMe}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark"></span>
                    Remember me
                  </label>
                  <Link to="/forgot-password" className="forgot-password">
                    Forgot Password?
                  </Link>
                </div>

                <button 
                  type="submit" 
                  className="login-button"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Signing In...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-sign-in-alt"></i>
                      Sign In
                    </>
                  )}
                </button>
              </form>

              <div className="login-security">
                <div className="security-features">
                  <h4>
                    <i className="fas fa-shield-alt"></i>
                    Secure Login Features
                  </h4>
                  <ul>
                    <li>256-bit SSL encryption</li>
                    <li>Multi-factor authentication</li>
                    <li>Real-time fraud monitoring</li>
                    <li>Secure session management</li>
                  </ul>
                </div>
              </div>

              <div className="login-help">
                <p>
                  Need help accessing your account?{' '}
                  <Link to="/contact">Contact Client Support</Link>
                </p>
                <p>
                  New to VS Finance?{' '}
                  <Link to="/register">Open an Account</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Banking Section */}
        <section className="mobile-banking">
          <div className="section-title">
            <h2>Banking On The Go</h2>
            <p>Access your accounts anytime, anywhere with our mobile app</p>
          </div>

          <div className="mobile-features">
            <div className="mobile-feature">
              <i className="fas fa-mobile-alt"></i>
              <h4>Mobile Banking App</h4>
              <p>Full banking functionality in your pocket</p>
            </div>
            <div className="mobile-feature">
              <i className="fas fa-fingerprint"></i>
              <h4>Biometric Login</h4>
              <p>Secure access with fingerprint or face ID</p>
            </div>
            <div className="mobile-feature">
              <i className="fas fa-bell"></i>
              <h4>Real-time Alerts</h4>
              <p>Instant notifications for account activity</p>
            </div>
            <div className="mobile-feature">
              <i className="fas fa-qrcode"></i>
              <h4>Quick Transfers</h4>
              <p>Send money with QR code scanning</p>
            </div>
          </div>

          <div className="app-download">
            <h4>Download Our Mobile App</h4>
            <div className="download-buttons">
              <button className="app-store-btn">
                <i className="fab fa-apple"></i>
                <div>
                  <span>Download on the</span>
                  <strong>App Store</strong>
                </div>
              </button>
              <button className="google-play-btn">
                <i className="fab fa-google-play"></i>
                <div>
                  <span>Get it on</span>
                  <strong>Google Play</strong>
                </div>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClientLogin;