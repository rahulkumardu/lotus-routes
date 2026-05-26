import { useState } from 'react';
import { ExperienceCard } from '../components/DestinationCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const allExperiences = [
  {
    title: 'Classical Sitar Performance',
    instructor: 'Pandit Ravi Kumar',
    type: 'Music',
    description: 'Immerse yourself in the mesmerizing sounds of the sitar with a private performance and introduction to Indian classical music traditions.',
    imageUrl: 'https://images.unsplash.com/photo-1646765444015-5881f0fab3e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Indian classical musician performing'
  },
  {
    title: 'Authentic Indian Cooking',
    instructor: 'Chef Priya Sharma',
    type: 'Culinary',
    description: 'Learn the secrets of traditional South Asian cuisine with hands-on cooking lessons featuring regional spices and time-honored techniques.',
    imageUrl: 'https://images.unsplash.com/photo-1656497119922-068c6a5e1193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Indian spices and cuisine'
  },
  {
    title: 'Bharatanatyam Dance',
    instructor: 'Guru Lakshmi Devi',
    type: 'Dance',
    description: 'Experience the grace and spirituality of one of India\'s oldest classical dance forms through private or group lessons with a master dancer.',
    imageUrl: 'https://images.unsplash.com/photo-1630663129615-a2331ed88ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Bharatanatyam classical dance performance'
  },
  {
    title: 'Tabla Masterclass',
    instructor: 'Ustad Ahmed Khan',
    type: 'Music',
    description: 'Learn the intricate rhythms and techniques of tabla drumming from a master percussionist in an intimate setting.',
    imageUrl: 'https://images.unsplash.com/photo-1570797803365-c6eb43b1f040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Tabla drums performance'
  },
  {
    title: 'Yoga & Meditation Retreat',
    instructor: 'Swami Ananda',
    type: 'Wellness',
    description: 'Discover inner peace and physical wellness through traditional yoga practices and guided meditation sessions.',
    imageUrl: 'https://images.unsplash.com/photo-1722605351898-b47a9b621467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Yoga and meditation'
  },
  {
    title: 'Traditional Textile Arts',
    instructor: 'Artisan Meera Patel',
    type: 'Craft',
    description: 'Explore the vibrant world of South Asian textile traditions including block printing, embroidery, and natural dyeing techniques.',
    imageUrl: 'https://images.unsplash.com/photo-1773846012650-af51db0e4cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Colorful textile yarns'
  }
];

export function Experiences() {
  const [selectedFilter, setSelectedFilter] = useState('Popular');

  const filters = ['Popular', 'Music', 'Dance', 'Culinary', 'Wellness', 'Craft'];

  const filteredExperiences = selectedFilter === 'Popular'
    ? allExperiences
    : allExperiences.filter(exp => exp.type === selectedFilter);

  const featuredExperience = allExperiences[0];

  return (
    <>
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl mb-4 text-gray-900">
                South Asian Heritage
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Explore Authentic South Asian Heritage
              </p>
              <div className="flex flex-wrap gap-3">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-6 py-2 rounded-full transition-colors ${
                      selectedFilter === filter
                        ? 'bg-gray-900 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-lg aspect-video overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759134834008-cf9a8d374170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Indian heritage temple architecture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12 text-gray-900">
            Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredExperiences.map((experience) => (
              <ExperienceCard key={experience.title} {...experience} />
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl mb-8 text-gray-900">Featured Experience</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg aspect-video overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1747155828398-1d52dafb6ea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Classical music evening performance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl mb-2 text-gray-900">Evening with Musician</h4>
                <p className="text-gray-600 mb-4">
                  Join us for an intimate evening of classical Indian music featuring renowned artists performing traditional ragas and compositions.
                </p>
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
