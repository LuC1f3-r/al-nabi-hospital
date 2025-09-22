'use client'

import React from 'react'
import Terms from '../../src/components/pages/Terms'
import Layout from '../../src/components/Layout'
import ParallaxBackground from '../../src/components/ParallaxBackground'

export default function TermsPage() {
  return (
    <ParallaxBackground>
      <div className="min-h-screen">
        <Layout>
          <Terms />
        </Layout>
      </div>
    </ParallaxBackground>
  )
}