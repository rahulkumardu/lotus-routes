import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactUs() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.';
    if (!form.subject.trim()) e.subject = 'Subject is required.';
    if (!form.message.trim()) e.message = 'Message is required.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: undefined }));
  }

  return (
    <>
      <section
        className="bg-gradient-to-br from-teal-50 to-blue-50 py-20"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="contact-heading" className="text-4xl sm:text-5xl mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="text-lg text-gray-700">
            Have a question or want to plan something special? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-label="Contact information and form">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">

            <aside aria-labelledby="contact-info-heading">
              <h2 id="contact-info-heading" className="text-2xl mb-8 text-gray-900">Get in Touch</h2>

              <ul className="space-y-6" role="list">
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-teal-50 rounded-lg flex-shrink-0" aria-hidden="true">
                    <Mail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Email</p>
                    <a
                      href="mailto:hello@lotusroutes.com"
                      className="text-teal-600 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
                    >
                      hello@lotusroutes.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-teal-50 rounded-lg flex-shrink-0" aria-hidden="true">
                    <Phone className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Phone</p>
                    <a
                      href="tel:+12025550178"
                      className="text-gray-600 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
                    >
                      +1 (202) 555-0178
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-teal-50 rounded-lg flex-shrink-0" aria-hidden="true">
                    <MapPin className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Address</p>
                    <address className="not-italic text-gray-600">
                      1200 New Jersey Ave SE<br />
                      Washington, DC 20003<br />
                      United States
                    </address>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-teal-50 rounded-lg flex-shrink-0" aria-hidden="true">
                    <Clock className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Response Time</p>
                    <p className="text-gray-600">We typically reply within 1–2 business days.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 bg-teal-50 rounded-xl p-6" role="note" aria-label="Booking tip">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Planning a group experience?</strong> Use our{' '}
                  <a
                    href="/request"
                    className="text-teal-600 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-sm"
                  >
                    Request an Experience
                  </a>{' '}
                  form for faster responses — it helps us match you with the perfect artist or chef.
                </p>
              </div>
            </aside>

            <section aria-labelledby="form-heading">
              <h2 id="form-heading" className="text-2xl mb-8 text-gray-900">Send a Message</h2>

              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="bg-teal-50 border border-teal-200 rounded-xl p-8 text-center"
                >
                  <Send className="h-12 w-12 text-teal-600 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-xl text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-700">
                    Thank you, {form.name}. We've received your message and will get back to you within 1–2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">
                      Full Name <span aria-hidden="true" className="text-red-500">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                      value={form.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">
                      Email Address <span aria-hidden="true" className="text-red-500">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-1">
                      Subject <span aria-hidden="true" className="text-red-500">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      aria-required="true"
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      aria-invalid={!!errors.subject}
                      value={form.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white ${errors.subject ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
                    >
                      <option value="">Select a topic</option>
                      <option value="booking">Booking Question</option>
                      <option value="payment">Payment or Refund</option>
                      <option value="custom">Custom Experience Request</option>
                      <option value="group">Group or Private Event</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <p id="subject-error" role="alert" className="mt-1 text-sm text-red-600">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-1">
                      Message <span aria-hidden="true" className="text-red-500">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      aria-required="true"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-invalid={!!errors.message}
                      value={form.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-y ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" aria-hidden="true" />
                    Send Message
                  </button>
                </form>
              )}
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
