import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Careers from './components/pages/Careers';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import Terms from './components/pages/Terms';
import CookiePolicy from './components/pages/CookiePolicy';
import './lib/lenis'; // Initialize smooth scrolling
import './styles/background.css'; // Import enhanced styles

/**
 * Main App Component
 * Enhanced with immersive UI, smooth scrolling, and comprehensive routing
 */
function App() {
  useEffect(() => {
    // Add liquid background animation
    const liquidBg = document.createElement('div');
    liquidBg.className = 'liquid-bg';
    document.body.appendChild(liquidBg);

    return () => {
      // Cleanup on unmount
      if (document.body.contains(liquidBg)) {
        document.body.removeChild(liquidBg);
      }
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main Website */}
          <Route path="/" element={
            <Layout>
              <Hero />
              <Stats />
              <About />
              <Services />
              <Doctors />
              <Testimonials />
              <Contact />
            </Layout>
          } />
          
          {/* Policy Pages */}
          <Route path="/privacy" element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          } />
          
          <Route path="/terms" element={
            <Layout>
              <Terms />
            </Layout>
          } />
          
          <Route path="/cookies" element={
            <Layout>
              <CookiePolicy />
            </Layout>
          } />
          
          <Route path="/careers" element={
            <Layout>
              <Careers />
            </Layout>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;