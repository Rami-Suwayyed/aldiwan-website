'use client'

import React, { useEffect } from 'react'
import { useTranslation } from './TranslationProvider'
import Image from 'next/image'
// import { X, Star, Flame, ShoppingCart, Clock, Users } from 'lucide-react'
import { X, Flame, Clock, Users } from 'lucide-react'
import { MenuItem } from '../data/menuData'

interface MenuModalProps {
  item: MenuItem
  isOpen: boolean
  onClose: () => void
}

export default function MenuModal({ item, isOpen, onClose }: MenuModalProps) {
  const { t, isRTL } = useTranslation()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const getSpiceLevel = (level: number) => {
    const flames = []
    for (let i = 0; i < 3; i++) {
      flames.push(
        <Flame 
          key={i} 
          className={`w-4 h-4 ${i < level ? 'text-red-500 fill-current' : 'text-gray-300'}`} 
        />
      )
    }
    return flames
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0" 
        onClick={onClose}
        aria-label="Close modal"
      />
      
      <div className={`relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl ${
        isRTL ? 'text-right' : 'text-left'
      }`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-10 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl`}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
          <Image
            src={item.image}
            alt={isRTL ? item.name.ar : item.name.en}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Price Badge */}
          {/* <div className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'} bg-white text-primary px-4 py-2 rounded-full font-bold text-lg shadow-lg`}>
            ${item.price}
          </div> */}

          {/* Popular Badge */}
          {item.popular && (
            <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} bg-accent-gold text-white px-3 py-1 rounded-full text-sm font-medium`}>
              🏆 Popular
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-text-heading mb-2">
              {isRTL ? item.name.ar : item.name.en}
            </h2>
            
            {/* Rating and Spice Level */}
            <div className={`flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {/* {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent-gold fill-current" />
                  ))} */}
                </div>
                {/* <span className="text-sm text-text-light">4.8 (127 reviews)</span> */}
              </div>
              
              {item.spicy && item.spicy > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-text-light">Spice Level:</span>
                  <div className="flex">
                    {getSpiceLevel(item.spicy)}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-text-body leading-relaxed">
              {isRTL ? item.description.ar : item.description.en}
            </p>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-background-warm rounded-xl">
            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm font-medium text-text-heading">Prep Time</div>
                <div className="text-sm text-text-light">15-20 mins</div>
              </div>
            </div>
            
            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Users className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm font-medium text-text-heading">Serves</div>
                <div className="text-sm text-text-light">2-3 people</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {/* <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <button className={`flex-1 bg-primary hover:bg-secondary-dark text-white font-semibold py-4 px-6 rounded-custom transition-all duration-300 shadow-warm hover:shadow-hover transform hover:-translate-y-1 flex items-center justify-center gap-3 ${
              isRTL ? 'flex-row-reverse' : ''
            }`}>
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart - ${item.price}</span>
            </button>
            
            <button className="bg-accent-gold hover:bg-accent-gold/90 text-white font-semibold py-4 px-6 rounded-custom transition-all duration-300 shadow-warm hover:shadow-hover">
              {isRTL ? 'اطلب الآن' : 'Order Now'}
            </button>
          </div> */}

          {/* Allergen Info */}
          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <h4 className="text-sm font-semibold text-text-heading mb-2">
              {isRTL ? 'معلومات الحساسية:' : 'Allergen Information:'}
            </h4>
            <p className="text-xs text-text-light">
              {isRTL 
                ? 'قد يحتوي على المكسرات والغلوتين ومنتجات الألبان. يرجى إبلاغ الخادم بأي حساسية غذائية.'
                : 'May contain nuts, gluten, and dairy products. Please inform your server of any food allergies.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}