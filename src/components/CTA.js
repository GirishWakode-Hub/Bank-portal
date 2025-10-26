import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Ready to Optimize Your Financial Strategy?</h2>
        <p>Contact our financial advisors today to discuss personalized solutions across all finance domains - from personal wealth management to corporate finance strategies.</p>
        <Link to="/contact" className="cta-button-light">Get Started Today</Link>
      </div>
    </section>
  );
};

export default CTA;