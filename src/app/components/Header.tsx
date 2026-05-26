import { Palmtree, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/experiences', label: 'Experiences' },
    { path: '/about', label: 'About' },
  ];

  return (
    <header className="border-b bg-white" role="banner">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 rounded-md"
            aria-label="Lotus Routes Home"
          >
            <Palmtree className="h-8 w-8 text-teal-600" aria-hidden="true" />
            <span className="text-xl font-semibold text-gray-900">Lotus Routes</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 rounded-md px-2 py-1 ${
                  isActive(link.path) ? 'text-gray-900 font-medium' : 'text-gray-600 hover:text-teal-600'
                }`}
                aria-current={isActive(link.path) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4" role="navigation" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 rounded-md px-2 py-2 ${
                    isActive(link.path) ? 'text-gray-900 font-medium bg-teal-50' : 'text-gray-600 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
