import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is Lotus Routes?',
        a: 'Lotus Routes is a cultural experience platform that connects travelers, students, families, and retirees with authentic South Asian heritage experiences — including private music performances, cooking classes, dance lessons, yoga retreats, and more.',
      },
      {
        q: 'Who are the artists and instructors?',
        a: 'Our network includes master musicians, classically trained dancers, renowned chefs, and skilled artisans. Each practitioner is vetted for cultural authenticity and teaching excellence.',
      },
      {
        q: 'Are experiences available outside India?',
        a: 'Yes. Many of our experiences are available internationally through live virtual sessions, and select artists travel for private events. Check the Experiences page for availability.',
      },
      {
        q: 'Is Lotus Routes suitable for children?',
        a: 'Absolutely. We have family-friendly experiences for all ages. Simply note the age range of your group when submitting a request and we will tailor the session accordingly.',
      },
    ],
  },
  {
    category: 'Booking',
    questions: [
      {
        q: 'How do I request an experience?',
        a: 'Click "Request an Experience" on any experience page or in the main navigation. Fill in your preferences, group size, and dates, and our team will follow up within 1–2 business days.',
      },
      {
        q: 'Can I choose a specific artist?',
        a: 'Yes. You can name a preferred artist in the Special Requests field. We will do our best to accommodate your preference, though availability may vary.',
      },
      {
        q: 'How early should I book?',
        a: 'We recommend booking at least 2–4 weeks in advance. For major events, festivals, or large groups, 6–8 weeks is advisable to secure your preferred artist and dates.',
      },
      {
        q: 'Can I modify my booking after it is confirmed?',
        a: 'Yes, modifications are accepted up to 72 hours before the experience with no penalty. Contact us at hello@lotusroutes.com with your booking reference.',
      },
    ],
  },
  {
    category: 'Payment & Cancellation',
    questions: [
      {
        q: 'What does an experience typically cost?',
        a: 'Pricing varies by experience type, duration, group size, and artist. Each experience listing shows an estimated price range. Custom quotes are provided after your request is reviewed.',
      },
      {
        q: 'Is a deposit required?',
        a: 'A 25% non-refundable deposit is required to hold your booking. The remaining balance is due 7 days before your experience date.',
      },
      {
        q: 'What is the cancellation policy?',
        a: 'Cancellations made more than 7 days before the experience receive a full refund of the balance (deposit is non-refundable). Cancellations within 7 days of the experience are non-refundable.',
      },
      {
        q: 'What happens if the artist cancels?',
        a: 'In the rare event an artist must cancel, we will offer you a full refund or reschedule with an equivalent artist at no additional charge.',
      },
    ],
  },
  {
    category: 'During the Experience',
    questions: [
      {
        q: 'What should I bring or prepare?',
        a: 'Instructions are provided 48 hours before your experience. For cooking classes, groceries may be pre-arranged. For music or dance, comfortable clothing is recommended.',
      },
      {
        q: 'Are interpreters available?',
        a: 'Most of our artists speak English. If your group requires language support, please mention this in your request and we will arrange interpretation where possible.',
      },
      {
        q: 'Can we take photos and videos?',
        a: 'Photography for personal use is welcome unless the artist requests otherwise. Commercial use of recordings requires prior written permission from Lotus Routes.',
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="border-b border-gray-100 last:border-0">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-md"
      >
        <span className="text-gray-900">{q}</span>
        {open
          ? <ChevronUp className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
          : <ChevronDown className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" aria-hidden="true" />}
      </button>
      {open && (
        <div className="pb-5 text-gray-600 leading-relaxed" role="region" aria-label={q}>
          {a}
        </div>
      )}
    </article>
  );
}

export function FAQs() {
  return (
    <>
      <section
        className="bg-gradient-to-br from-teal-50 to-blue-50 py-20"
        aria-labelledby="faqs-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="faqs-heading" className="text-4xl sm:text-5xl mb-4 text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-700">
            Everything you need to know about booking and enjoying a Lotus Routes cultural experience.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-label="FAQ list">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqs.map(section => (
              <section key={section.category} aria-labelledby={`faq-${section.category}`}>
                <h2 id={`faq-${section.category}`} className="text-2xl text-gray-900 mb-6 pb-2 border-b-2 border-teal-100">
                  {section.category}
                </h2>
                <div>
                  {section.questions.map(item => (
                    <FAQItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-teal-50" aria-labelledby="faq-cta-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="faq-cta-heading" className="text-3xl mb-4 text-gray-900">Can't find your answer?</h2>
          <p className="text-gray-700 mb-8">
            Our team is ready to help with any question about South Asian cultural experiences or your booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
            >
              Contact Us
            </Link>
            <Link
              to="/help"
              className="inline-block px-8 py-3 border border-teal-600 text-teal-600 hover:bg-teal-100 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
            >
              Visit Help Center
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
