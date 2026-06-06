import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, CreditCard, Users, Music, ChevronDown, ChevronUp } from 'lucide-react';

const categories = [
  {
    id: 'booking',
    icon: BookOpen,
    title: 'Booking & Reservations',
    articles: [
      { title: 'How do I book an experience?', summary: 'Learn how to browse, select, and confirm your cultural experience booking.' },
      { title: 'Can I book for a group?', summary: 'Yes — we accommodate groups of all sizes. Submit a request and specify your group size.' },
      { title: 'How far in advance should I book?', summary: 'We recommend booking at least 2–4 weeks ahead, especially for popular artists.' },
      { title: 'What if I need to cancel or reschedule?', summary: 'Contact us at least 72 hours before your experience to reschedule without penalty.' },
    ],
  },
  {
    id: 'payment',
    icon: CreditCard,
    title: 'Payments & Pricing',
    articles: [
      { title: 'What payment methods are accepted?', summary: 'We accept all major credit/debit cards and bank transfers for group bookings.' },
      { title: 'Is there a deposit required?', summary: 'A 25% deposit is required to confirm your booking, with the balance due 7 days before.' },
      { title: 'Are there any hidden fees?', summary: 'No. The price shown includes all artist fees, materials, and coordination costs.' },
      { title: 'Do you offer refunds?', summary: 'Refunds are available up to 7 days before your experience date, minus a 10% processing fee.' },
    ],
  },
  {
    id: 'experiences',
    icon: Music,
    title: 'About Experiences',
    articles: [
      { title: 'What should I expect during an experience?', summary: 'Each experience is intimate and interactive — you will engage directly with the artist or chef.' },
      { title: 'Are experiences suitable for beginners?', summary: 'Absolutely. All skill levels are welcome. Artists tailor the session to your background.' },
      { title: 'Can I request a custom experience?', summary: 'Yes! Use our Request an Experience form to describe exactly what you are looking for.' },
      { title: 'Are experiences available virtually?', summary: 'Select experiences can be conducted online via video call. Filter by "Virtual" on the Experiences page.' },
    ],
  },
  {
    id: 'groups',
    icon: Users,
    title: 'Groups & Private Events',
    articles: [
      { title: 'Do you offer private group sessions?', summary: 'Yes — private sessions for families, school groups, corporate teams, and heritage tours are available.' },
      { title: 'Is there a minimum group size?', summary: 'No minimum. Experiences can be arranged for solo travelers or groups of 50+.' },
      { title: 'Can you accommodate school or university groups?', summary: 'We have dedicated educational packages for school visits and university culture programs.' },
    ],
  },
];

function ArticleAccordion({ title, summary }: { title: string; summary: string }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="border-b border-gray-100 last:border-0">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="w-full text-left py-4 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-md"
      >
        <span className="text-gray-900 font-medium">{title}</span>
        {open
          ? <ChevronUp className="h-5 w-5 text-teal-600 flex-shrink-0" aria-hidden="true" />
          : <ChevronDown className="h-5 w-5 text-teal-600 flex-shrink-0" aria-hidden="true" />}
      </button>
      {open && (
        <div className="pb-4 text-gray-600 leading-relaxed" role="region" aria-label={title}>
          {summary}
        </div>
      )}
    </article>
  );
}

export function HelpCenter() {
  const [search, setSearch] = useState('');

  const filtered = categories.map(cat => ({
    ...cat,
    articles: cat.articles.filter(
      a =>
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.summary.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(cat => cat.articles.length > 0);

  return (
    <>
      <section
        className="bg-gradient-to-br from-teal-50 to-blue-50 py-20"
        aria-labelledby="help-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="help-heading" className="text-4xl sm:text-5xl mb-4 text-gray-900">
            Help Center
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Find answers to common questions about bookings, payments, and cultural experiences.
          </p>
          <div className="relative">
            <label htmlFor="help-search" className="sr-only">Search help articles</label>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
            <input
              id="help-search"
              type="search"
              placeholder="Search for help…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-label="Help categories">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-600 py-12" role="status">
              No articles found for &ldquo;{search}&rdquo;. Try a different search term or{' '}
              <Link to="/contact" className="text-teal-600 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm">
                contact us
              </Link>.
            </p>
          ) : (
            <div className="space-y-12">
              {filtered.map(cat => {
                const Icon = cat.icon;
                return (
                  <section key={cat.id} aria-labelledby={`cat-${cat.id}`}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-teal-50 rounded-lg" aria-hidden="true">
                        <Icon className="h-6 w-6 text-teal-600" />
                      </div>
                      <h2 id={`cat-${cat.id}`} className="text-2xl text-gray-900">{cat.title}</h2>
                    </div>
                    <div className="bg-gray-50 rounded-xl px-6">
                      {cat.articles.map(a => (
                        <ArticleAccordion key={a.title} title={a.title} summary={a.summary} />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-teal-50" aria-labelledby="help-cta-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="help-cta-heading" className="text-3xl mb-4 text-gray-900">Still need help?</h2>
          <p className="text-gray-700 mb-8">
            Our team is happy to assist you with any questions about cultural experiences or your booking.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
