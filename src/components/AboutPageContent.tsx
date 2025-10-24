import React from 'react'
import { useTranslation } from './TranslationProvider'
import Image from 'next/image'
import { Award, Users, Clock, Sparkles, Heart, History, Coffee } from 'lucide-react'

export default function AboutPageContent() {
  const { t, isRTL } = useTranslation()

  const sections = [
    {
      icon: History,
      title: t('aboutPage.heritage.title'),
      content: t('aboutPage.heritage.content')
    },
    {
      icon: Award,
      title: t('aboutPage.pioneer.title'),
      content: t('aboutPage.pioneer.content')
    },
    {
      icon: Users,
      title: t('aboutPage.team.title'),
      content: t('aboutPage.team.content')
    },
    {
      icon: Sparkles,
      title: t('aboutPage.quality.title'),
      content: t('aboutPage.quality.content')
    },
    {
      icon: Heart,
      title: t('aboutPage.service.title'),
      content: t('aboutPage.service.content')
    }
  ]

  return (
    <div className={`${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative bg-primary-gradient text-white py-20">
        <div className="absolute inset-0 pattern-geometric opacity-10"></div>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <span className="bg-accent-gold/20 text-accent-gold px-6 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-accent-gold/30">
                {t('aboutPage.subtitle')}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t('aboutPage.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {t('aboutPage.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 bg-background-default">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-12 gap-8 items-start ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Icon & Title Column */}
                <div className={`lg:col-span-4 ${index % 2 === 0 ? '' : 'lg:col-start-9'}`}>
                  <div className="sticky top-24">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6">
                      <section.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className={`text-3xl md:text-4xl font-bold text-text-heading mb-4 ${
                      isRTL ? 'text-right' : 'text-left'
                    }`}>
                      {section.title}
                    </h2>
                    <div className="w-20 h-1 bg-accent-gold rounded-full"></div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-8 ${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-warm">
                    <p className={`text-lg text-text-body leading-relaxed whitespace-pre-line ${
                      isRTL ? 'text-right' : 'text-left'
                    }`}>
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diwan Heritage Section - Special Emphasis */}
      <section className="py-20 bg-gradient-to-br from-secondary-light to-background-warm">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-2xl mb-6">
                <Coffee className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-heading mb-6">
                {t('aboutPage.diwan.title')}
              </h2>
              <div className="w-24 h-1 bg-accent-gold rounded-full mx-auto"></div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-warm">
                <p className={`text-lg text-text-body leading-relaxed whitespace-pre-line ${
                  isRTL ? 'text-right' : 'text-left'
                }`}>
                  {t('aboutPage.diwan.content')}
                </p>
              </div>

              {/* Image Gallery */}
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/image/WhatsApp Image 2025-10-21 at 15.30.18_68253f73.jpg"
                    alt={t('about.imageAlt.main')}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/image/WhatsApp Image 2025-10-21 at 15.30.19_c81034b7.jpg"
                    alt={t('about.imageAlt.dish')}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-8">
              {t('aboutPage.hours.title')}
            </h2>
            
            <div className="bg-gradient-to-br from-secondary-light to-background-warm rounded-2xl p-8 md:p-12 shadow-warm">
              <div className="space-y-6">
                <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-lg font-semibold text-text-heading">
                    {t('contact.hours.weekdays')}
                  </span>
                </div>
                <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-lg font-semibold text-text-heading">
                    {t('contact.hours.weekend')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-gradient text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-white/80">{t('about.stats.yearsExp')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50k+</div>
              <div className="text-white/80">{t('about.stats.customers')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-white/80">{t('about.stats.dishes')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-white/80">{t('aboutPage.stats.chefs')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
