'use client'

import React from 'react'
import { useTranslation } from './TranslationProvider'
import { MapPin, Phone, Mail, Clock, Send, ExternalLink } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'
import toast from 'react-hot-toast'

export default function ContactSection() {
  const { t, isRTL } = useTranslation()
  const [state, handleSubmit] = useForm("xovpaaew")

  // Show success toast when form is submitted successfully
  React.useEffect(() => {
    if (state.succeeded) {
      toast.success(t('contact.success'), {
        duration: 4000,
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

  return (
    <section 
      id="contact" 
      className={`py-20 bg-background-warm ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'} lg:text-center`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-primary to-accent-red text-white px-6 py-2 rounded-full text-sm font-medium shadow-warm">
              {t('contact.subtitle')}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-text-heading mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-accent-red bg-clip-text text-transparent">
              {t('contact.title')}
            </span>
          </h2>
        </div>

        <div className={`grid lg:grid-cols-2 gap-16 items-start ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Contact Info & Map */}
          <div className={`space-y-8 ${isRTL ? 'lg:col-start-2' : ''}`}>
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-white rounded-2xl p-6 shadow-warm hover:shadow-hover transition-all duration-300">
                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 bg-primary rounded-custom flex items-center justify-center text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-lg font-bold text-text-heading mb-2">
                      {t('contact.info.address')}
                    </h3>
                    <p className="text-text-body mb-3">
                      {t('contact.location.address')}
                    </p>
                    <button className={`inline-flex items-center gap-2 text-primary hover:text-secondary-dark font-medium transition-colors duration-300 ${
                      isRTL ? 'flex-row-reverse' : ''
                    }`}>
                      <ExternalLink className="w-4 h-4" />
                      <span>{t('common.getDirections')}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-2xl p-6 shadow-warm hover:shadow-hover transition-all duration-300">
                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 bg-accent-red rounded-custom flex items-center justify-center text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-lg font-bold text-text-heading mb-2">
                      {t('contact.info.phone')}
                    </h3>
                    <div className="space-y-1" dir="ltr">
                      <p className="text-text-body">
                        <a href="tel:++962798011163" className="hover:text-primary transition-colors">
                          +962 7 9 801 1163
                        </a>
                      </p>
                      <p className="text-text-body">
                        <a href="tel:+962798011164" className="hover:text-primary transition-colors">
                          +962 7 9 801 1164
                        </a>
                      </p>
                      <p className="text-text-body">
                        <a href="tel:+962798011165" className="hover:text-primary transition-colors">
                          +962 7 9 801 1165
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-6 shadow-warm hover:shadow-hover transition-all duration-300">
                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 bg-accent-gold rounded-custom flex items-center justify-center text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-lg font-bold text-text-heading mb-2">
                      {t('contact.info.email')}
                    </h3>
                    <div className="space-y-1" dir="ltr">
                      <p className="text-text-body">
                        <a href="mailto:info@dewanresturant.com" className="hover:text-primary transition-colors">
                          info@dewanresturant.com
                        </a>
                      </p>
                      {/* <p className="text-text-body">
                        <a href="mailto:reservations@aldiwanalyemeni.com" className="hover:text-primary transition-colors">
                          reservations@aldiwanalyemeni.com
                        </a>
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-warm hover:shadow-hover transition-all duration-300">
                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 bg-primary rounded-custom flex items-center justify-center text-white">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-lg font-bold text-text-heading mb-2">
                      {t('contact.info.hours')}
                    </h3>
                    <div className="space-y-1 text-text-body">
                      <div>{t('contact.hours.weekdays')}</div>
                      <div>{t('contact.hours.weekend')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl p-6 shadow-warm">
              <h3 className={`text-lg font-bold text-text-heading mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('contact.location.title')}
              </h3>
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-200">
                
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.407497848937!2d35.9137961!3d31.895523799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca77301e21b53%3A0x460229a74380624c!2z2YXYt9in2LnZhSDYp9mE2K_ZitmI2KfZhiDYp9mE2YrZhdmG2Yo!5e0!3m2!1sen!2sjo!4v1766868785778!5m2!1sen!2sjo"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Al Diwan Al Yemeni Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isRTL ? 'lg:col-start-1' : ''}`}>
            <div className="bg-white rounded-2xl p-8 shadow-warm">
              {state.succeeded ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-heading mb-2">
                    {t('contact.success')}
                  </h3>
                  <p className="text-text-body">
                    {t('contact.successMessage')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className={`block text-sm font-medium text-text-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t('contact.form.name')} *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        className={`form-input ${isRTL ? 'text-right' : ''}`}
                        required
                      />
                      <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className={`block text-sm font-medium text-text-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t('contact.form.email')} *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className={`form-input ${isRTL ? 'text-right' : ''}`}
                        required
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className={`block text-sm font-medium text-text-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('contact.form.subject')}
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      className={`form-input ${isRTL ? 'text-right' : ''}`}
                    />
                    <ValidationError 
                      prefix="Subject" 
                      field="subject"
                      errors={state.errors}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className={`block text-sm font-medium text-text-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className={`form-textarea ${isRTL ? 'text-right' : ''}`}
                      placeholder={t('contact.placeholder.message')}
                      required
                    />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    />
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
                        <span>{t('contact.form.sendingText')}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>{t('contact.form.send')}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}