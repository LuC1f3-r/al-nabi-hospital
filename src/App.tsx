import React, { useState, useEffect, useRef, lazy, Suspense, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Chatbot from './components/Chatbot/Chatbot';

const ServicePage = lazy(() => import('./components/ServicePage'));
const Careers = lazy(() => import('./components/pages/Careers'));
const Terms = lazy(() => import('./components/pages/Terms'));
const CookiePolicy = lazy(() => import('./components/pages/CookiePolicy'));
const PrivacyPolicy = lazy(() => import('./components/pages/PrivacyPolicy'));

const MemoizedHomePage: React.FC = memo(() => (
  <>
    <Hero />
    <Stats />
    <About />
    <Services />
    <Doctors />
    <Testimonials />
    <div id="contact-section">
      <Contact />
    </div>
  </>
));

const App: React.FC = () => {
  const visibilityObserverRef = useRef<IntersectionObserver | null>(null);
  const contactVisibleRef = useRef(false);
  const footerVisibleRef = useRef(false);
  const [showChatbot, setShowChatbot] = useState<boolean>(true);

  useEffect(() => {
    const contactSection = document.getElementById('contact-section');
    const footerSection = document.getElementById('site-footer');

    visibilityObserverRef.current?.disconnect();

    if (!contactSection && !footerSection) {
      setShowChatbot(true);
      return () => {};
    }

    visibilityObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (contactSection && entry.target === contactSection) {
            contactVisibleRef.current = entry.isIntersecting;
          }
          if (footerSection && entry.target === footerSection) {
            footerVisibleRef.current = entry.isIntersecting;
          }
        });

        setShowChatbot(
          !(contactVisibleRef.current || footerVisibleRef.current)
        );
      },
      {
        threshold: 0.2,
      }
    );

    [contactSection, footerSection].forEach((element) => {
      if (element) {
        visibilityObserverRef.current?.observe(element);
      }
    });

    return () => {
      visibilityObserverRef.current?.disconnect();
    };
  }, []);

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
          {showChatbot && <Chatbot />}
        </div>
      </ParallaxBackground>
    </Router>
  );
};

export default App;
