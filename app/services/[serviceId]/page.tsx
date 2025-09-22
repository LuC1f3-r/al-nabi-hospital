'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import ServicePage from '../../../src/components/ServicePage'
import Layout from '../../../src/components/Layout'
import ParallaxBackground from '../../../src/components/ParallaxBackground'

export default function ServicePageRoute() {
  const params = useParams()
  const serviceId = params?.serviceId as string

  return (
    <ParallaxBackground>
      <div className="min-h-screen">
        <Layout>
          <ServicePage serviceId={serviceId} />
        </Layout>
      </div>
    </ParallaxBackground>
  )
}