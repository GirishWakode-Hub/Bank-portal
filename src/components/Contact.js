import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceInterest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: 'fas fa-phone',
      title: 'Call Us',
      details: '+91-9373831640',
      description: 'Mon-Fri: 8:00 AM - 6:00 PM EST',
      action: 'tel:+919373831640',
      buttonText: 'Call Now'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      details: 'advisors@vsfinance.com',
      description: 'We respond within 24 hours',
      action: 'mailto:advisors@vsfinance.com',
      buttonText: 'Send Email'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Our Office',
      details: 'Akola, Maharashtra, India',
      description: 'Schedule an in-person consultation',
      action: '#',
      buttonText: 'Get Directions'
    },
    {
      icon: 'fas fa-calendar-alt',
      title: 'Book Consultation',
      details: 'Free 30-minute session',
      description: 'Meet our financial advisors',
      action: '#consultation-form',
      buttonText: 'Schedule Now'
    }
  ];

  const serviceOptions = [
    'Personal Financial Planning',
    'Investment Management',
    'Retirement Planning',
    'Business Finance',
    'Tax Optimization',
    'Estate Planning',
    'Wealth Management',
    'Other'
  ];

  if (submitted) {
    return (
      <div className="contact-page">
        <section className="page-hero">
          <div className="container">
            <h1>Thank You for Reaching Out!</h1>
            <p>We've received your message and will contact you within 24 hours to discuss your financial goals.</p>
            <div className="success-actions">
              <Link to="/" className="cta-button-light">
                Back to Home
              </Link>
              <Link to="/financial-strategy" className="cta-button-outline">
                Explore Strategies
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Connect With Our Financial Experts</h1>
          <p>Begin your journey to financial success. Our advisors are ready to provide personalized guidance for your unique financial situation.</p>
          <div className="hero-stats">
            <div className="stat">
              <strong>15+</strong>
              <span>Years Experience</span>
            </div>
            <div className="stat">
              <strong>500+</strong>
              <span>Clients Served</span>
            </div>
            <div className="stat">
              <strong>24/7</strong>
              <span>Client Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods-section">
        <div className="container">
          <div className="section-title">
            <h2>Multiple Ways to Connect</h2>
            <p>Choose the method that works best for you</p>
          </div>

          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <div key={index} className="contact-method-card">
                <div className="method-icon">
                  <i className={method.icon}></i>
                </div>
                <div className="method-content">
                  <h3>{method.title}</h3>
                  <p className="method-details">{method.details}</p>
                  <p className="method-description">{method.description}</p>
                </div>
                <a 
                  href={method.action} 
                  className="method-button"
                  onClick={(e) => {
                    if (method.action === '#consultation-form') {
                      e.preventDefault();
                      document.getElementById('consultation-form').scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {method.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="consultation-form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2>Request Free Consultation</h2>
              <p>Fill out the form below and our financial advisors will contact you to schedule your complimentary 30-minute session</p>
            </div>

            <form onSubmit={handleSubmit} className="consultation-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="serviceInterest">Service Interest *</label>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell us about your financial goals *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please describe your current financial situation, goals, and any specific challenges you're facing..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Submitting...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Request Free Consultation
                  </>
                )}
              </button>

              <p className="form-note">
                * Required fields. By submitting this form, you agree to our Privacy Policy and consent to be contacted by VS Finance.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about our services</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h4>How soon will I hear back after submitting the form?</h4>
              <p>We typically respond within 24 hours during business days. For urgent matters, please call us directly.</p>
            </div>
            <div className="faq-item">
              <h4>Is the initial consultation really free?</h4>
              <p>Yes, your first 30-minute consultation is completely free with no obligation to continue our services.</p>
            </div>
            <div className="faq-item">
              <h4>What information should I prepare for the consultation?</h4>
              <p>Basic financial information, your goals, and any specific questions you have about your financial situation.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer virtual consultations?</h4>
              <p>Yes, we offer both in-person and virtual consultations via video call for your convenience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Assistance CTA */}
      <section className="immediate-assistance">
        <div className="container">
          <div className="assistance-cta">
            <h3>Need Immediate Assistance?</h3>
            <p>Our client support team is available to help you right now</p>
            <div className="assistance-buttons">
              <a href="tel:+91-9373831640" className="cta-button">
                <i className="fas fa-phone"></i>
                Call Now
              </a>
              <a href="mailto:advisors@vsfinance.com" className="cta-button-outline">
                <i className="fas fa-envelope"></i>
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;