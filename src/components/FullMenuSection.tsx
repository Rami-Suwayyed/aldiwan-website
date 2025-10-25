'use client'

import React, { useState } from 'react'
import { useTranslation } from './TranslationProvider'
import { menuData, MenuItem } from '../data/menuData'
import MenuItemCard from './MenuItemCard'
import MenuModal from './MenuModal'

export default function FullMenuSection() {
  const { t, isRTL } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('mains')
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  const categories = Object.keys(menuData.categories)

  const handleViewDetails = (item: MenuItem) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  return (
    <section 
      id="full-menu" 
      className={`py-20 bg-background-warm ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'} lg:text-center`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-primary to-accent-red text-white px-6 py-2 rounded-full text-sm font-medium shadow-warm">
              {t('fullMenu.subtitle')}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-text-heading mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-accent-red bg-clip-text text-transparent">
              {t('fullMenu.title')}
            </span>
          </h2>
          
          <p className="text-text-light text-lg max-w-3xl mx-auto">
            {t('fullMenu.description')}
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-hover transform -translate-y-1'
                  : 'bg-white text-text-body hover:bg-primary hover:text-white shadow-warm hover:shadow-hover'
              }`}
            >
              {isRTL 
                ? menuData.categories[category as keyof typeof menuData.categories].ar
                : menuData.categories[category as keyof typeof menuData.categories].en
              }
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {menuData.items[activeCategory as keyof typeof menuData.items]?.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* Menu Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-warm mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {Object.values(menuData.items).reduce((total, category) => total + category.length, 0)}
              </div>
              <div className="text-text-light">{t('fullMenu.stats.totalDishes')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {Object.keys(menuData.categories).length}
              </div>
              <div className="text-text-light">{t('fullMenu.stats.categories')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {Object.values(menuData.items).flat().filter(item => (item as MenuItem).popular).length}
              </div>
              <div className="text-text-light">{t('fullMenu.stats.popularDishes')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5★</div>
              <div className="text-text-light">{t('fullMenu.stats.averageRating')}</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-warm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-heading mb-4">
              {t('fullMenu.ctaTitle')}
            </h3>
            <p className="text-text-light mb-6">
              {t('fullMenu.ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="inline-block bg-primary hover:bg-secondary-dark text-white font-semibold py-3 px-8 rounded-custom transition-all duration-300 shadow-warm hover:shadow-hover transform hover:-translate-y-1"
              >
                {t('fullMenu.orderNow')}
              </a>
              <a 
                href="#reservations"
                className="inline-block bg-white border-2 border-primary hover:bg-primary text-primary hover:text-white font-semibold py-3 px-8 rounded-custom transition-all duration-300 shadow-warm hover:shadow-hover transform hover:-translate-y-1"
              >
                {t('fullMenu.makeReservation')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Item Modal */}
      {selectedItem && (
        <MenuModal
          item={selectedItem}
          isOpen={!!selectedItem}
          onClose={closeModal}
        />
      )}
    </section>
  )
}