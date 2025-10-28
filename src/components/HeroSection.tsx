'use client'

import { useTranslation } from './TranslationProvider'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const { t, isRTL } = useTranslation()

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
    <section id="home" className="relative overflow-hidden h-screen w-full bg-white">
      {/* Background Image - Full coverage */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/image/cover-page2.png"
          alt="Al Diwan Al Yemeni Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
          sizes="100vw"
        />
      </div>

      {/* Content Container - Centered with responsive padding */}
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6">
            
            {/* Centered Logo - Responsive sizing */}
            <div className="relative w-full max-w-[240px] sm:max-w-[320px] md:max-w-md lg:max-w-lg">
              <div className="relative aspect-square w-full">
                <Image
                  src="/image/Logo2.png"
                  alt="Al Diwan Al Yemeni Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  quality={100}
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, (max-width: 1024px) 448px, 512px"
                />
              </div>
            </div>

            {/* CTA Buttons - Enhanced mobile responsiveness */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto max-w-md sm:max-w-none ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              {/* Primary Button - View Menu */}
              <button
                onClick={() => scrollToSection('menu')}
                className={`group bg-accent-gold hover:bg-accent-gold/90 text-white font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-custom transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 sm:gap-3 shadow-[0_4px_12px_rgba(218,165,32,0.3)] sm:shadow-[0_8px_16px_rgba(218,165,32,0.4)] hover:shadow-[0_8px_20px_rgba(218,165,32,0.5)] sm:hover:shadow-[0_12px_24px_rgba(218,165,32,0.5)] border-2 border-accent-gold w-full sm:w-auto ${
                  isRTL ? 'flex-row-reverse' : ''
                }`}
              >
                <span className="text-base sm:text-lg">{t('hero.cta.menu')}</span>
                <ArrowRight className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1 ${
                  isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
                }`} />
              </button>
              
              {/* Secondary Button - Reservations */}
              <button
                onClick={() => scrollToSection('reservations')}
                className="bg-white/95 backdrop-blur-sm hover:bg-white text-primary hover:text-secondary-dark font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-custom transition-all duration-300 border-2 border-primary hover:border-secondary-dark shadow-[0_4px_12px_rgba(0,0,0,0.12)] sm:shadow-[0_8px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)] sm:hover:shadow-[0_12px_24px_rgba(0,0,0,0.2)] transform hover:-translate-y-1 w-full sm:w-auto"
              >
                <span className="text-base sm:text-lg">{t('hero.cta.reservations')}</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center shadow-lg bg-white/10 backdrop-blur-sm">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  )
}