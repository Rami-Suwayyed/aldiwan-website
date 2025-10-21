'use client'

import React, { useState } from 'react'
import { useTranslation } from './TranslationProvider'
import { MapPin, Phone, Mail, Clock, Send, ExternalLink } from 'lucide-react'
import toast from 'react-hot-toast'

export default function ContactSection() {
  const { t, isRTL } = useTranslation()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.', {
        duration: 4000,
        position: 'top-center'
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Mock API call - replace with actual contact form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
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
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch {
      toast.error('An error occurred. Please try again.', {
        duration: 4000,
        position: 'top-center'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
                      123 Heritage Street, Old City Quarter<br />
                      Downtown, Capital City 12345
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
                    <div className="space-y-1">
                      <p className="text-text-body">
                        <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                          +1 (555) 123-4567
                        </a>
                      </p>
                      <p className="text-text-body">
                        <a href="tel:+15551234568" className="hover:text-primary transition-colors">
                          +1 (555) 123-4568
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
                    <div className="space-y-1">
                      <p className="text-text-body">
                        <a href="mailto:info@aldiwanalyemeni.com" className="hover:text-primary transition-colors">
                          info@aldiwanalyemeni.com
                        </a>
                      </p>
                      <p className="text-text-body">
                        <a href="mailto:reservations@aldiwanalyemeni.com" className="hover:text-primary transition-colors">
                          reservations@aldiwanalyemeni.com
                        </a>
                      </p>
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
                {isRTL ? 'موقعنا' : 'Our Location'}
              </h3>
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.8750828921696!2d35.2147777!3d31.9515694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1c0d1b66057%3A0x3d43c8a853e5b5d!2sAmman%2C%20Jordan!5e0!3m2!1sen!2sus!4v1635959999999!5m2!1sen!2sus"
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
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className={`block text-sm font-medium text-text-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`form-input ${isRTL ? 'text-right' : ''}`}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className={`block text-sm font-medium text-text-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-input ${isRTL ? 'text-right' : ''}`}
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className={`block text-sm font-medium text-text-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('contact.form.subject')}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`form-input ${isRTL ? 'text-right' : ''}`}
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className={`block text-sm font-medium text-text-heading ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`form-textarea ${isRTL ? 'text-right' : ''}`}
                    placeholder={isRTL ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                    required
                  />
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
                      <span>{isRTL ? 'جارٍ الإرسال...' : 'Sending...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t('contact.form.send')}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}