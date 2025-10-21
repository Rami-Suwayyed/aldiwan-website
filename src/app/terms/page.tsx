import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service - Al Diwan Al Yemeni',
  description: 'Terms of Service for Al Diwan Al Yemeni Restaurant',
}

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-text-light">Last updated: October 21, 2024</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-warm space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-text-heading mb-4">Acceptance of Terms</h2>
            <p className="text-text-body leading-relaxed">
              By accessing and using Al Diwan Al Yemeni's services, making reservations, or visiting our restaurant, 
              you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-heading mb-4">Reservation Policy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-text-heading mb-2">Booking Requirements</h3>
                <ul className="list-disc pl-6 text-text-body space-y-1">
                  <li>Valid contact information required for all reservations</li>
                  <li>Reservations are subject to availability</li>
                  <li>Large party bookings (8+ guests) require advance notice</li>
                  <li>Special dietary requirements should be mentioned at booking</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-text-heading mb-2">Cancellation Policy</h3>
                <ul className="list-disc pl-6 text-text-body space-y-1">
                  <li>Free cancellation up to 2 hours before reservation time</li>
                  <li>No-show policy: Tables held for 15 minutes past reservation time</li>
                  <li>Late cancellations may result in booking restrictions</li>
                  <li>Group bookings may have different cancellation terms</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-heading mb-4">Restaurant Policies</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-text-heading mb-2">Dress Code</h3>
                <p className="text-text-body">
                  We maintain a smart casual dress code. We reserve the right to refuse service to guests 
                  who do not meet our dress standards.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-text-heading mb-2">Age Policy</h3>
                <p className="text-text-body">
                  Children are welcome. High chairs and children's menus are available upon request. 
                  Parents are responsible for supervising their children at all times.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-text-heading mb-2">Payment</h3>
                <ul className="list-disc pl-6 text-text-body space-y-1">
                  <li>We accept cash, major credit cards, and digital payments</li>
                  <li>Prices are subject to change without notice</li>
                  <li>Gratuity is not included and is at your discretion</li>
                  <li>Split bills available for parties of 6 or fewer</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-heading mb-4">Liability and Safety</h2>
            <div className="space-y-4">
              <p className="text-text-body leading-relaxed">
                While we take every precaution to ensure food safety and quality, we cannot guarantee that our 
                dishes are completely free from allergens. Please inform your server of any food allergies or 
                dietary restrictions.
              </p>
              <p className="text-text-body leading-relaxed">
                Al Diwan Al Yemeni is not liable for any personal injury, loss, or damage that may occur on 
                our premises, except where prohibited by law.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-heading mb-4">Intellectual Property</h2>
            <p className="text-text-body leading-relaxed">
              All content, trademarks, and intellectual property related to Al Diwan Al Yemeni are our exclusive 
              property. You may not use, reproduce, or distribute our content without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-heading mb-4">Modifications</h2>
            <p className="text-text-body leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately 
              upon posting on our website. Continued use of our services constitutes acceptance of any modifications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-heading mb-4">Contact Information</h2>
            <p className="text-text-body leading-relaxed">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-4 p-4 bg-background-warm rounded-lg">
              <p className="text-text-body">
                <strong>Al Diwan Al Yemeni</strong><br />
                Email: legal@aldiwanalyemeni.com<br />
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