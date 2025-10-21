import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - Al Diwan Al Yemeni',
  description: 'Privacy Policy for Al Diwan Al Yemeni Restaurant',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background-default py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-secondary-dark transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-text-heading mb-4">
            Privacy Policy
          </h1>
          <p className="text-text-light">Last updated: October 21, 2024</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-warm space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-text-heading mb-4">Introduction</h2>
            <p className="text-text-body leading-relaxed">
              At Al Diwan Al Yemeni, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you visit our 
              restaurant or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-heading mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-text-heading mb-2">Personal Information</h3>
                <ul className="list-disc pl-6 text-text-body space-y-1">
                  <li>Name and contact information for reservations</li>
                  <li>Email address for communications and newsletters</li>
                  <li>Phone number for reservation confirmations</li>
                  <li>Special dietary requirements or preferences</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-text-heading mb-2">Automatically Collected Information</h3>
                <ul className="list-disc pl-6 text-text-body space-y-1">
                  <li>Website usage data and analytics</li>
                  <li>IP address and browser information</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-heading mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-text-body space-y-2">
              <li>Process and confirm your reservations</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send promotional offers and newsletters (with your consent)</li>
              <li>Improve our services and website functionality</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-heading mb-4">Data Security</h2>
            <p className="text-text-body leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized 
              access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
              is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-heading mb-4">Your Rights</h2>
            <p className="text-text-body leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-text-body space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>File a complaint with supervisory authorities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-heading mb-4">Contact Us</h2>
            <p className="text-text-body leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-background-warm rounded-lg">
              <p className="text-text-body">
                <strong>Al Diwan Al Yemeni</strong><br />
                Email: privacy@aldiwanalyemeni.com<br />
                Phone: +1 (555) 123-4567<br />
                Address: 123 Heritage Street, Old City Quarter, Downtown
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}