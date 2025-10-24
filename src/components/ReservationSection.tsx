'use client'

import React from 'react'
import { useTranslation } from './TranslationProvider'
import { Calendar, Clock, Users, Phone, Mail, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'
import toast from 'react-hot-toast'

export default function ReservationSection() {
  const { t, isRTL } = useTranslation()
  const [state, handleSubmit] = useForm("meopjjag")

  // Show success toast when form is submitted successfully
  React.useEffect(() => {
    if (state.succeeded) {
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
    }
  }, [state.succeeded, t, isRTL])

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
              {state.succeeded ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-heading mb-2">
                    {t('reservations.success')}
                  </h3>
                  <p className="text-text-body">
                    {t('reservations.successMessage')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="res-name" className={`block text-sm font-medium text-text-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t('reservations.form.name')} *
                      </label>
                      <div className="relative">
                        <User className={`form-input-icon ${isRTL ? 'icon-right' : 'icon-left'}`} />
                        <input
                          id="res-name"
                          type="text"
                          name="name"
                          className={`form-input-with-icon ${isRTL ? 'has-right-icon' : 'has-left-icon'}`}
                          required
                        />
                        <ValidationError 
                          prefix="Name" 
                          field="name"
                          errors={state.errors}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="res-email" className={`block text-sm font-medium text-text-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t('reservations.form.email')} *
                      </label>
                      <div className="relative">
                        <Mail className={`form-input-icon ${isRTL ? 'icon-right' : 'icon-left'}`} />
                        <input
                          id="res-email"
                          type="email"
                          name="email"
                          className={`form-input-with-icon ${isRTL ? 'has-right-icon' : 'has-left-icon'}`}
                          required
                        />
                        <ValidationError 
                          prefix="Email" 
                          field="email"
                          errors={state.errors}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="res-phone" className={`block text-sm font-medium text-text-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('reservations.form.phone')} *
                    </label>
                    <div className="relative">
                      <Phone className={`form-input-icon ${isRTL ? 'icon-right' : 'icon-left'}`} />
                      <input
                        id="res-phone"
                        type="tel"
                        name="phone"
                        className={`form-input-with-icon ${isRTL ? 'has-right-icon' : 'has-left-icon'}`}
                        required
                      />
                      <ValidationError 
                        prefix="Phone" 
                        field="phone"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  {/* Date, Time, and Guests */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="res-date" className={`block text-sm font-medium text-text-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t('reservations.form.date')} *
                      </label>
                      <div className="relative">
                        <Calendar className={`form-input-icon ${isRTL ? 'icon-right' : 'icon-left'}`} />
                        <input
                          id="res-date"
                          type="date"
                          name="date"
                          min={new Date().toISOString().split('T')[0]}
                          className={`form-input-with-icon ${isRTL ? 'has-right-icon' : 'has-left-icon'}`}
                          required
                        />
                        <ValidationError 
                          prefix="Date" 
                          field="date"
                          errors={state.errors}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="res-time" className={`block text-sm font-medium text-text-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t('reservations.form.time')} *
                      </label>
                      <div className="relative">
                        <Clock className={`form-input-icon ${isRTL ? 'icon-right' : 'icon-left'}`} />
                        <select
                          id="res-time"
                          name="time"
                          className={`form-input-with-icon ${isRTL ? 'has-right-icon' : 'has-left-icon'}`}
                          required
                        >
                          <option value="">{t('common.selectTime')}</option>
                          {timeSlots.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                        <ValidationError 
                          prefix="Time" 
                          field="time"
                          errors={state.errors}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="res-guests" className={`block text-sm font-medium text-text-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t('reservations.form.guests')} *
                      </label>
                      <div className="relative">
                        <Users className={`form-input-icon ${isRTL ? 'icon-right' : 'icon-left'}`} />
                        <select
                          id="res-guests"
                          name="guests"
                          defaultValue="2"
                          className={`form-input-with-icon ${isRTL ? 'has-right-icon' : 'has-left-icon'}`}
                          required
                        >
                          {guestOptions.map(num => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? t('common.guest') : t('common.guests')}
                            </option>
                          ))}
                        </select>
                        <ValidationError 
                          prefix="Guests" 
                          field="guests"
                          errors={state.errors}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-2">
                    <label htmlFor="res-requests" className={`block text-sm font-medium text-text-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('reservations.form.requests')}
                    </label>
                    <div className="relative">
                      <MessageSquare className={`form-textarea-icon ${isRTL ? 'icon-right' : 'icon-left'}`} />
                      <textarea
                        id="res-requests"
                        name="requests"
                        rows={4}
                        className={`form-textarea-with-icon ${isRTL ? 'has-right-icon' : 'has-left-icon'}`}
                        placeholder={t('reservations.placeholder.requests')}
                      />
                      <ValidationError 
                        prefix="Requests" 
                        field="requests"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className={`w-full bg-primary hover:bg-secondary-dark text-white font-semibold py-4 px-8 rounded-custom transition-all duration-300 shadow-warm hover:shadow-hover transform hover:-translate-y-1 disabled:opacity-70 disabled:transform-none flex items-center justify-center gap-3 ${
                      isRTL ? 'flex-row-reverse' : ''
                    }`}
                  >
                    {state.submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{t('reservations.form.submittingText')}</span>
                      </>
                    ) : (
                      <span>{t('reservations.form.submit')}</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info Section */}
          <div className={`${isRTL ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
            <div className="bg-gradient-to-br from-primary to-accent-red rounded-2xl p-8 text-white shadow-2xl">
              <h3 className={`text-2xl font-bold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('reservations.info.title')}
              </h3>
              
              <div className="space-y-6">
                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      {t('reservations.info.openingHours')}
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
                      {t('reservations.info.policy')}
                    </h4>
                    <div className="text-white/90 text-sm space-y-1">
                      <div>• {t('reservations.info.policyItems.confirmation')}</div>
                      <div>• {t('reservations.info.policyItems.advance')}</div>
                      <div>• {t('reservations.info.policyItems.cancellation')}</div>
                    </div>
                  </div>
                </div>

                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      {t('reservations.info.instantContact')}
                    </h4>
                    <div className="text-white/90 text-sm">
                      <div>{t('reservations.info.quickBooking')}+1 (555) 123-4567</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className={`text-sm text-white/90 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('reservations.info.cta')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}