'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from './TranslationProvider'
import { menuData, MenuItem } from '../data/menuData'
import MenuItemCard from './MenuItemCard'
import MenuModal from './MenuModal'

export default function HomeMenuSection() {
  const { t, isRTL } = useTranslation()
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  // For home page, we'll show only popular items from main categories
  const featuredCategories = ['mains', 'rice', 'grilled']
  const maxItemsPerCategory = 2
  
  const getFeaturedItems = () => {
    const featured: MenuItem[] = []
    
    featuredCategories.forEach(category => {
      const categoryItems = menuData.items[category as keyof typeof menuData.items] || []
      // Cast to MenuItem[] to access optional properties
      const typedItems = categoryItems as MenuItem[]
      
      // First get popular items, then other items
      const popularItems = typedItems.filter(item => item.popular === true)
      const otherItems = typedItems.filter(item => item.popular !== true)
      const allItems = [...popularItems, ...otherItems]
      
      // Take only the first maxItemsPerCategory items
      featured.push(...allItems.slice(0, maxItemsPerCategory))
    })
    
    return featured
  }

  const handleViewDetails = (item: MenuItem) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  const featuredItems = getFeaturedItems()

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
              {t('homeMenu.subtitle')}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-text-heading mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-accent-red bg-clip-text text-transparent">
              {t('homeMenu.title')}
            </span>
          </h2>
          
          <p className="text-text-light text-lg max-w-3xl mx-auto">
            {t('homeMenu.description')}
          </p>
        </div>

        {/* Featured Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredItems.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* Category Preview */}
        {/* <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-text-heading mb-6">
            {t('homeMenu.categoriesTitle')}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.keys(menuData.categories).map((category) => (
              <div
                key={category}
                className="bg-white px-6 py-3 rounded-full font-medium shadow-warm border border-gray-100"
              >
                {isRTL 
                  ? menuData.categories[category as keyof typeof menuData.categories].ar
                  : menuData.categories[category as keyof typeof menuData.categories].en
                }
              </div>
            ))}
          </div>
        </div> */}

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-warm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-heading mb-4">
              {t('homeMenu.ctaTitle')}
            </h3>
            <p className="text-text-light mb-6">
              {t('homeMenu.ctaDescription')}
            </p>
            <Link 
              href="/menu"
              className="inline-block bg-primary hover:bg-secondary-dark text-white font-semibold py-3 px-8 rounded-custom transition-all duration-300 shadow-warm hover:shadow-hover transform hover:-translate-y-1"
            >
              {t('homeMenu.viewFullMenu')}
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