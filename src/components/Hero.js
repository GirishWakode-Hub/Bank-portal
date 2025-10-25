import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Comprehensive Financial Solutions</h1>
        <p>VS Finance offers expert guidance across all finance domains - from personal wealth management to corporate and international finance solutions.</p>
        <Link to="/finance-types" className="cta-button-light">Explore Finance Types</Link>
      </div>
    </section>
  );
};

export default Hero;