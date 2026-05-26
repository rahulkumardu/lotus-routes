import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <section aria-labelledby="footer-navigation">
            <h3 id="footer-navigation" className="mb-4">Navigation</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md inline-block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md inline-block"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/experiences"
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md inline-block"
                  >
                    Experiences
                  </Link>
                </li>
              </ul>
            </nav>
          </section>

          <section aria-labelledby="footer-support">
            <h3 id="footer-support" className="mb-4">Support</h3>
            <nav aria-label="Support links">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md inline-block"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md inline-block"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md inline-block"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </nav>
          </section>

          <section aria-labelledby="footer-legal">
            <h3 id="footer-legal" className="mb-4">Legal</h3>
            <nav aria-label="Legal links">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md inline-block"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md inline-block"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md inline-block"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </nav>
          </section>

          <section aria-labelledby="footer-social">
            <h3 id="footer-social" className="mb-4">Follow Us</h3>
            <nav aria-label="Social media links">
              <ul className="flex gap-4">
                <li>
                  <a
                    href="https://facebook.com"
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md inline-block p-1"
                    aria-label="Visit our Facebook page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-6 w-6" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md inline-block p-1"
                    aria-label="Visit our Twitter page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-6 w-6" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md inline-block p-1"
                    aria-label="Visit our Instagram page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-6 w-6" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md inline-block p-1"
                    aria-label="Visit our LinkedIn page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-6 w-6" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Lotus Routes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
