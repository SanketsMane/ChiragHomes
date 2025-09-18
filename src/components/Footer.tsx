import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  properties: [
    { name: 'For Sale', href: '/properties?status=for-sale' },
    { name: 'For Rent', href: '/properties?status=for-rent' },
    { name: 'Luxury Homes', href: '/properties?type=luxury' },
    { name: 'Apartments', href: '/properties?type=apartment' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    // { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Market Reports', href: '/blog?category=market' },
    { name: 'Investment Guide', href: '/blog?category=investment' },
    { name: 'Home Loans', href: '/blog?category=loans' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Company Info - Takes more space for better logo display */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              <Link to="/" className="inline-block">
                <img 
                  src="/chirag-homes-logo-new.jpeg" 
                  alt="ChiragHomes Logo" 
                  className="h-16 w-auto drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
                />
              </Link>
              
              <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                Your trusted partner in finding the perfect property in Goa.
                We make real estate simple, transparent, and accessible for everyone.
              </p>

              {/* Contact Info with better spacing */}
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-xs leading-relaxed">
                    H.No. 5/59, Maddowaddo, VTC: Calangute,<br />
                    PO: Calangute, Sub District: Bardez,<br />
                    North Goa, State: Goa, PIN: 403516
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  <a href="tel:+919740207010" className="text-gray-300 hover:text-white transition-colors text-sm">
                    +91 9740207010
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  <a href="mailto:chirraghomes@gmail.com" className="text-gray-300 hover:text-white transition-colors text-xs break-all">
                    chirraghomes@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links - Better organized in 2 columns */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
              {/* Properties Links */}
              <div>
                <h3 className="font-heading font-semibold mb-3 text-white text-base">Properties</h3>
                <ul className="space-y-2">
                  {footerLinks.properties.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-xs"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="font-heading font-semibold mb-3 text-white text-base">Company</h3>
                <ul className="space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-xs"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="font-heading font-semibold mb-3 text-white text-base">Resources</h3>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-xs"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h3 className="font-heading font-semibold mb-3 text-white text-base">Legal</h3>
                <ul className="space-y-2">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-xs"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Social Links - Vertical layout for better balance */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-semibold mb-3 text-white text-base">Follow Us</h3>
            <div className="flex flex-wrap lg:flex-col gap-2">
              <div className="flex items-center space-x-2 w-8 h-8 lg:w-auto lg:h-auto lg:p-2 bg-gray-800 rounded-lg group cursor-default">
                <Facebook className="w-4 h-4 mx-auto lg:mx-0 flex-shrink-0" />
                <span className="hidden lg:block text-xs text-gray-300">Facebook</span>
              </div>
              <div className="flex items-center space-x-2 w-8 h-8 lg:w-auto lg:h-auto lg:p-2 bg-gray-800 rounded-lg group cursor-default">
                <Twitter className="w-4 h-4 mx-auto lg:mx-0 flex-shrink-0" />
                <span className="hidden lg:block text-xs text-gray-300">Twitter</span>
              </div>
              <div className="flex items-center space-x-2 w-8 h-8 lg:w-auto lg:h-auto lg:p-2 bg-gray-800 rounded-lg group cursor-default">
                <Instagram className="w-4 h-4 mx-auto lg:mx-0 flex-shrink-0" />
                <span className="hidden lg:block text-xs text-gray-300">Instagram</span>
              </div>
              <div className="flex items-center space-x-2 w-8 h-8 lg:w-auto lg:h-auto lg:p-2 bg-gray-800 rounded-lg group cursor-default">
                <Linkedin className="w-4 h-4 mx-auto lg:mx-0 flex-shrink-0" />
                <span className="hidden lg:block text-xs text-gray-300">LinkedIn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with better spacing */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <p className="text-gray-400 text-xs">
              © 2025 ChiragHomes. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Designed with ❤️ By Formonex Solutions PVT LTD
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
