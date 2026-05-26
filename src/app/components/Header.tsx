import { Palmtree } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Palmtree className="h-8 w-8 text-teal-600" />
            <span className="text-xl font-semibold text-gray-900">Lotus Routes</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') ? 'text-gray-900' : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/experiences"
              className={`transition-colors ${
                isActive('/experiences') ? 'text-gray-900' : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              Experiences
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive('/about') ? 'text-gray-900' : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
