import React, { useEffect, lazy, Suspense, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import lenis from './lib/lenis';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import BookingModal from './components/BookingModal';
import ParallaxBackground from './components/ParallaxBackground';
import './styles/background.css';
import Layout from './components/Layout';

const ServicePage = lazy(() => import('./components/ServicePage'));
const Careers = lazy(() => import('./components/pages/Careers'));
const Terms = lazy(() => import('./components/pages/Terms'));
const CookiePolicy = lazy(() => import('./components/pages/CookiePolicy'));
const PrivacyPolicy = lazy(() => import('./components/pages/PrivacyPolicy'));

const MemoizedHomePage = memo(() => (
  <>
    <Hero />
    <Stats />
    <About />
    <Services />
    <Doctors />
    <Testimonials />
    <Contact />
  </>
));

function App() {
  return (
    <Router>
      <ParallaxBackground>
        <div className="min-h-screen">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<MemoizedHomePage />} />
                <Route path="/services/:serviceId" element={<ServicePage />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              </Route>
            </Routes>
          </Suspense>
          <BookingModal />
        </div>
      </ParallaxBackground>
    </Router>
  );
}

export default App;