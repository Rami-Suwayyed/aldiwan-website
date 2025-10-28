import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TranslationProvider from '../components/TranslationProvider'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'الديوان اليمني - Al Diwan Al Yemeni | Authentic Yemeni Restaurant',
  description: 'Experience authentic Yemeni cuisine at Al Diwan Al Yemeni. Traditional dishes, warm hospitality, and genuine flavors from Yemen in a modern setting.',
  keywords: 'Yemeni restaurant, authentic cuisine, Middle Eastern food, traditional dishes, مطعم يمني, الديوان اليمني',
  authors: [{ name: 'Al Diwan Al Yemeni' }],
  robots: 'index, follow',
  openGraph: {
    title: 'الديوان اليمني - Al Diwan Al Yemeni',
    description: 'Authentic Yemeni Restaurant - Traditional flavors, modern experience',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'الديوان اليمني - Al Diwan Al Yemeni',
    description: 'Authentic Yemeni Restaurant - Traditional flavors, modern experience',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/image/lodo0.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </body>
    </html>
  )
}