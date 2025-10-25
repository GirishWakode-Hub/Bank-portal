import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Investment Services",
      icon: "fas fa-chart-line",
      contentIcon: "fas fa-piggy-bank",
      items: ["Mutual Funds", "Investment Plans", "Stock Broking", "Small Case", "Retirement / Pension Plans"],
      link: "investment-services.html"
    },
    {
      id: 2,
      title: "Insurance Products",
      icon: "fas fa-shield-alt",
      contentIcon: "fas fa-user-shield",
      items: ["Life Insurance", "Health Insurance", "General Insurance"],
      link: "insurance-services.html"
    },
    {
      id: 3,
      title: "Loan Products",
      icon: "fas fa-hand-holding-usd",
      contentIcon: "fas fa-home",
      items: ["Personal Loan", "Business Loan", "Home Loan", "Loan against Property", "Loan against Security", "Two Wheeler Loan", "Car Loan"],
      link: "loan-services.html"
    },
    {
      id: 4,
      title: "Additional Services",
      icon: "fas fa-file-invoice-dollar",
      contentIcon: "fas fa-calculator",
      items: ["Taxation Services", "Financial Planning", "Wealth Management", "Portfolio Advisory"],
      link: "taxation-services.html"
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Financial Services</h2>
          <p>Comprehensive solutions tailored to meet your financial goals across all finance domains</p>
        </div>
        <div className="services-grid">
          {services.map(service => (
            <a key={service.id} href={service.link} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <div className="service-content">
                <h3><i className={service.contentIcon}></i> {service.title}</h3>
                <ul>
                  {service.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;