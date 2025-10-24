'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import i18n from 'i18next'
import { initReactI18next, useTranslation as useI18nTranslation } from 'react-i18next'

// Import translation files
import enTranslations from '../lang/en/common.json'
import arTranslations from '../lang/ar/common.json'

// Translation resources
const resources = {
  en: {
    translation: enTranslations
  },
  ar: {
    translation: arTranslations
  }
}

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

// Language Context
const LanguageContext = createContext({
  language: 'en',
  setLanguage: (lang: string) => {},
  isRTL: false
})

// Translation Provider Component
export default function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('en')
  const [isRTL, setIsRTL] = useState(false)

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') : null
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage)
      i18n.changeLanguage(savedLanguage)
      setIsRTL(savedLanguage === 'ar')
      document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr'
      document.documentElement.lang = savedLanguage
    }
  }, [])

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang)
    setIsRTL(lang === 'ar')
    i18n.changeLanguage(lang)
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
      document.documentElement.lang = lang
    }
  }

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: handleLanguageChange, 
      isRTL 
    }}>
      <div className={`${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

// Custom hook to use translation
export function useTranslation() {
  const context = useContext(LanguageContext)
  const { t, i18n } = useI18nTranslation()
  
  return {
    t,
    i18n,
    language: context.language,
    setLanguage: context.setLanguage,
    isRTL: context.isRTL
  }
}