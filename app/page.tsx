'use client'

import React, { useState, useEffect } from 'react'
import Hero from '../src/components/Hero'
import Stats from '../src/components/Stats'
import About from '../src/components/About'
import Services from '../src/components/Services'
import Doctors from '../src/components/Doctors'
import Testimonials from '../src/components/Testimonials'
import Contact from '../src/components/Contact'
import BookingModal from '../src/components/BookingModal'
import ParallaxBackground from '../src/components/ParallaxBackground'
import Layout from '../src/components/Layout'
import Chatbot from '../src/components/Chatbot/Chatbot'

export default function HomePage() {
  const [showChatbot, setShowChatbot] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact-section')
      if (!contactSection) return

      const rect = contactSection.getBoundingClientRect()
      const isInView =
        rect.top < window.innerHeight && rect.bottom >= 0

      setShowChatbot(!isInView)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <ParallaxBackground>
      <div className="min-h-screen">
        <Layout>
          <Hero />
          <Stats />
          <About />
          <Services />
          <Doctors />
          <Testimonials />
          <div id="contact-section">
            <Contact />
          </div>
        </Layout>
        <BookingModal />
        {showChatbot && <Chatbot />}
      </div>
    </ParallaxBackground>
  )
}