import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

const EFFECTIVE_DATE = 'June 1, 2026';

const cookieTypes = [
  {
    name: 'Strictly Necessary',
    required: true,
    description:
      'These cookies are essential for the website to function and cannot be disabled. They enable core features like session management, security, and accessibility preferences.',
    examples: ['Session token', 'CSRF protection token', 'Accessibility preference'],
  },
  {
    name: 'Analytics',
    required: false,
    description:
      'These cookies help us understand how visitors interact with our site by collecting anonymized data about pages visited, time spent, and traffic sources. This helps us improve the user experience.',
    examples: ['Google Analytics (_ga)', 'Page view duration', 'Traffic source'],
  },
  {
    name: 'Functional',
    required: false,
    description:
      'These cookies remember your preferences to enhance your experience, such as your language setting or recently viewed experiences.',
    examples: ['Language preference', 'Recently viewed experiences', 'Form autofill data'],
  },
  {
    name: 'Marketing',
    required: false,
    description:
      'These cookies are used to show you relevant advertisements on third-party sites. We do not sell your data; these cookies simply help us measure the effectiveness of any outreach campaigns.',
    examples: ['Ad click attribution', 'Retargeting pixel'],
  },
];

export function CookiePolicy() {
  const [preferences, setPreferences] = useState<Record<string, boolean>>({
    Analytics: true,
    Functional: true,
    Marketing: false,
  });
  const [saved, setSaved] = useState(false);

  function handleToggle(name: string) {
    setPreferences(prev => ({ ...prev, [name]: !prev[name] }));
    setSaved(false);
  }

  function handleSave() {
    setSaved(true);
  }

  return (
    <>
      <section
        className="bg-gradient-to-br from-teal-50 to-blue-50 py-20"
        aria-labelledby="cookie-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="cookie-heading" className="text-4xl sm:text-5xl mb-4 text-gray-900">
            Cookie Policy
          </h1>
          <p className="text-gray-600">Effective date: {EFFECTIVE_DATE}</p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-label="Cookie policy content">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-gray-700 leading-relaxed">

            <section aria-labelledby="cookie-what">
              <h2 id="cookie-what" className="text-2xl text-gray-900 mb-4">What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit a website. They help websites remember information about your visit, making subsequent visits more efficient and the site more useful to you. Cookies cannot access or read other files on your device.
              </p>
            </section>

            <section aria-labelledby="cookie-use">
              <h2 id="cookie-use" className="text-2xl text-gray-900 mb-4">How Lotus Routes Uses Cookies</h2>
              <p>
                We use cookies to keep our website secure, analyze how it is used, and remember your preferences. We do not use cookies to collect personally identifiable information beyond what you provide to us directly.
              </p>
            </section>

            <section aria-labelledby="cookie-types">
              <h2 id="cookie-types" className="text-2xl text-gray-900 mb-6">Types of Cookies We Use</h2>
              <div className="space-y-6" role="list" aria-label="Cookie categories">
                {cookieTypes.map(type => (
                  <article
                    key={type.name}
                    role="listitem"
                    className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                    aria-labelledby={`cookie-type-${type.name.replace(/\s/g, '-')}`}
                  >
                    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                      <h3 id={`cookie-type-${type.name.replace(/\s/g, '-')}`} className="text-lg text-gray-900">
                        {type.name}
                      </h3>
                      {type.required ? (
                        <span className="text-sm bg-teal-100 text-teal-700 px-3 py-1 rounded-full">Always on</span>
                      ) : (
                        <span className="text-sm bg-gray-200 text-gray-600 px-3 py-1 rounded-full">Optional</span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-3">{type.description}</p>
                    <div className="flex flex-wrap gap-2" aria-label={`Examples of ${type.name} cookies`}>
                      {type.examples.map(ex => (
                        <span key={ex} className="text-xs bg-white border border-gray-200 text-gray-500 px-2 py-1 rounded-md">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section aria-labelledby="cookie-prefs">
              <h2 id="cookie-prefs" className="text-2xl text-gray-900 mb-4">Manage Your Preferences</h2>
              <p className="mb-6">
                You can control optional cookies below. Strictly necessary cookies cannot be disabled as they are required for the site to function.
              </p>
              <div
                role="group"
                aria-labelledby="cookie-prefs"
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 space-y-5"
              >
                {cookieTypes.filter(t => !t.required).map(type => (
                  <div key={type.name} className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-gray-900">{type.name} cookies</p>
                      <p className="text-sm text-gray-500">{type.description.split('.')[0]}.</p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={preferences[type.name]}
                      onClick={() => handleToggle(type.name)}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${preferences[type.name] ? 'bg-teal-600' : 'bg-gray-300'}`}
                      aria-label={`${preferences[type.name] ? 'Disable' : 'Enable'} ${type.name} cookies`}
                    >
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition-transform ${preferences[type.name] ? 'translate-x-5' : 'translate-x-0'}`}
                      />
                    </button>
                  </div>
                ))}

                <div className="pt-4 border-t border-gray-200 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
                  >
                    Save preferences
                  </button>
                  {saved && (
                    <p role="status" aria-live="polite" className="text-teal-700 text-sm flex items-center gap-1">
                      <Cookie className="h-4 w-4" aria-hidden="true" />
                      Preferences saved!
                    </p>
                  )}
                </div>
              </div>
            </section>

            <section aria-labelledby="cookie-third">
              <h2 id="cookie-third" className="text-2xl text-gray-900 mb-4">Third-Party Cookies</h2>
              <p>
                Some features on our site (such as embedded maps or social share buttons) may set cookies from third-party services. We do not control these cookies and recommend reviewing the privacy policies of those services directly.
              </p>
            </section>

            <section aria-labelledby="cookie-browser">
              <h2 id="cookie-browser" className="text-2xl text-gray-900 mb-4">Controlling Cookies in Your Browser</h2>
              <p>
                You can delete or block cookies using your browser settings. Note that disabling cookies may affect the functionality of certain parts of this website. Most browsers include cookie management in Settings &rsaquo; Privacy.
              </p>
            </section>

            <section aria-labelledby="cookie-contact">
              <h2 id="cookie-contact" className="text-2xl text-gray-900 mb-4">Questions?</h2>
              <p>
                If you have questions about our use of cookies, please{' '}
                <Link
                  to="/contact"
                  className="text-teal-600 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
                >
                  contact us
                </Link>{' '}
                or email{' '}
                <a
                  href="mailto:privacy@lotusroutes.com"
                  className="text-teal-600 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
                >
                  privacy@lotusroutes.com
                </a>.
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
              to="/privacy"
              className="text-teal-600 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
}
