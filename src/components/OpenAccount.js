import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OpenAccount = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    accountType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    employmentStatus: '',
    annualIncome: '',
    investmentGoals: [],
    initialDeposit: '',
    agreeToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const accountTypes = [
    {
      id: 'personal',
      title: 'Personal Investment Account',
      icon: 'fas fa-user',
      description: 'Individual investment account for personal investing',
      features: ['Stocks & Mutual Funds', 'Retirement Planning', 'Wealth Growth'],
      minDeposit: '₹5,000'
    },
    {
      id: 'retirement',
      title: 'Retirement Account',
      icon: 'fas fa-umbrella-beach',
      description: 'Tax-saving retirement investment account (like NPS, PPF, etc.)',
      features: ['Tax Benefits', 'Long-term Growth', 'Retirement Security'],
      minDeposit: '₹10,000'
    },
    {
      id: 'joint',
      title: 'Joint Account',
      icon: 'fas fa-users',
      description: 'Shared investment account for partners or family members',
      features: ['Multiple Owners', 'Estate Planning', 'Shared Management'],
      minDeposit: '₹10,000'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'investmentGoals') {
        const updatedGoals = checked
          ? [...formData.investmentGoals, value]
          : formData.investmentGoals.filter(goal => goal !== value);
        setFormData(prev => ({ ...prev, investmentGoals: updatedGoals }));
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Account application submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  const renderStep1 = () => (
    <div className="form-step">
      <h3>Choose Account Type</h3>
      <p>Select the type of account that best fits your financial goals</p>

      <div className="account-type-grid">
        {accountTypes.map(account => (
          <div
            key={account.id}
            className={`account-type-card ${formData.accountType === account.id ? 'selected' : ''}`}
            onClick={() => setFormData(prev => ({ ...prev, accountType: account.id }))}
          >
            <div className="account-icon">
              <i className={account.icon}></i>
            </div>
            <h4>{account.title}</h4>
            <p>{account.description}</p>
            <ul>
              {account.features.map((feature, index) => (
                <li key={index}>
                  <i className="fas fa-check"></i>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="min-deposit">
              Minimum Deposit: <strong>{account.minDeposit}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="form-step">
      <h3>Personal Information</h3>
      <p>Tell us about yourself to get started</p>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="dateOfBirth">Date of Birth *</label>
        <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} required />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="form-step">
      <h3>Financial Information & Agreement</h3>
      <p>Complete your application</p>

      <div className="form-group">
        <label htmlFor="employmentStatus">Employment Status *</label>
        <select id="employmentStatus" name="employmentStatus" value={formData.employmentStatus} onChange={handleInputChange} required>
          <option value="">Select employment status</option>
          <option value="employed">Employed</option>
          <option value="self-employed">Self-Employed</option>
          <option value="retired">Retired</option>
          <option value="student">Student</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="annualIncome">Annual Income *</label>
        <select id="annualIncome" name="annualIncome" value={formData.annualIncome} onChange={handleInputChange} required>
          <option value="">Select income range</option>
          <option value="under-5L">Below ₹5 Lakh</option>
          <option value="5L-10L">₹5 Lakh – ₹10 Lakh</option>
          <option value="10L-20L">₹10 Lakh – ₹20 Lakh</option>
          <option value="over-20L">Above ₹20 Lakh</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="initialDeposit">Initial Deposit *</label>
        <select id="initialDeposit" name="initialDeposit" value={formData.initialDeposit} onChange={handleInputChange} required>
          <option value="">Select amount</option>
          <option value="1000">₹1,000</option>
          <option value="10000">₹10,000</option>
          <option value="25000">₹25,000</option>
          <option value="50000">₹50,000</option>
        </select>
      </div>

      <div className="agreement-section">
        <label className="checkbox-label large">
          <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleInputChange} required />
          <span className="checkmark"></span>
          I agree to the <Link to="/terms">Account Agreement</Link> and <Link to="/privacy">Privacy Policy</Link> *
        </label>
      </div>
    </div>
  );

  if (submitted) {
    return (
      <div className="open-account-page">
        <section className="page-hero">
          <div className="container">
            <h1>Application Submitted Successfully!</h1>
            <p>Thank you for choosing VS Finance. We’ll review your application and contact you within 24 hours.</p>
            <div className="success-actions">
              <Link to="/" className="cta-button-light">Back to Home</Link>
              <Link to="/client-login" className="cta-button-outline">Client Login</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="open-account-page">
      <section className="page-hero">
        <div className="container">
          <h1>Open Your Investment Account</h1>
          <p>Start your financial journey with VS Finance. Open an account in just a few minutes.</p>
        </div>
      </section>

      <section className="account-process">
        <div className="container">
          <div className="process-steps-indicator">
            {[1, 2, 3].map(step => (
              <div key={step} className={`process-step-indicator ${step === currentStep ? 'active' : ''} ${step < currentStep ? 'completed' : ''}`}>
                <div className="step-number">{step}</div>
                <span className="step-label">
                  {step === 1 && 'Account Type'}
                  {step === 2 && 'Personal Info'}
                  {step === 3 && 'Final Details'}
                </span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="account-application-form">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}

            <div className="form-navigation">
              {currentStep > 1 && (
                <button type="button" onClick={prevStep} className="nav-button prev">
                  <i className="fas fa-arrow-left"></i> Previous
                </button>
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="nav-button next"
                  disabled={!isStepValid(currentStep)}
                >
                  Next <i className="fas fa-arrow-right"></i>
                </button>
              ) : (
                <button type="submit" className="submit-button" disabled={!isStepValid(3) || isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Submitting...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i> Submit Application
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );

  function isStepValid(step) {
    switch (step) {
      case 1:
        return formData.accountType !== '';
      case 2:
        return formData.firstName && formData.lastName && formData.email && formData.phone && formData.dateOfBirth;
      case 3:
        return formData.employmentStatus && formData.annualIncome && formData.initialDeposit && formData.agreeToTerms;
      default:
        return false;
    }
  }
};

export default OpenAccount;
