import React from 'react';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>VS Finance</h3>
            <p>Comprehensive financial solutions for individuals, businesses, and institutions across all finance domains.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Finance Domains</h3>
            <ul>
              <li><a href="/personal-finance">Personal Finance</a></li>
              <li><a href="/corporate-finance">Corporate Finance</a></li>
              <li><a href="/public-finance">Public Finance</a></li>
              <li><a href="/international-finance">International Finance</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="/investment-services">Investment Plans</a></li>
              <li><a href="/insurance-services">Insurance</a></li>
              <li><a href="/loan-services">Loans</a></li>
              <li><a href="/taxation-services">Taxation</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li><i className="fas fa-envelope"></i> info@vsfinance.com</li>
              <li><i className="fas fa-phone"></i> +91-9373831640</li>
              <li><i className="fas fa-map-marker-alt"></i> Akola, Maharashtra, India</li>
            </ul>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; 2023 VS Finance. All rights reserved. | Comprehensive Financial Solutions Across All Domains</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;