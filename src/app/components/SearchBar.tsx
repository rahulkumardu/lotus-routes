import { Search } from 'lucide-react';
import { useState } from 'react';

export function SearchBar() {
  const [experienceType, setExperienceType] = useState('');
  const [date, setDate] = useState('');
  const [groupSize, setGroupSize] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality would go here
    console.log({ experienceType, date, groupSize });
  };

  return (
    <section className="py-8 bg-white" aria-labelledby="search-heading">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 id="search-heading" className="sr-only">Search for experiences</h2>
        <form onSubmit={handleSearch} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <label htmlFor="experienceType" className="block text-sm text-gray-700 mb-2">
                Experience Type
              </label>
              <select
                id="experienceType"
                name="experienceType"
                value={experienceType}
                onChange={(e) => setExperienceType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="">All Experiences</option>
                <option value="music">Classical Music</option>
                <option value="dance">Classical Dance</option>
                <option value="cooking">Cooking Classes</option>
                <option value="art">Art & Craft</option>
                <option value="yoga">Yoga & Wellness</option>
              </select>
            </div>

            <div className="md:col-span-1">
              <label htmlFor="date" className="block text-sm text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                aria-label="Select preferred date"
              />
            </div>

            <div className="md:col-span-1">
              <label htmlFor="groupSize" className="block text-sm text-gray-700 mb-2">
                Group Type
              </label>
              <select
                id="groupSize"
                name="groupSize"
                value={groupSize}
                onChange={(e) => setGroupSize(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="">Any</option>
                <option value="private">Private Session</option>
                <option value="small">Small Group (2-6)</option>
                <option value="group">Group (7-15)</option>
              </select>
            </div>

            <div className="md:col-span-1 flex items-end">
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 text-white py-2 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
                aria-label="Search for experiences"
              >
                <Search className="h-5 w-5" aria-hidden="true" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
