import type { Metadata } from 'next'
import { Bricolage_Grotesque, Figtree, Anton } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['600', '800'],
  variable: '--font-bricolage',
  display: 'swap',
})
const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-figtree',
  display: 'swap',
})
const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Professional Cleaning Services in Kampala, Uganda | Ask Maya',
    template: '%s | Ask Maya UGA Cleaning',
  },
  description:
    'Ask Maya UGA Cleaning delivers top-rated residential, commercial, and car detailing services across Kampala. Vetted cleaners, supplies included, re-clean guarantee.',
  keywords: ['cleaning services Kampala', 'house cleaning Uganda', 'office cleaning Kampala', 'car detailing Ntinda', 'Ask Maya cleaning'],
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_UG',
    url: 'https://askmayaug.com',
    siteName: 'Ask Maya UGA Cleaning',
    title: 'Professional Cleaning Services in Kampala | Ask Maya',
    description: 'Residential, commercial, and car detailing across Kampala. Vetted cleaners, supplies included, satisfaction guaranteed.',
  },
  metadataBase: new URL('https://askmayaug.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${figtree.variable} ${anton.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
