import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../src/index.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Al Nabi Hospital - Excellence in Healthcare',
  description: 'A modern, luxurious healthcare website featuring sophisticated animations and premium medical services.',
  keywords: 'healthcare, hospital, medical services, Al Nabi Hospital',
  authors: [{ name: 'Al Nabi Hospital' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Al Nabi Hospital - Excellence in Healthcare',
    description: 'A modern, luxurious healthcare website featuring sophisticated animations and premium medical services.',
    url: 'https://al-nabi-hospital.vercel.app',
    siteName: 'Al Nabi Hospital',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Al Nabi Hospital',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al Nabi Hospital - Excellence in Healthcare',
    description: 'A modern, luxurious healthcare website featuring sophisticated animations and premium medical services.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}