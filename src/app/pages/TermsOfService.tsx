import { Link } from 'react-router-dom';

const EFFECTIVE_DATE = 'June 1, 2026';

export function TermsOfService() {
  return (
    <>
      <section
        className="bg-gradient-to-br from-teal-50 to-blue-50 py-20"
        aria-labelledby="terms-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="terms-heading" className="text-4xl sm:text-5xl mb-4 text-gray-900">
            Terms of Service
          </h1>
          <p className="text-gray-600">Effective date: {EFFECTIVE_DATE}</p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-label="Terms of service content">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none space-y-10 text-gray-700 leading-relaxed">

            <section aria-labelledby="tos-acceptance">
              <h2 id="tos-acceptance" className="text-2xl text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Lotus Routes website and services ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service. These Terms apply to all visitors, users, and customers of Lotus Routes.
              </p>
            </section>

            <section aria-labelledby="tos-services">
              <h2 id="tos-services" className="text-2xl text-gray-900 mb-4">2. Description of Services</h2>
              <p>
                Lotus Routes provides a platform for booking authentic South Asian cultural experiences, including but not limited to private music performances, culinary workshops, dance lessons, yoga retreats, and textile arts classes. We act as an intermediary connecting cultural practitioners ("Artists") with participants ("Customers").
              </p>
            </section>

            <section aria-labelledby="tos-booking">
              <h2 id="tos-booking" className="text-2xl text-gray-900 mb-4">3. Booking and Payment</h2>
              <p className="mb-3">
                When you submit a booking request, you are making an offer to purchase a cultural experience. Bookings are only confirmed upon receipt of the required deposit and written confirmation from Lotus Routes.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>A deposit of 25% of the total experience fee is required to confirm your booking.</li>
                <li>The remaining balance is due no later than 7 days before the scheduled experience date.</li>
                <li>Prices are quoted in US Dollars and are inclusive of all artist fees and coordination costs unless otherwise stated.</li>
                <li>Payment methods accepted include major credit/debit cards and bank transfers for group bookings.</li>
              </ul>
            </section>

            <section aria-labelledby="tos-cancellation">
              <h2 id="tos-cancellation" className="text-2xl text-gray-900 mb-4">4. Cancellation Policy</h2>
              <p className="mb-3">
                We understand plans change. Our cancellation policy is as follows:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Cancellations made more than 7 days before the experience: full refund of the balance paid (deposit is non-refundable).</li>
                <li>Cancellations made 3–7 days before the experience: 50% of the balance refunded.</li>
                <li>Cancellations made within 72 hours of the experience: no refund.</li>
                <li>In the event Lotus Routes or an Artist must cancel, a full refund or equivalent rescheduling will be offered.</li>
              </ul>
            </section>

            <section aria-labelledby="tos-conduct">
              <h2 id="tos-conduct" className="text-2xl text-gray-900 mb-4">5. Customer Conduct</h2>
              <p className="mb-3">
                All participants are expected to treat Artists, staff, and fellow participants with respect. Lotus Routes reserves the right to terminate any experience and refuse future bookings if a participant:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Engages in discriminatory, abusive, or harassing behavior.</li>
                <li>Damages property belonging to the Artist or venue.</li>
                <li>Arrives in a condition that endangers others (e.g., under the influence of alcohol or substances).</li>
                <li>Records or photographs the experience for commercial use without prior written permission.</li>
              </ul>
            </section>

            <section aria-labelledby="tos-ip">
              <h2 id="tos-ip" className="text-2xl text-gray-900 mb-4">6. Intellectual Property</h2>
              <p>
                All content on the Lotus Routes website — including text, images, logos, and experience descriptions — is owned by or licensed to Lotus Routes and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or use any content for commercial purposes without our express written consent.
              </p>
            </section>

            <section aria-labelledby="tos-liability">
              <h2 id="tos-liability" className="text-2xl text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p>
                Lotus Routes acts as an intermediary and is not liable for the actions, conduct, or performance of individual Artists. To the maximum extent permitted by law, our total liability to you for any claim arising from use of the Service shall not exceed the amount you paid for the relevant experience.
              </p>
            </section>

            <section aria-labelledby="tos-changes">
              <h2 id="tos-changes" className="text-2xl text-gray-900 mb-4">8. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. When we do, we will revise the effective date at the top of this page. Continued use of the Service after any changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section aria-labelledby="tos-contact">
              <h2 id="tos-contact" className="text-2xl text-gray-900 mb-4">9. Contact</h2>
              <p>
                If you have questions about these Terms, please{' '}
                <Link
                  to="/contact"
                  className="text-teal-600 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
                >
                  contact us
                </Link>{' '}
                or email us at{' '}
                <a
                  href="mailto:legal@lotusroutes.com"
                  className="text-teal-600 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
                >
                  legal@lotusroutes.com
                </a>.
              </p>
            </section>

          </div>

          <nav
            aria-label="Legal pages navigation"
            className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-4 text-sm"
          >
            <Link
              to="/privacy"
              className="text-teal-600 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/cookies"
              className="text-teal-600 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
            >
              Cookie Policy
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
}
