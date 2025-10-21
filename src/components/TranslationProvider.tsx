'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import i18n from 'i18next'
import { initReactI18next, useTranslation as useI18nTranslation } from 'react-i18next'

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      navigation: {
        home: 'Home',
        menu: 'Menu',
        about: 'About Us',
        reservations: 'Reservations',
        contact: 'Contact',
        language: 'العربية'
      },
      
      // Hero Section
      hero: {
        title: 'Authentic Yemeni Flavors',
        subtitle: 'Experience the Rich Heritage of Yemen',
        description: 'Welcome to Al Diwan Al Yemeni, where traditional Yemeni cuisine meets modern hospitality. Discover authentic flavors passed down through generations.',
        cta: {
          menu: 'View Menu',
          reservations: 'Make Reservation'
        }
      },
      
      // About Section
      about: {
        title: 'Our Story',
        subtitle: 'Preserving Tradition',
        description: 'Al Diwan Al Yemeni brings the authentic taste of Yemen to your table. Our chefs use traditional recipes and the finest ingredients to create an unforgettable dining experience.',
        features: {
          authentic: 'Authentic Recipes',
          fresh: 'Fresh Ingredients',
          heritage: 'Cultural Heritage',
          hospitality: 'Warm Hospitality'
        }
      },
      
      // Menu Section
      menu: {
        title: 'Our Menu',
        subtitle: 'Traditional Yemeni Cuisine',
        categories: {
          mains: 'Main Dishes',
          rice: 'Rice Dishes',
          grilled: 'Grilled Specialties',
          appetizers: 'Appetizers',
          desserts: 'Desserts',
          beverages: 'Beverages'
        },
        viewDetails: 'View Details',
        orderNow: 'Order Now'
      },
      
      // Reservations
      reservations: {
        title: 'Make a Reservation',
        subtitle: 'Book Your Table',
        form: {
          name: 'Full Name',
          email: 'Email Address',
          phone: 'Phone Number',
          date: 'Reservation Date',
          time: 'Preferred Time',
          guests: 'Number of Guests',
          requests: 'Special Requests',
          submit: 'Book Table'
        },
        success: 'Reservation request sent successfully! We will contact you shortly.',
        error: 'Please fill in all required fields.'
      },
      
      // Contact
      contact: {
        title: 'Contact Us',
        subtitle: 'Get in Touch',
        info: {
          address: 'Restaurant Address',
          phone: 'Phone Number',
          email: 'Email Address',
          hours: 'Opening Hours'
        },
        form: {
          name: 'Your Name',
          email: 'Your Email',
          subject: 'Subject',
          message: 'Your Message',
          send: 'Send Message'
        },
        success: 'Message sent successfully!',
        hours: {
          weekdays: 'Mon - Thu: 11:00 AM - 11:00 PM',
          weekend: 'Fri - Sun: 11:00 AM - 12:00 AM'
        }
      },
      
      // Footer
      footer: {
        description: 'Experience authentic Yemeni cuisine in a warm, welcoming atmosphere.',
        quickLinks: 'Quick Links',
        contactInfo: 'Contact Info',
        followUs: 'Follow Us',
        rights: '© 2024 Al Diwan Al Yemeni. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      },
      
      // Common
      common: {
        loading: 'Loading...',
        viewMore: 'View More',
        readMore: 'Read More',
        getDirections: 'Get Directions'
      }
    }
  },
  ar: {
    translation: {
      // Navigation
      navigation: {
        home: 'الرئيسية',
        menu: 'القائمة',
        about: 'من نحن',
        reservations: 'الحجوزات',
        contact: 'اتصل بنا',
        language: 'English'
      },
      
      // Hero Section
      hero: {
        title: 'النكهات اليمنية الأصيلة',
        subtitle: 'اكتشف التراث الغني لليمن',
        description: 'مرحباً بكم في الديوان اليمني، حيث تلتقي الأطباق اليمنية التقليدية بالضيافة العصرية. اكتشفوا النكهات الأصيلة المتوارثة عبر الأجيال.',
        cta: {
          menu: 'عرض القائمة',
          reservations: 'احجز طاولتك'
        }
      },
      
      // About Section
      about: {
        title: 'قصتنا',
        subtitle: 'الحفاظ على التراث',
        description: 'يقدم الديوان اليمني الطعم الأصيل لليمن إلى مائدتكم. يستخدم طهاتنا الوصفات التقليدية وأجود المكونات لخلق تجربة طعام لا تُنسى.',
        features: {
          authentic: 'وصفات أصيلة',
          fresh: 'مكونات طازجة',
          heritage: 'تراث ثقافي',
          hospitality: 'ضيافة دافئة'
        }
      },
      
      // Menu Section
      menu: {
        title: 'قائمة الطعام',
        subtitle: 'المأكولات اليمنية التقليدية',
        categories: {
          mains: 'الأطباق الرئيسية',
          rice: 'أطباق الأرز',
          grilled: 'المشاوي',
          appetizers: 'المقبلات',
          desserts: 'الحلويات',
          beverages: 'المشروبات'
        },
        viewDetails: 'عرض التفاصيل',
        orderNow: 'اطلب الآن'
      },
      
      // Reservations
      reservations: {
        title: 'احجز طاولتك',
        subtitle: 'حجز الطاولات',
        form: {
          name: 'الاسم الكامل',
          email: 'البريد الإلكتروني',
          phone: 'رقم الهاتف',
          date: 'تاريخ الحجز',
          time: 'الوقت المفضل',
          guests: 'عدد الأشخاص',
          requests: 'طلبات خاصة',
          submit: 'احجز الطاولة'
        },
        success: 'تم إرسال طلب الحجز بنجاح! سنتواصل معكم قريباً.',
        error: 'يرجى ملء جميع الحقول المطلوبة.'
      },
      
      // Contact
      contact: {
        title: 'اتصل بنا',
        subtitle: 'تواصل معنا',
        info: {
          address: 'عنوان المطعم',
          phone: 'رقم الهاتف',
          email: 'البريد الإلكتروني',
          hours: 'ساعات العمل'
        },
        form: {
          name: 'اسمك',
          email: 'بريدك الإلكتروني',
          subject: 'الموضوع',
          message: 'رسالتك',
          send: 'إرسال الرسالة'
        },
        success: 'تم إرسال الرسالة بنجاح!',
        hours: {
          weekdays: 'الإثنين - الخميس: 11:00 ص - 11:00 م',
          weekend: 'الجمعة - الأحد: 11:00 ص - 12:00 ص'
        }
      },
      
      // Footer
      footer: {
        description: 'اكتشفوا المأكولات اليمنية الأصيلة في أجواء دافئة ومرحبة.',
        quickLinks: 'روابط سريعة',
        contactInfo: 'معلومات الاتصال',
        followUs: 'تابعونا',
        rights: '© 2024 الديوان اليمني. جميع الحقوق محفوظة.',
        privacy: 'سياسة الخصوصية',
        terms: 'شروط الخدمة'
      },
      
      // Common
      common: {
        loading: 'جارٍ التحميل...',
        viewMore: 'عرض المزيد',
        readMore: 'اقرأ المزيد',
        getDirections: 'الحصول على الاتجاهات'
      }
    }
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