import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Search, Phone, User, Heart, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Properties', href: '/properties', icon: Search },
  { name: 'About', href: '/about', icon: User },
  { name: 'Blog', href: '/blog', icon: Heart },
  { name: 'Contact', href: '/contact', icon: Phone },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <span className="text-xl lg:text-2xl font-heading font-bold text-gray-900">
              MakeMyPropertyz
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                    isActive
                      ? 'text-primary-500 bg-primary-50'
                      : 'text-gray-600 hover:text-primary-500 hover:bg-gray-50'
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://makemypropertyz.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-r from-primary-500 via-red-500 to-primary-600 hover:from-primary-600 hover:via-red-600 hover:to-primary-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/25 focus:outline-none focus:ring-4 focus:ring-primary-500/30"
            >
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>
              
              {/* Content container */}
              <div className="relative flex items-center space-x-2">
                <span className="flex items-center space-x-1">
                  <span className="text-sm font-bold tracking-wide">Material Hub</span>
                  <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse"></div>
                </span>
                <ExternalLink className="w-4 h-4 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </div>
              
              {/* Bottom glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Floating particles effect */}
              <div className="absolute top-0 left-1/4 w-1 h-1 bg-white/60 rounded-full animate-bounce opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.1s' }}></div>
              <div className="absolute top-1 right-1/4 w-0.5 h-0.5 bg-white/60 rounded-full animate-bounce opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute bottom-1 left-1/3 w-0.5 h-0.5 bg-white/60 rounded-full animate-bounce opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.5s' }}></div>
            </a>
            <Link to="/contact" className="btn-primary transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-primary-500 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      'flex items-center space-x-2 px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200',
                      isActive
                        ? 'text-primary-500 bg-primary-50'
                        : 'text-gray-600 hover:text-primary-500 hover:bg-gray-50'
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="https://makemypropertyz.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="group relative overflow-hidden bg-gradient-to-r from-primary-500 via-red-500 to-primary-600 hover:from-primary-600 hover:via-red-600 hover:to-primary-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-500 flex items-center justify-between shadow-lg hover:shadow-xl hover:shadow-primary-500/25"
                >
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>
                  
                  {/* Content */}
                  <div className="relative flex items-center space-x-2">
                    <span className="text-base font-bold tracking-wide">Material Hub</span>
                    <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse"></div>
                  </div>
                  <ExternalLink className="relative w-5 h-5 transition-all duration-300 transform group-hover:translate-x-1" />
                  
                  {/* Bottom glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block mt-2"
                >
                  <span className="btn-primary w-full text-center">
                    Get Started
                  </span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
