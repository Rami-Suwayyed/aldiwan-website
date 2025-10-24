"use client"

import React from 'react'
import Navigation from '../../components/Navigation'
import MenuSection from '../../components/MenuSection'
import Footer from '../../components/Footer'
import { Toaster } from 'react-hot-toast'

export default function MenuPage() {
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
      
      {/* Page Header with spacing for fixed navigation */}
      <div className="pt-20">
        <MenuSection />
      </div>
      
      <Footer />
    </div>
  )
}
