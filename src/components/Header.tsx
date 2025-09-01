import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Search, Phone, User, Heart } from 'lucide-react';

import { cn } from '../lib/utils';
import Logo from './Logo';

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
        <div className="flex items-center justify-between h-16 lg:h-20 px-2 lg:px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 lg:space-x-4">
            <Logo className="h-32 w-auto lg:h-32" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'flex items-center space-x-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105',
                    isActive
                      ? 'text-primary-500 bg-primary-50 shadow-sm'
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
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <Link
              to="/contact"
              className="btn-primary transform hover:scale-105 transition-all duration-200 hover:shadow-lg px-5 py-2.5 text-sm font-semibold"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 text-gray-600 hover:text-primary-500 hover:bg-gray-50 rounded-lg transition-all duration-200 ml-2"
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
          <div className="lg:hidden py-4 px-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      'flex items-center space-x-3 px-4 py-3 text-base font-medium rounded-lg transition-all duration-200',
                      isActive
                        ? 'text-primary-500 bg-primary-50 shadow-sm'
                        : 'text-gray-600 hover:text-primary-500 hover:bg-gray-50'
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <div className="pt-4 mt-4 border-t border-gray-100 space-y-3">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block"
                >
                  <span className="btn-primary w-full text-center py-3 font-semibold">
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
