'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from './TranslationProvider'
import Image from 'next/image'
import { ArrowRight, Star, Clock, Users } from 'lucide-react'

export default function HeroSection() {
  const { t, isRTL } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)

  // Hero images from the restaurant
  const heroImages = [
    '/image/WhatsApp Image 2025-10-19 at 12.35.10_ad98d381.jpg',
    '/image/WhatsApp Image 2025-10-21 at 15.30.18_1f3140bd.jpg',
    '/image/WhatsApp Image 2025-10-21 at 15.30.19_87ec1b72.jpg',
    '/image/WhatsApp Image 2025-10-21 at 19.06.54_9dc4d41e.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="relative overflow-hidden min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Al Diwan Al Yemeni - ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-primary-gradient/30"></div>
      </div>

      {/* Decorative Patterns */}
      <div className="absolute inset-0 pattern-moroccan opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className={`grid lg:grid-cols-12 gap-12 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Text Content */}
            <div className={`lg:col-span-7 space-y-8 ${isRTL ? 'lg:col-start-6 text-right' : 'text-left'}`}>
              <div className="space-y-6 fadeIn">
                {/* Subtitle */}
                <div className="inline-block pt-8">
                  <span className="bg-accent-gold/20 text-accent-gold px-6 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-accent-gold/30">
                    {t('hero.subtitle')}
                  </span>
                </div>

                {/* Main Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  <span className="block">
                    {t('hero.title')}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                  {t('hero.description')}
                </p>

                {/* Statistics */}
                <div className={`grid grid-cols-3 gap-4 py-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent-gold rounded-full mb-2 mx-auto">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white">4.8</div>
                    <div className="text-sm text-white/80">{t('hero.stats.rating')}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent-red rounded-full mb-2 mx-auto">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white">30</div>
                    <div className="text-sm text-white/80">{t('hero.stats.delivery')}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-2 mx-auto">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-sm text-white/80">{t('hero.stats.customers')}</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className={`flex flex-col sm:flex-row gap-4 pt-4 pb-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                  <button
                    onClick={() => scrollToSection('menu')}
                    className={`group bg-accent-gold hover:bg-accent-gold/90 text-white font-semibold py-4 px-8 rounded-custom transition-all duration-300 shadow-hover transform hover:-translate-y-1 flex items-center justify-center gap-3 ${
                      isRTL ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <span>{t('hero.cta.menu')}</span>
                    <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
                      isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
                    }`} />
                  </button>
                  <button
                    onClick={() => scrollToSection('reservations')}
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-custom transition-all duration-300 border border-white/20 hover:border-white/40"
                  >
                    {t('hero.cta.reservations')}
                  </button>
                </div>
              </div>
            </div>

            {/* Image Showcase */}
            <div className={`lg:col-span-5 ${isRTL ? 'lg:col-start-1' : ''}`}>
              <div className="relative">
                {/* Main featured image */}
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/image/3D Logo.jpg"
                    alt="Al Diwan Al Yemeni Logo"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Floating elements */}
                <div className={`absolute -top-4 ${isRTL ? '-left-4' : '-right-4'} bg-white rounded-xl p-4 shadow-xl`}>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-text-heading">Open Now</span>
                  </div>
                </div>

                <div className={`absolute -bottom-4 ${isRTL ? '-right-4' : '-left-4'} bg-white rounded-xl p-4 shadow-xl`}>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-accent-gold fill-current" />
                    <div>
                      <div className="text-sm font-bold text-text-heading">4.8/5</div>
                      <div className="text-xs text-text-light">500+ Reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-accent-gold scale-125'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}