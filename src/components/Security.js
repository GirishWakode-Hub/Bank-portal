import React from 'react';

const Security = () => {
  const securityFeatures = [
    {
      icon: "fas fa-lock",
      title: "Bank-Level Encryption",
      description: "All your financial data is protected with industry-leading 256-bit encryption technology."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Multi-Factor Authentication",
      description: "Secure access to your accounts with multiple verification steps and biometric authentication."
    },
    {
      icon: "fas fa-eye",
      title: "24/7 Account Monitoring",
      description: "We continuously monitor for suspicious activity to keep your financial assets safe."
    }
  ];

  return (
    <section className="security" id="security">
      <div className="container">
        <div className="security-grid">
          <div className="security-content">
            <h2>Your Financial Security Is Our Priority</h2>
            <p>At VS Finance, we implement the highest security standards to protect your financial data and investments across all our services.</p>
            
            <div className="security-features">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="security-feature">
                  <div className="security-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="security-visual">
            <div className="security-visual-content">
              <i className="fas fa-shield-alt"></i>
              <h3>Financial Security Assurance</h3>
              <p>Our comprehensive security protocols ensure your financial information remains protected across all services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;