'use client'

import React from 'react'
import Careers from '../../src/components/pages/Careers'
import Layout from '../../src/components/Layout'
import ParallaxBackground from '../../src/components/ParallaxBackground'

export default function CareersPage() {
  return (
    <ParallaxBackground>
      <div className="min-h-screen">
        <Layout>
          <Careers />
        </Layout>
      </div>
    </ParallaxBackground>
  )
}