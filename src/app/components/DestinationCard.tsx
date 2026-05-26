import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';

interface ExperienceCardProps {
  title: string;
  instructor: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  type: string;
}

export function ExperienceCard({ title, instructor, description, imageUrl, imageAlt, type }: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm mb-3">
          {type}
        </div>
        <h3 className="text-xl mb-1 text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">with {instructor}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to="/request"
          className="text-teal-600 hover:text-teal-700 transition-colors inline-block"
        >
          Book Experience →
        </Link>
      </div>
    </div>
  );
}
