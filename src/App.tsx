import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ServicePage from './components/ServicePage';
import ParallaxBackground from './components/ParallaxBackground';
import './styles/background.css';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Improve smooth scrolling behavior
      smoothWheel: true,
      touchMultiplier: 2.0,
      wheelMultiplier: 1.0,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle route changes to reset scroll position
    const handleRouteChange = () => {
      lenis.scrollTo(0, { immediate: true });
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      lenis.destroy();
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <Router>
      <ParallaxBackground>
        <div className="min-h-screen">
          <Navigation />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Stats />
                <About />
                <Services />
                <Doctors />
                <Testimonials />
                <Contact />
              </>
            } />
            <Route path="/services/:serviceId" element={<ServicePage />} />
          </Routes>
          <Footer />
          <BookingModal />
        </div>
      </ParallaxBackground>
    </Router>
  );
}

export default App;