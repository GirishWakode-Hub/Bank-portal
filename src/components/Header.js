import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <Link to="/" className="logo">
          <i className="fas fa-university"></i>
          VS <span>Finance</span>
        </Link>
        <nav>
          <ul>
            <li><Link to="/finance-types"><i className="fas fa-chart-pie"></i> Finance Types</Link></li>
            <li><a href="#services"><i className="fas fa-hand-holding-usd"></i> Services</a></li>
            <li><a href="#security"><i className="fas fa-shield-alt"></i> Security</a></li>
            <li><a href="#contact"><i className="fas fa-envelope"></i> Contact</a></li>
          </ul>
        </nav>
        <Link to="/client-login" className="cta-button">
          <i className="fas fa-user"></i> Client Login
        </Link>
      </div>
    </header>
  );
};

export default Header;