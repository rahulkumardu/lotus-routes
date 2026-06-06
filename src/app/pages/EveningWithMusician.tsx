import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Music, Clock, Users, Star, MapPin, Calendar, ChevronRight } from 'lucide-react';

const highlights = [
  { icon: Clock, label: 'Duration', value: '2–3 hours' },
  { icon: Users, label: 'Group size', value: 'Up to 20 guests' },
  { icon: MapPin, label: 'Location', value: 'Private venue or your space' },
  { icon: Star, label: 'Level', value: 'All audiences welcome' },
];

const program = [
  {
    time: 'Opening',
    title: 'Introduction to Indian Classical Music',
    description: 'The artist opens with a brief, engaging introduction to the raga tradition — its history, structure, and the emotional landscape it explores.',
  },
  {
    time: '30 min',
    title: 'Alaap & Jod',
    description: 'A slow, meditative exploration of the raga without rhythm — the Alaap unfolds like a conversation between the artist and the instrument.',
  },
  {
    time: '45 min',
    title: 'Gat with Tabla',
    description: 'The tabla joins and the composition gains rhythm. Watch as the sitar and tabla engage in intricate call-and-response phrases.',
  },
  {
    time: '20 min',
    title: 'Interactive Q&A',
    description: 'Guests are welcome to ask questions, request a short demonstration, or learn a few notes on the sitar themselves.',
  },
  {
    time: 'Closing',
    title: 'Jhala & Reflection',
    description: 'The performance concludes with a fast, exhilarating Jhala followed by a moment of shared reflection — a signature of the Hindustani tradition.',
  },
];

const testimonials = [
  {
    quote: "An absolutely transcendent evening. Our guests were completely spellbound from the first note. Pandit Sharma's command of the sitar is unlike anything I've experienced live.",
    author: 'Priya T.',
    role: 'Private event host, Boston',
  },
  {
    quote: "We booked this for our university's South Asia Week and it sold out instantly. The interactive segment was especially powerful for students who had never heard classical music before.",
    author: 'Dr. Arjun M.',
    role: 'Cultural Studies Department, Georgetown',
  },
  {
    quote: 'My family visited from Chennai and this was the highlight of the entire trip. It felt intimate and profound — like a concert designed just for us.',
    author: 'Rohan K.',
    role: 'Heritage traveler, Washington DC',
  },
];

const faqs = [
  {
    q: 'Do I need musical knowledge to enjoy this?',
    a: 'Not at all. The performance is designed for all audiences. The artist provides context throughout, making it accessible and deeply moving for first-time listeners.',
  },
  {
    q: 'Can this be held at our home or venue?',
    a: 'Yes. With adequate space and a quiet room, we can bring the performance to you. We will discuss technical requirements (instrument transport, seating, acoustics) during booking.',
  },
  {
    q: 'What instrumentation is included?',
    a: 'A sitar performance accompanied by tabla. Upon special request, additional instruments such as sarod or bansuri (flute) can sometimes be arranged.',
  },
  {
    q: 'Can we serve food or drinks during the performance?',
    a: 'Light refreshments before or after the performance are welcome. During the raga, a quiet atmosphere enhances the experience for all guests.',
  },
];

export function EveningWithMusician() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-gray-900 text-white py-0 overflow-hidden"
        aria-labelledby="musician-heading"
      >
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
            alt="A sitar musician performing on stage bathed in warm golden light"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-gray-300" role="list">
              <li><Link to="/" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-400 rounded-sm">Home</Link></li>
              <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
              <li><Link to="/experiences" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-400 rounded-sm">Experiences</Link></li>
              <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
              <li aria-current="page" className="text-white">Evening with a Musician</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 mb-4 bg-teal-600 text-white text-sm px-3 py-1 rounded-full">
            <Music className="h-4 w-4" aria-hidden="true" />
            Music Performance
          </div>
          <h1 id="musician-heading" className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-white max-w-3xl">
            An Evening with a Classical Sitar Musician
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-10 leading-relaxed">
            An intimate, private concert experience featuring a master of Hindustani classical music. Witness centuries of tradition performed live — in your home, a private venue, or curated cultural space.
          </p>
          <Link
            to="/request"
            className="inline-block px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Book This Experience
          </Link>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-white border-b border-gray-100" aria-labelledby="highlights-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="highlights-heading" className="sr-only">Experience highlights</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6" role="list">
            {highlights.map(h => {
              const Icon = h.icon;
              return (
                <li key={h.label} className="flex items-center gap-4">
                  <div className="p-3 bg-teal-50 rounded-lg flex-shrink-0" aria-hidden="true">
                    <Icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{h.label}</p>
                    <p className="text-gray-900">{h.value}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white" aria-labelledby="about-exp-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="about-exp-heading" className="text-3xl mb-6 text-gray-900">About This Experience</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The sitar is one of the world's most evocative instruments — its layered resonance, microtonal ornaments, and meditative quality have captivated listeners for over 500 years. An Evening with a Classical Sitar Musician brings this living tradition directly to you.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your host artist is Pandit Vikram Sharma, a recipient of the Sangeet Natak Akademi Award and disciple of the Imdadkhani gharana. He has performed at Carnegie Hall, the Barbican, and the Darbar Festival, and brings the same depth of artistry to intimate private performances.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you are hosting friends, a cultural gathering, a family reunion with roots in South Asia, or a university event, this experience is designed to leave every guest deeply moved.
              </p>
            </div>
            <figure className="rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1609873814058-a8928924184a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Close-up of a sitar resting on a richly patterned textile, strings catching warm light"
                className="w-full object-cover aspect-[4/3]"
              />
              <figcaption className="px-4 py-2 text-sm text-gray-500 bg-gray-50 text-center">
                Traditional sitar — the soul of Hindustani classical music
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="py-20 bg-gray-50" aria-labelledby="program-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="program-heading" className="text-3xl mb-12 text-gray-900 text-center">What to Expect</h2>
          <ol className="space-y-6" aria-label="Performance program">
            {program.map((item, i) => (
              <li key={item.title} className="flex gap-6 items-start">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center"
                  aria-hidden="true"
                >
                  {i + 1}
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-lg text-gray-900">{item.title}</h3>
                    <span className="text-sm text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Calendar className="h-3 w-3" aria-hidden="true" />
                      {item.time}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="testimonials-heading" className="text-3xl mb-12 text-gray-900 text-center">What Guests Say</h2>
          <ul className="grid md:grid-cols-3 gap-8" role="list">
            {testimonials.map(t => (
              <li key={t.author} className="bg-teal-50 rounded-xl p-8" role="listitem">
                <blockquote>
                  <p className="text-gray-700 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="flex items-center gap-3">
                    <div>
                      <cite className="not-italic text-gray-900">{t.author}</cite>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </footer>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50" aria-labelledby="musician-faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="musician-faq-heading" className="text-3xl mb-10 text-gray-900 text-center">Common Questions</h2>
          <dl className="space-y-6">
            {faqs.map(item => (
              <div key={item.q} className="bg-white rounded-xl p-6 shadow-sm">
                <dt className="text-gray-900 mb-3">{item.q}</dt>
                <dd className="text-gray-600 leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-600" aria-labelledby="musician-cta-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="musician-cta-heading" className="text-3xl mb-4 text-white">
            Ready to Host an Unforgettable Evening?
          </h2>
          <p className="text-teal-100 mb-10 text-lg leading-relaxed">
            Tell us about your vision — group size, date preferences, and any special requests — and we will take care of the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request"
              className="inline-block px-8 py-4 bg-white text-teal-700 hover:bg-teal-50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600"
            >
              Book This Experience
            </Link>
            <Link
              to="/experiences"
              className="inline-block px-8 py-4 border-2 border-white text-white hover:bg-teal-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600"
            >
              Browse All Experiences
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
