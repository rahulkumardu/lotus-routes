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
    imageAlt: 'Musician wearing colorful traditional shirt playing classical sitar instrument'
  },
  {
    title: 'Authentic Indian Cooking',
    instructor: 'Chef Priya Sharma',
    type: 'Culinary',
    description: 'Learn the secrets of traditional South Asian cuisine with hands-on cooking lessons featuring regional spices and time-honored techniques.',
    imageUrl: 'https://images.unsplash.com/photo-1656497119922-068c6a5e1193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Bowl filled with vibrant orange and red Indian spices and curry'
  },
  {
    title: 'Bharatanatyam Dance',
    instructor: 'Guru Lakshmi Devi',
    type: 'Dance',
    description: 'Experience the grace and spirituality of one of India\'s oldest classical dance forms through private or group lessons with a master dancer.',
    imageUrl: 'https://images.unsplash.com/photo-1630663129615-a2331ed88ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Dancer in traditional yellow dress performing Bharatanatyam in flower field'
  },
  {
    title: 'Tabla Masterclass',
    instructor: 'Ustad Ahmed Khan',
    type: 'Music',
    description: 'Learn the intricate rhythms and techniques of tabla drumming from a master percussionist in an intimate setting.',
    imageUrl: 'https://images.unsplash.com/photo-1570797803365-c6eb43b1f040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Person playing traditional tabla drums with both hands'
  },
  {
    title: 'Yoga & Meditation Retreat',
    instructor: 'Swami Ananda',
    type: 'Wellness',
    description: 'Discover inner peace and physical wellness through traditional yoga practices and guided meditation sessions.',
    imageUrl: 'https://images.unsplash.com/photo-1722605351898-b47a9b621467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Man practicing yoga pose on blue mat in peaceful setting'
  },
  {
    title: 'Traditional Textile Arts',
    instructor: 'Artisan Meera Patel',
    type: 'Craft',
    description: 'Explore the vibrant world of South Asian textile traditions including block printing, embroidery, and natural dyeing techniques.',
    imageUrl: 'https://images.unsplash.com/photo-1773846012650-af51db0e4cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Bunches of vibrant multicolored yarn displayed on wooden shelf'
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
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16" aria-labelledby="experiences-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 id="experiences-heading" className="text-4xl sm:text-5xl mb-4 text-gray-900">
                South Asian Heritage
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Explore Authentic South Asian Heritage
              </p>
              <div className="flex flex-wrap gap-3" role="group" aria-label="Filter experiences by category">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-6 py-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 ${
                      selectedFilter === filter
                        ? 'bg-gray-900 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                    aria-pressed={selectedFilter === filter}
                    aria-label={`Filter by ${filter}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-lg aspect-video overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759134834008-cf9a8d374170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Ancient Indian temple with intricate carved architecture and stone pillars"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="all-experiences-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="all-experiences-heading" className="text-3xl text-center mb-12 text-gray-900">
            Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredExperiences.map((experience) => (
              <ExperienceCard key={experience.title} {...experience} />
            ))}
          </div>

          <aside className="bg-gray-50 rounded-lg p-8" aria-labelledby="featured-experience-heading">
            <h3 id="featured-experience-heading" className="text-2xl mb-8 text-gray-900">Featured Experience</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg aspect-video overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1747155828398-1d52dafb6ea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Musician playing traditional instrument in intimate evening performance setting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl mb-2 text-gray-900">Evening with Musician</h4>
                <p className="text-gray-600 mb-4">
                  Join us for an intimate evening of classical Indian music featuring renowned artists performing traditional ragas and compositions.
                </p>
                <button
                  type="button"
                  className="bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 text-white px-6 py-2 rounded-md transition-colors"
                  aria-label="Learn more about Evening with Musician experience"
                >
                  Learn More
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
