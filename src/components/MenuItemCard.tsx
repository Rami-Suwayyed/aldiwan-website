'use client'

import React, { useState } from 'react'
import { useTranslation } from './TranslationProvider'
import Image from 'next/image'
import { Star, Flame, Crown, Eye } from 'lucide-react'
import { MenuItem } from '../data/menuData'

interface MenuItemCardProps {
  item: MenuItem
  onViewDetails: (item: MenuItem) => void
}

export default function MenuItemCard({ item, onViewDetails }: MenuItemCardProps) {
  const { t, isRTL } = useTranslation()
  const [imageLoaded, setImageLoaded] = useState(false)

  const getSpiceLevel = (level: number) => {
    const flames = []
    for (let i = 0; i < 3; i++) {
      flames.push(
        <Flame 
          key={i} 
          className={`w-3 h-3 ${i < level ? 'text-red-500 fill-current' : 'text-gray-300'}`} 
        />
      )
    }
    return flames
  }

  return (
    <div className={`group bg-white rounded-2xl overflow-hidden shadow-warm hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${
      isRTL ? 'text-right' : 'text-left'
    }`}>
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
        <Image
          src={item.image}
          alt={isRTL ? item.name.ar : item.name.en}
          fill
          className={`object-cover transition-all duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className={`absolute top-3 ${isRTL ? 'left-3' : 'right-3'} flex flex-col gap-2`}>
          {item.popular && (
            <div className="bg-accent-gold text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Crown className="w-3 h-3" />
              <span>Popular</span>
            </div>
          )}
          {item.spicy && item.spicy > 0 && (
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <div className="flex">
                {getSpiceLevel(item.spicy)}
              </div>
            </div>
          )}
        </div>

        {/* Price Badge */}
        {/* <div className={`absolute bottom-3 ${isRTL ? 'right-3' : 'left-3'} bg-white text-primary px-3 py-1 rounded-full font-bold text-sm shadow-lg`}>
          ${item.price}
        </div> */}

        {/* View Details Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onViewDetails(item)}
            className={`bg-white text-primary px-6 py-2 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 ${
              isRTL ? 'flex-row-reverse' : ''
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>{t('menu.viewDetails')}</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name */}
        <h3 className="text-xl font-bold text-text-heading mb-2 group-hover:text-primary transition-colors duration-300">
          {isRTL ? item.name.ar : item.name.en}
        </h3>

        {/* Description */}
        <p className="text-text-light text-sm leading-relaxed mb-4 line-clamp-2">
          {isRTL ? item.description.ar : item.description.en}
        </p>

        {/* Rating & Order Button */}
        <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-accent-gold fill-current" />
            ))}
            <span className="text-sm text-text-light ml-2">4.8</span>
          </div>

          {/* <button className="bg-primary hover:bg-secondary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg">
            {t('menu.orderNow')}
          </button> */}
        </div>
      </div>
    </div>
  )
}