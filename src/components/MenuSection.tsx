'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from './TranslationProvider'
import { menuData, MenuItem } from '../data/menuData'
import MenuItemCard from './MenuItemCard'
import MenuModal from './MenuModal'

export default function MenuSection() {
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
      id="menu" 
      className={`py-20 bg-background-warm ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'} lg:text-center`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-primary to-accent-red text-white px-6 py-2 rounded-full text-sm font-medium shadow-warm">
              {t('menu.subtitle')}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-text-heading mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-accent-red bg-clip-text text-transparent">
              {t('menu.title')}
            </span>
          </h2>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData.items[activeCategory as keyof typeof menuData.items]?.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-warm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-heading mb-4">
              {t('menu.experienceMenu')}
            </h3>
            <p className="text-text-light mb-6">
              {t('menu.experienceDesc')}
            </p>
            <Link 
              href="/menu"
              className="inline-block bg-primary hover:bg-secondary-dark text-white font-semibold py-3 px-8 rounded-custom transition-all duration-300 shadow-warm hover:shadow-hover transform hover:-translate-y-1"
            >
              {t('menu.browseFullMenu')}
            </Link>
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