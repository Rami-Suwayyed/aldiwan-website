'use client'

import React from 'react'
import { useTranslation } from './TranslationProvider'
import { Globe } from 'lucide-react'

interface LanguageSwitcherProps {
  isSticky?: boolean
}

export default function LanguageSwitcher({ isSticky = false }: LanguageSwitcherProps) {
  const { language, setLanguage, isRTL, t } = useTranslation()

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en'
    setLanguage(newLanguage)
  }

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 border border-transparent ${
        isRTL ? 'flex-row-reverse' : ''
      } ${
        isSticky 
          ? 'text-gray-800 hover:bg-gray-100 hover:border-gray-200 focus:bg-gray-100 focus:border-primary' 
          : 'text-white hover:bg-white/10 hover:border-white/20 focus:bg-white/10 focus:border-white/30'
      }`}
      aria-label={t('navigation.switchLanguage')}
    >
      <Globe className={`w-4 h-4 transition-colors duration-300 ${
        isSticky ? 'text-gray-600' : 'text-white/90'
      }`} />
      <span className={`text-sm font-medium transition-colors duration-300 ${
        isSticky ? 'text-gray-800' : 'text-white'
      }`}>
        {t('navigation.language')}
      </span>
    </button>
  )
}