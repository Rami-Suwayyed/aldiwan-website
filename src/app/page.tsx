"use client"

import React, { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import HomeMenuSection from '../components/HomeMenuSection'
import ReservationSection from '../components/ReservationSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background-default flex items-center justify-center z-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <div className="text-text-heading font-medium">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-background-default">
      <Toaster 
        position="top-center" 
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: '16px',
            padding: '16px 24px',
            fontSize: '16px',
            fontWeight: '500',
          },
        }}
      />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <HomeMenuSection />
      <ReservationSection />
      <ContactSection />
      <Footer />
    </div>
  )
}