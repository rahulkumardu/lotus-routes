import { ExperienceCard } from './DestinationCard';

const experiences = [
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
  }
];

export function PopularExperiences() {
  return (
    <section className="py-16 bg-gray-50" aria-labelledby="featured-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="featured-heading" className="text-3xl text-center mb-12 text-gray-900">
          Featured Experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
