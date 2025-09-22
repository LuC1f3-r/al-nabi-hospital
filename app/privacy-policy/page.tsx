'use client'

import React from 'react'
import PrivacyPolicy from '../../src/components/pages/PrivacyPolicy'
import Layout from '../../src/components/Layout'
import ParallaxBackground from '../../src/components/ParallaxBackground'

export default function PrivacyPolicyPage() {
  return (
    <ParallaxBackground>
      <div className="min-h-screen">
        <Layout>
          <PrivacyPolicy />
        </Layout>
      </div>
    </ParallaxBackground>
  )
}