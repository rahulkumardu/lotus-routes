import { useLocation, Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Calendar, Users, Mail, Phone } from 'lucide-react';
import { useEffect } from 'react';

export function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state;

  useEffect(() => {
    if (!formData) {
      navigate('/');
    }
  }, [formData, navigate]);

  if (!formData) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-20 w-20 text-green-500" />
          </div>

          <h1 className="text-3xl mb-4 text-gray-900">Booking Request Confirmed!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for your interest in Lotus Routes. We've received your request and will contact you within 24 hours to finalize your booking.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-xl mb-4 text-gray-900">Booking Summary</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-teal-600 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Contact Email</p>
                  <p className="text-gray-900">{formData.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-teal-600 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Phone Number</p>
                  <p className="text-gray-900">{formData.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-teal-600 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Experience</p>
                  <p className="text-gray-900">{formData.experienceType}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-teal-600 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Preferred Date</p>
                  <p className="text-gray-900">
                    {new Date(formData.preferredDate).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-teal-600 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Participants</p>
                  <p className="text-gray-900">
                    {formData.groupSize} {formData.groupSize === '1' ? 'person' : 'people'} ({formData.groupType === 'private' ? 'Private' : 'Group'} Session)
                  </p>
                </div>
              </div>

              {formData.specialRequests && (
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Special Requests</p>
                    <p className="text-gray-900">{formData.specialRequests}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-teal-800">
              <strong>What's Next?</strong> Our team will review your request and send you a confirmation email with payment details, instructor information, and location specifics.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              to="/experiences"
              className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors"
            >
              Browse More Experiences
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
