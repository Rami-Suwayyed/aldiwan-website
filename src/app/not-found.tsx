'use client'

import Link from 'next/link'
import { useTranslation } from '../components/TranslationProvider'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Home, Utensils, ArrowRight, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  const { t, isRTL } = useTranslation()

  return (
    <div className="bg-background-default min-h-screen">
      <Navigation />
      
      <div className="pt-20 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center py-16">
          {/* 404 Number with decorative elements */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <Utensils className="w-64 h-64 text-primary" />
            </div>
            <h1 className="relative text-[150px] md:text-[200px] font-bold text-primary leading-none">
              404
            </h1>
          </div>

          {/* Main message */}
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
            {t('notFound.title') || 'Page Not Found'}
          </h2>
          <p className="text-lg md:text-xl text-text-body mb-8 max-w-2xl mx-auto">
            {t('notFound.description') || 'Sorry, we couldn\'t find the page you\'re looking for. It might have been moved or deleted.'}
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-accent-gold"></div>
            <Utensils className="w-6 h-6 text-accent-gold" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-accent-gold"></div>
          </div>

          {/* Action buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Link
              href="/"
              className={`group inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <Home className="w-5 h-5" />
              <span>{t('notFound.goHome') || 'Go to Home'}</span>
              {isRTL ? (
                <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              )}
            </Link>

            <Link
              href="/menu"
              className={`group inline-flex items-center gap-3 bg-white text-primary border-2 border-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <Utensils className="w-5 h-5" />
              <span>{t('notFound.viewMenu') || 'View Menu'}</span>
              {isRTL ? (
                <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              )}
            </Link>
          </div>

          {/* Popular links */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-text-body mb-6 font-semibold">
              {t('notFound.popularLinks') || 'Popular Links'}
            </p>
            <div className={`flex flex-wrap gap-4 justify-center ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Link
                href="/about"
                className="text-primary hover:text-primary-dark underline-offset-4 hover:underline transition-all"
              >
                {t('navigation.about') || 'About Us'}
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/#reservations"
                className="text-primary hover:text-primary-dark underline-offset-4 hover:underline transition-all"
              >
                {t('navigation.reservations') || 'Reservations'}
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/#contact"
                className="text-primary hover:text-primary-dark underline-offset-4 hover:underline transition-all"
              >
                {t('navigation.contact') || 'Contact'}
              </Link>
            </div>
          </div>

          {/* Decorative background pattern */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-red/3 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
