import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Heart, Users, Globe, Sparkles } from 'lucide-react';

export function About() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl mb-6 text-gray-900">
                Our Story
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Lotus Routes was born from a simple yet profound desire to bridge the gap between cultural heritage and modern experiences.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758810357499-88163cd47fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Beautiful Indian palace architecture"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl mb-8 text-gray-900 text-center">How It All Began</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
              <div className="order-2 md:order-1">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The idea for Lotus Routes emerged from a heartfelt conversation between two people passionate about preserving and sharing South Asian heritage. In a world where traditional art forms, culinary secrets, and cultural practices risk fading into obscurity, we saw an opportunity to create something meaningful.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  What if travelers, students, and cultural enthusiasts could connect directly with master artists, renowned chefs, and celebrated performers? What if South Asian heritage could be experienced not just observed, but lived and felt in its most authentic form?
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1771238113736-5954f174156b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Indian classical musicians performing"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            </div>

            <div className="bg-teal-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl mb-4 text-gray-900">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To create transformative cultural experiences that honor South Asian heritage while making it accessible to a global audience. We believe that every performance, every lesson, and every shared meal is an opportunity to preserve traditions, build understanding, and create lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12 text-gray-900 text-center">What Drives Us</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="flex justify-center mb-4">
                <Heart className="h-12 w-12 text-teal-600" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Authenticity</h3>
              <p className="text-gray-600">
                Every experience is guided by true masters of their craft, ensuring genuine cultural immersion.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-teal-600" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Connection</h3>
              <p className="text-gray-600">
                We foster meaningful relationships between artists and participants, creating bonds that transcend cultures.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="flex justify-center mb-4">
                <Globe className="h-12 w-12 text-teal-600" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Preservation</h3>
              <p className="text-gray-600">
                By celebrating traditional arts, we help ensure these precious cultural treasures endure for generations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="flex justify-center mb-4">
                <Sparkles className="h-12 w-12 text-teal-600" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Transformation</h3>
              <p className="text-gray-600">
                Each experience is designed to leave you enriched, inspired, and deeply connected to heritage.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769805589566-47a4e0b10c5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Indian chef preparing traditional cuisine"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1626523445530-804c4745be94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Indian artisan working with traditional textiles"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-6 text-gray-900">Join Us on This Journey</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Whether you're a cultural tourist seeking authentic experiences, a student eager to learn from masters, a family looking to connect with your heritage, or a retiree with time to explore new passions, Lotus Routes welcomes you.
          </p>
          <p className="text-xl text-gray-900 mb-8">
            Together, we celebrate the past, honor the present, and inspire the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/experiences"
              className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors"
            >
              Explore Experiences
            </a>
            <a
              href="/request"
              className="px-8 py-3 border border-teal-600 text-teal-600 hover:bg-teal-50 rounded-md transition-colors"
            >
              Request an Experience
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
