'use client'

import React from 'react'
import { useTranslation } from './TranslationProvider'
import Image from 'next/image'
import { Award, Heart, ChefHat, Clock } from 'lucide-react'

export default function AboutSection() {
  const { t, isRTL } = useTranslation()

  const features = [
    {
      icon: ChefHat,
      title: t('about.features.authentic'),
      description: t('about.features.authenticDesc')
    },
    {
      icon: Heart,
      title: t('about.features.fresh'),
      description: t('about.features.freshDesc')
    },
    {
      icon: Award,
      title: t('about.features.heritage'),
      description: t('about.features.heritageDesc')
    },
    {
      icon: Clock,
      title: t('about.features.hospitality'),
      description: t('about.features.hospitalityDesc')
    }
  ]

  return (
    <section 
      id="about" 
      className={`py-20 ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Text Content */}
          <div className={`space-y-8 ${isRTL ? 'lg:col-start-2 text-right' : 'lg:col-start-1 text-left'}`}>
            <div className="space-y-6">
              {/* Subtitle */}
              <div className="inline-block">
                <span className="bg-gradient-to-r from-primary to-accent-red text-white px-6 py-2 rounded-full text-sm font-medium shadow-warm">
                  {t('about.subtitle')}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-text-heading leading-tight">
                <span className="bg-gradient-to-r from-primary to-accent-red bg-clip-text text-transparent">
                  {t('about.title')}
                </span>
              </h2>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-text-body leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group bg-white rounded-custom p-6 shadow-warm hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${
                    isRTL ? 'text-right' : 'text-left'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-custom"></div>
                  
                  <div className={`relative flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} items-start gap-4`}>
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-red rounded-custom flex items-center justify-center text-white shadow-warm">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-text-heading mb-2 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-text-light leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            {/* <div className={`grid grid-cols-3 gap-6 pt-8 ${isRTL ? 'text-right' : 'text-left'}`}> */}
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-text-light uppercase tracking-wide">{t('about.stats.yearsExp')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-red mb-2">50k+</div>
                <div className="text-sm text-text-light uppercase tracking-wide">{t('about.stats.customers')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-gold mb-2">100+</div>
                <div className="text-sm text-text-light uppercase tracking-wide">{t('about.stats.dishes')}</div>
              </div> */}
            {/* </div> */}
          </div>

          {/* Image Content */}
          <div className={`relative ${isRTL ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="aspect-[4/5]">
                  <Image 
                    src="/image/WhatsApp Image 2025-10-21 at 15.30.18_68253f73.jpg"
                    alt={t('about.title')}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Decorative elements */}
              {/* <div className={`absolute -top-6 ${isRTL ? '-left-6' : '-right-6'} w-24 h-24 bg-accent-gold rounded-full opacity-20 animate-pulse`}></div>
              <div className={`absolute -bottom-6 ${isRTL ? '-right-6' : '-left-6'} w-16 h-16 bg-accent-red rounded-full opacity-30`}></div> */}
              
              {/* Floating card */}
              {/* <div className={`absolute top-8 ${isRTL ? '-left-8' : '-right-8'} bg-white rounded-xl p-4 shadow-xl max-w-48`}>
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <div className="text-sm font-bold text-text-heading">{t('about.awards.winning')}</div>
                    <div className="text-xs text-text-light">{t('about.awards.bestRestaurant')}</div>
                  </div>
                </div>
              </div> */}

              {/* Second Image - smaller overlay */}
              {/* <div className={`absolute bottom-8 ${isRTL ? '-right-12' : '-left-12'} w-32 h-40 rounded-xl overflow-hidden shadow-xl border-4 border-white`}>
                <Image
                  src="/image/WhatsApp Image 2025-10-21 at 15.30.19_c81034b7.jpg"
                  alt={t('about.imageAlt.dish')}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}