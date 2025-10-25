import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Security from './components/Security';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ClientLogin from './components/ClientLogin';
import FinanceTypes from './components/FinanceTypes';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Security />
              <CTA />
            </>
          } />
          <Route path="/finance-types" element={<FinanceTypes />} />
          <Route path="/client-login" element={<ClientLogin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;