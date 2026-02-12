import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Bheemas Indian Kitchen & Bar in Little Rock | Best North & South Indian Food',
  description: 'Discover authentic Indian restaurant in Little Rock serving traditional North Indian, South Indian, Tandoori & Biryani dishes. Premium family-friendly fine dining experience.',
  keywords: [
    'Indian restaurant in Little Rock',
    'Best Indian food Little Rock',
    'Authentic Indian restaurant',
    'North Indian food Little Rock',
    'South Indian restaurant',
    'Biryani restaurant Little Rock',
    'Tandoori dishes',
    'Family restaurant Little Rock',
    'Fine dining Indian cuisine',
    'Traditional Indian food'
  ],
  generator: 'v0.app',
  applicationName: 'Bheemas Indian Kitchen & Bar',
  authors: [{ name: 'Bheemas Indian Kitchen & Bar Little Rock' }],
  openGraph: {
    title: 'Best Authentic Indian Restaurant in Little Rock',
    description: 'Experience premium Indian cuisine with authentic North & South Indian specialties',
    type: 'website',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#C4885C',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${poppins.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#C4885C" />
      </head>
      <body className={`font-poppins antialiased bg-[#F5F1ED] text-[#2A2420]`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
