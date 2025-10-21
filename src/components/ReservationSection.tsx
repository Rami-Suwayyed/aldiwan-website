'use client'

import React, { useState } from 'react'
import { useTranslation } from './TranslationProvider'
import { Calendar, Clock, Users, Phone, Mail, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react'
import toast from 'react-hot-toast'

export default function ReservationSection() {
  const { t, isRTL } = useTranslation()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    requests: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    const requiredFields = ['name', 'email', 'phone', 'date', 'time', 'guests']
    return requiredFields.every(field => formData[field as keyof typeof formData].trim() !== '')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error(t('reservations.error'), {
        duration: 4000,
        position: 'top-center',
        style: {
          background: 'var(--accent-red)',
          color: 'white',
          borderRadius: '16px',
          padding: '16px 24px',
          fontSize: '16px',
          fontWeight: '500',
          direction: isRTL ? 'rtl' : 'ltr',
          textAlign: isRTL ? 'right' : 'left'
        }
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Mock API call - replace with actual reservation system
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success(t('reservations.success'), {
        duration: 6000,
        position: 'top-center',
        style: {
          background: 'var(--primary)',
          color: 'white',
          borderRadius: '16px',
          padding: '16px 24px',
          fontSize: '16px',
          fontWeight: '500',
          direction: isRTL ? 'rtl' : 'ltr',
          textAlign: isRTL ? 'right' : 'left'
        }
      })
      
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        requests: ''
      })
    } catch (error) {
      toast.error('An error occurred. Please try again.', {
        duration: 4000,
        position: 'top-center'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const timeSlots = [
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00', '21:30', '22:00'
  ]

  const guestOptions = Array.from({ length: 12 }, (_, i) => i + 1)

  return (
    <section 
      id="reservations" 
      className={`py-20 bg-white ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className={`grid lg:grid-cols-2 gap-16 items-start ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Form Section */}
          <div className={`${isRTL ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
            <div className="space-y-8">
              {/* Header */}
              <div className={`space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="inline-block">
                  <span className="bg-gradient-to-r from-primary to-accent-red text-white px-6 py-2 rounded-full text-sm font-medium shadow-warm">
                    {t('reservations.subtitle')}
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-text-heading leading-tight">
                  <span className="bg-gradient-to-r from-primary to-accent-red bg-clip-text text-transparent">
                    {t('reservations.title')}
                  </span>
                </h2>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className={`block text-sm font-medium text-text-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('reservations.form.name')} *
                    </label>
                    <div className="relative">
                      <User className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-light ${
                        isRTL ? 'right-3' : 'left-3'
                      }`} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`form-input ${isRTL ? 'pr-12 text-right' : 'pl-12'}`}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className={`block text-sm font-medium text-text-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('reservations.form.email')} *
                    </label>
                    <div className="relative">
                      <Mail className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-light ${
                        isRTL ? 'right-3' : 'left-3'
                      }`} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`form-input ${isRTL ? 'pr-12 text-right' : 'pl-12'}`}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className={`block text-sm font-medium text-text-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('reservations.form.phone')} *
                  </label>
                  <div className="relative">
                    <Phone className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-light ${
                      isRTL ? 'right-3' : 'left-3'
                    }`} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`form-input ${isRTL ? 'pr-12 text-right' : 'pl-12'}`}
                      required
                    />
                  </div>
                </div>

                {/* Date, Time, and Guests */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className={`block text-sm font-medium text-text-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('reservations.form.date')} *
                    </label>
                    <div className="relative">
                      <Calendar className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-light ${
                        isRTL ? 'right-3' : 'left-3'
                      }`} />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`form-input ${isRTL ? 'pr-12 text-right' : 'pl-12'}`}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className={`block text-sm font-medium text-text-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('reservations.form.time')} *
                    </label>
                    <div className="relative">
                      <Clock className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-light ${
                        isRTL ? 'right-3' : 'left-3'
                      }`} />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className={`form-input ${isRTL ? 'pr-12 text-right' : 'pl-12'}`}
                        required
                      >
                        <option value="">Select Time</option>
                        {timeSlots.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className={`block text-sm font-medium text-text-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('reservations.form.guests')} *
                    </label>
                    <div className="relative">
                      <Users className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-light ${
                        isRTL ? 'right-3' : 'left-3'
                      }`} />
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className={`form-input ${isRTL ? 'pr-12 text-right' : 'pl-12'}`}
                        required
                      >
                        {guestOptions.map(num => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <label className={`block text-sm font-medium text-text-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('reservations.form.requests')}
                  </label>
                  <div className="relative">
                    <MessageSquare className={`absolute top-3 w-5 h-5 text-text-light ${
                      isRTL ? 'right-3' : 'left-3'
                    }`} />
                    <textarea
                      name="requests"
                      value={formData.requests}
                      onChange={handleInputChange}
                      rows={4}
                      className={`form-textarea ${isRTL ? 'pr-12 text-right' : 'pl-12'}`}
                      placeholder={isRTL ? 'أي طلبات خاصة أو ملاحظات...' : 'Any special requests or notes...'}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary hover:bg-secondary-dark text-white font-semibold py-4 px-8 rounded-custom transition-all duration-300 shadow-warm hover:shadow-hover transform hover:-translate-y-1 disabled:opacity-70 disabled:transform-none flex items-center justify-center gap-3 ${
                    isRTL ? 'flex-row-reverse' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{isRTL ? 'جارٍ الإرسال...' : 'Submitting...'}</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>{isRTL ? 'تم الإرسال!' : 'Submitted!'}</span>
                    </>
                  ) : (
                    <span>{t('reservations.form.submit')}</span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Info Section */}
          <div className={`${isRTL ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
            <div className="bg-gradient-to-br from-primary to-accent-red rounded-2xl p-8 text-white shadow-2xl">
              <h3 className={`text-2xl font-bold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                {isRTL ? 'معلومات الحجز' : 'Reservation Information'}
              </h3>
              
              <div className="space-y-6">
                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      {isRTL ? 'ساعات العمل' : 'Opening Hours'}
                    </h4>
                    <div className="text-white/90 text-sm space-y-1">
                      <div>{t('contact.hours.weekdays')}</div>
                      <div>{t('contact.hours.weekend')}</div>
                    </div>
                  </div>
                </div>

                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      {isRTL ? 'سياسة الحجز' : 'Reservation Policy'}
                    </h4>
                    <div className="text-white/90 text-sm space-y-1">
                      <div>{isRTL ? '• تأكيد الحجز خلال 24 ساعة' : '• Confirmation within 24 hours'}</div>
                      <div>{isRTL ? '• يُفضل الحجز المسبق' : '• Advance booking recommended'}</div>
                      <div>{isRTL ? '• إلغاء مجاني قبل 2 ساعة' : '• Free cancellation 2 hours prior'}</div>
                    </div>
                  </div>
                </div>

                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      {isRTL ? 'تواصل فوري' : 'Instant Contact'}
                    </h4>
                    <div className="text-white/90 text-sm">
                      <div>{isRTL ? 'للحجز السريع: ' : 'Quick booking: '}+1 (555) 123-4567</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className={`text-sm text-white/90 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {isRTL 
                    ? 'احجز طاولتك الآن واستمتع بتجربة طعام لا تُنسى في أجواء يمنية أصيلة'
                    : 'Book your table now and enjoy an unforgettable dining experience in authentic Yemeni atmosphere'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}