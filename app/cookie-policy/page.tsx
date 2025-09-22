'use client'

import React from 'react'
import CookiePolicy from '../../src/components/pages/CookiePolicy'
import Layout from '../../src/components/Layout'
import ParallaxBackground from '../../src/components/ParallaxBackground'

export default function CookiePolicyPage() {
  return (
    <ParallaxBackground>
      <div className="min-h-screen">
        <Layout>
          <CookiePolicy />
        </Layout>
      </div>
    </ParallaxBackground>
  )
}