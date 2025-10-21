'use client'

import React from 'react'
import { useTranslation } from './TranslationProvider'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  const { language, setLanguage, isRTL, t } = useTranslation()

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en'
    setLanguage(newLanguage)
  }

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300 ${
        isRTL ? 'flex-row-reverse' : ''
      }`}
      aria-label="Switch Language"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">
        {t('navigation.language')}
      </span>
    </button>
  )
}