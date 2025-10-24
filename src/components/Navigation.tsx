'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from './TranslationProvider'
import LanguageSwitcher from './LanguageSwitcher'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMounted, setIsMounted] = useState(false)
  const { t, isRTL } = useTranslation()
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  
  const isHomePage = pathname === '/'

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsSticky(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'menu', 'reservations', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll)
    }
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  const handleNavigation = (sectionId: string) => {
    closeMenu()
    
    // If we're on homepage, scroll to section
    if (isHomePage) {
      const element = document.getElementById(sectionId)
      if (element) {
        const offsetTop = element.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    } else {
      // If we're on another page, navigate to homepage with hash
      window.location.href = `/#${sectionId}`
    }
  }

  const navItems = [
    { id: 'home', label: t('navigation.home'), route: '/' },
    { id: 'about', label: t('navigation.about'), route: '/about' },
    { id: 'menu', label: t('navigation.menu'), route: '/menu' },
    { id: 'reservations', label: t('navigation.reservations'), route: null },
    { id: 'contact', label: t('navigation.contact'), route: null }
  ]

  if (!isMounted) return null

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isSticky 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-primary-gradient'
    }`}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className={`flex items-center justify-between h-20 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/image/3D_Logo.png"
                alt="Al Diwan Al Yemeni"
                width={50}
                height={50}
                className="w-12 h-12 object-contain"
                priority
              />
              <div className={`${isRTL ? 'mr-3' : 'ml-3'} hidden sm:block`}>
                <h1 className={`text-lg font-bold ${
                  isSticky ? 'text-primary' : 'text-white'
                }`}>
                  {t('appName')}
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {navItems.map((item) => {
              // If item has a route, use Link component
              if (item.route) {
                return (
                  <Link
                    key={item.id}
                    href={item.route}
                    onClick={() => handleNavigation(item.id)}
                    className={`nav-link ${
                      pathname === item.route ? 'active' : ''
                    } ${isSticky ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-accent-gold'}`}
                    style={ isSticky ? { '--underline-color': 'var(--primary)' } as React.CSSProperties : {} }
                  >
                    {item.label}
                  </Link>
                )
              }
              
              // Otherwise use button for smooth scrolling
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`nav-link ${
                    activeSection === item.id ? 'active' : ''
                  } ${isSticky ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-accent-gold'}`}
                >
                  {item.label}
                </button>
              )
            })}
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <LanguageSwitcher isSticky={isSticky} />
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                isSticky ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Menu"
            >
              <div className="relative w-6 h-6">
                <span className={`block h-0.5 w-6 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                } ${isSticky ? 'bg-gray-800' : 'bg-white'}`}></span>
                <span className={`block h-0.5 w-6 transition-all duration-300 mt-1.5 ${
                  isMenuOpen ? 'opacity-0' : ''
                } ${isSticky ? 'bg-gray-800' : 'bg-white'}`}></span>
                <span className={`block h-0.5 w-6 transition-all duration-300 mt-1.5 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                } ${isSticky ? 'bg-gray-800' : 'bg-white'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white border-t border-gray-200 py-4 space-y-2">
            {navItems.map((item) => {
              // If item has a route, use Link component
              if (item.route) {
                return (
                  <Link
                    key={item.id}
                    href={item.route}
                    onClick={() => handleNavigation(item.id)}
                    className={`block w-full px-4 py-3 text-gray-800 hover:text-primary hover:bg-gray-50 transition-colors duration-200 ${
                      pathname === item.route ? 'text-primary bg-gray-50' : ''
                    } ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    {item.label}
                  </Link>
                )
              }
              
              // Otherwise use button for smooth scrolling
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`block w-full px-4 py-3 text-gray-800 hover:text-primary hover:bg-gray-50 transition-colors duration-200 ${
                    activeSection === item.id ? 'text-primary bg-gray-50' : ''
                  } ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}