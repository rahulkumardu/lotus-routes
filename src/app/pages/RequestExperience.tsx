import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function RequestExperience() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experienceType: '',
    preferredDate: '',
    groupSize: '',
    groupType: 'private',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/confirmation', { state: formData });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl mb-2 text-gray-900">Request an Experience</h1>
          <p className="text-gray-600 mb-8">
            Fill out the form below and we'll get back to you within 24 hours to confirm your booking.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="experienceType" className="block text-sm text-gray-700 mb-2">
                Experience Type *
              </label>
              <select
                id="experienceType"
                name="experienceType"
                required
                value={formData.experienceType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="">Select an experience</option>
                <option value="Classical Sitar Performance">Classical Sitar Performance</option>
                <option value="Authentic Indian Cooking">Authentic Indian Cooking</option>
                <option value="Bharatanatyam Dance">Bharatanatyam Dance</option>
                <option value="Tabla Masterclass">Tabla Masterclass</option>
                <option value="Yoga & Meditation Retreat">Yoga & Meditation Retreat</option>
                <option value="Traditional Textile Arts">Traditional Textile Arts</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="preferredDate" className="block text-sm text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  required
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label htmlFor="groupSize" className="block text-sm text-gray-700 mb-2">
                  Number of Participants *
                </label>
                <input
                  type="number"
                  id="groupSize"
                  name="groupSize"
                  required
                  min="1"
                  max="20"
                  value={formData.groupSize}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="1"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Session Type *
              </label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="groupType"
                    value="private"
                    checked={formData.groupType === 'private'}
                    onChange={handleChange}
                    className="mr-2 text-teal-600 focus:ring-teal-500"
                  />
                  <span className="text-gray-700">Private Session</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="groupType"
                    value="group"
                    checked={formData.groupType === 'group'}
                    onChange={handleChange}
                    className="mr-2 text-teal-600 focus:ring-teal-500"
                  />
                  <span className="text-gray-700">Group Session</span>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="specialRequests" className="block text-sm text-gray-700 mb-2">
                Special Requests or Questions
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                rows={4}
                value={formData.specialRequests}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Let us know if you have any dietary restrictions, accessibility needs, or special requests..."
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate('/experiences')}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
