import { Link } from 'react-router-dom';

const EFFECTIVE_DATE = 'June 1, 2026';

export function PrivacyPolicy() {
  return (
    <>
      <section
        className="bg-gradient-to-br from-teal-50 to-blue-50 py-20"
        aria-labelledby="privacy-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="privacy-heading" className="text-4xl sm:text-5xl mb-4 text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Effective date: {EFFECTIVE_DATE}</p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-label="Privacy policy content">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-gray-700 leading-relaxed">

            <section aria-labelledby="privacy-intro">
              <h2 id="privacy-intro" className="text-2xl text-gray-900 mb-4">1. Introduction</h2>
              <p>
                Lotus Routes ("we", "our", "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and protect information about you when you visit our website or book a cultural experience through our platform.
              </p>
            </section>

            <section aria-labelledby="privacy-collect">
              <h2 id="privacy-collect" className="text-2xl text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="mb-3">We collect information in the following ways:</p>
              <h3 className="text-lg text-gray-800 mb-2">Information you provide directly</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Name, email address, and phone number when you submit a booking request or contact form.</li>
                <li>Group size, preferred dates, and special requests you include in booking forms.</li>
                <li>Payment information, which is processed securely by our payment provider and not stored on our servers.</li>
              </ul>
              <h3 className="text-lg text-gray-800 mb-2">Information collected automatically</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Browser type, IP address, pages visited, and time spent on the site via cookies and analytics tools.</li>
                <li>Device and operating system information.</li>
              </ul>
            </section>

            <section aria-labelledby="privacy-use">
              <h2 id="privacy-use" className="text-2xl text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Process and confirm your experience bookings.</li>
                <li>Communicate with you about your booking, including confirmation, reminders, and follow-up.</li>
                <li>Respond to your inquiries through our contact form or help center.</li>
                <li>Improve our website and the experiences we offer.</li>
                <li>Send you occasional updates about new experiences or promotions, if you have opted in.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </section>

            <section aria-labelledby="privacy-sharing">
              <h2 id="privacy-sharing" className="text-2xl text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="mb-3">We do not sell your personal data. We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Artists and practitioners</strong> — to coordinate your booked experience (e.g., your name, group size, and date).</li>
                <li><strong>Payment processors</strong> — to securely complete transactions.</li>
                <li><strong>Analytics providers</strong> — to help us understand how visitors use our site (data is aggregated and anonymized).</li>
                <li><strong>Legal authorities</strong> — when required by law or to protect the safety of our users.</li>
              </ul>
            </section>

            <section aria-labelledby="privacy-retention">
              <h2 id="privacy-retention" className="text-2xl text-gray-900 mb-4">5. Data Retention</h2>
              <p>
                We retain your personal data for as long as necessary to fulfill the purposes described in this policy, or as required by law. Booking records are retained for a minimum of 3 years for accounting and legal compliance purposes.
              </p>
            </section>

            <section aria-labelledby="privacy-rights">
              <h2 id="privacy-rights" className="text-2xl text-gray-900 mb-4">6. Your Rights</h2>
              <p className="mb-3">
                Depending on your location, you may have rights regarding your personal data, including:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>The right to access the personal data we hold about you.</li>
                <li>The right to request correction of inaccurate data.</li>
                <li>The right to request deletion of your data ("right to be forgotten").</li>
                <li>The right to opt out of marketing communications at any time.</li>
                <li>The right to data portability.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please{' '}
                <Link
                  to="/contact"
                  className="text-teal-600 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
                >
                  contact us
                </Link>.
              </p>
            </section>

            <section aria-labelledby="privacy-security">
              <h2 id="privacy-security" className="text-2xl text-gray-900 mb-4">7. Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration. All data transmitted between your browser and our servers is encrypted using TLS/HTTPS.
              </p>
            </section>

            <section aria-labelledby="privacy-cookies">
              <h2 id="privacy-cookies" className="text-2xl text-gray-900 mb-4">8. Cookies</h2>
              <p>
                We use cookies to enhance your browsing experience. Please see our{' '}
                <Link
                  to="/cookies"
                  className="text-teal-600 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
                >
                  Cookie Policy
                </Link>{' '}
                for full details on how we use cookies and how to manage your preferences.
              </p>
            </section>

            <section aria-labelledby="privacy-changes">
              <h2 id="privacy-changes" className="text-2xl text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section aria-labelledby="privacy-contact">
              <h2 id="privacy-contact" className="text-2xl text-gray-900 mb-4">10. Contact</h2>
              <p>
                If you have any questions about this Privacy Policy, please email us at{' '}
                <a
                  href="mailto:privacy@lotusroutes.com"
                  className="text-teal-600 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
                >
                  privacy@lotusroutes.com
                </a>{' '}
                or{' '}
                <Link
                  to="/contact"
                  className="text-teal-600 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
                >
                  use our contact form
                </Link>.
              </p>
            </section>
          </div>

          <nav
            aria-label="Legal pages navigation"
            className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-4 text-sm"
          >
            <Link
              to="/terms"
              className="text-teal-600 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
            >
              Terms of Service
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
