'use client'

import React, { useState, useEffect } from 'react'
import { useTranslation } from './TranslationProvider'
import Image from 'next/image'
import Link from 'next/link'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  ChevronUp,
  ChevronRight,
  Heart
} from 'lucide-react'

export default function Footer() {
  const { t, isRTL } = useTranslation()
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      // Show button after scrolling past 50% of viewport height
      if (scrollPosition > windowHeight * 0.5) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    // Scroll to section if it exists on the current page
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const footerLinks = [
    { id: 'home', label: t('navigation.home'), route: '/' },
    { id: 'about', label: t('navigation.about'), route: '/about' },
    { id: 'menu', label: t('navigation.menu'), route: '/menu' },
    { id: 'reservations', label: t('navigation.reservations'), route: null },
    { id: 'contact', label: t('navigation.contact'), route: null }
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className={`relative bg-primary-gradient text-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Decorative Pattern */}
      <div className="absolute inset-0 pattern-geometric opacity-10"></div>
      
      {/* Back to Top Button */}
      {isMounted && showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-accent-gold hover:bg-accent-gold/90 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-hover transition-all duration-300 transform hover:-translate-y-1"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-16">
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Image
                  src="/image/lodo0.webp"
                  alt="Al Diwan Al Yemeni"
                  width={50}
                  height={50}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold">
                    {t('appName')}
                  </h3>
                </div>
              </div>
              
              <p className="text-white/90 leading-relaxed">
                {t('footer.description')}
              </p>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h4>
                <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <a
                    href="https://www.facebook.com/profile.php?id=61580965021646&mibextid=wwXIfr&rdid=dyK28cwi7gnKrYln&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1H6DRpPS8M%2F%3Fmibextid%3DwwXIfr#"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/dewanresturant.jo?igsh=bjF2cjV3ZzZyamt4"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  {/* <a
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a> */}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
              <div className="space-y-3">
                {footerLinks.map((link) => {
                  if (link.route) {
                    return (
                      <Link
                        key={link.id}
                        href={link.route}
                        onClick={() => scrollToSection(link.id)}
                        className={`footer-link ${isRTL ? 'flex-row-reverse' : ''}`}
                        style={ link.route ? {} : { cursor: 'pointer' } }
                      >
                        <ChevronRight className={`w-3 h-3 transition-transform duration-300 group-hover:translate-x-1 ${
                          isRTL ? 'ml-3 rotate-180' : 'mr-3'
                        }`} />
                        <span>{link.label}</span>
                      </Link>
                    )
                  }
                  
                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className={`footer-link ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <ChevronRight className={`w-3 h-3 transition-transform duration-300 group-hover:translate-x-1 ${
                        isRTL ? 'ml-3 rotate-180' : 'mr-3'
                      }`} />
                      <span>{link.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold mb-4">{t('footer.contactInfo')}</h4>
              <div className="space-y-4">
                <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <MapPin className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                  <div className="text-white/90 text-sm" dangerouslySetInnerHTML={{__html: t('contact.location.address').replace(/,/g, '<br />')}} />
                </div>
                
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Phone className="w-5 h-5 text-accent-gold flex-shrink-0" />
                  <div className="text-white/90 text-sm" dir="ltr">
                    <a href={`tel:${t('contact.location.phone').replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                      {t('contact.location.phone')}
                    </a>
                  </div>
                </div>
                
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Mail className="w-5 h-5 text-accent-gold flex-shrink-0" />
                  <div className="text-white/90 text-sm" dir="ltr">
                    <a href={`mailto:${t('contact.location.email')}`} className="hover:text-white transition-colors">
                      {t('contact.location.email')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold mb-4">
                {t('footer.newsletter')}
              </h4>
              <p className="text-white/90 text-sm">
                {t('footer.newsletterDesc')}
              </p>
              
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder={t('footer.newsletterPlaceholder')}
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent ${
                    isRTL ? 'text-right' : 'text-left'
                  }`}
                />
                <button
                  type="submit"
                  className="w-full bg-accent-gold hover:bg-accent-gold/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  {t('footer.subscribe')}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-6">
            <div className={`flex flex-col md:flex-row items-center justify-between gap-4 ${
              isRTL ? 'md:flex-row-reverse text-right' : 'text-left'
            }`}>
              <div className={`flex items-center gap-1 text-white/90 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span>{t('footer.rights')}</span>
                <Heart className="w-4 h-4 text-red-400 mx-1" />
                <span>{t('footer.madeWithLove')}</span>
              </div>
              
              <div className={`flex items-center gap-6 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Link href="/privacy" className="text-white/90 hover:text-white transition-colors">
                  {t('footer.privacy')}
                </Link>
                <Link href="/terms" className="text-white/90 hover:text-white transition-colors">
                  {t('footer.terms')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}