import { Link } from 'react-router-dom';
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

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

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/MakeMyPropertyz' },
  { name: 'Twitter', icon: Twitter, href: 'https://www.instagram.com/make_my_propertyz' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/make_my_propertyz' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/make-my-propertyz' },
];``

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-heading font-bold">
                MakeMyPropertyz
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner in finding the perfect property in Bengaluru. 
              We make real estate simple, transparent, and accessible for everyone.
            </p>
            
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  7, Jnanabharathi BDA Layout, Jnana Ganga Nagar, Bengaluru, Karnataka 560056
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-gray-300">+91 8551 07 8551</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-gray-300">contact@makemypropertyz.com</span>
              </div>
            </div>
          </div>

          {/* Properties Links */}
          <div className="sm:col-span-1">
            <h3 className="font-heading font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Properties</h3>
            <ul className="space-y-2">
              {footerLinks.properties.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="sm:col-span-1">
            <h3 className="font-heading font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="sm:col-span-1">
            <h3 className="font-heading font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="sm:col-span-1">
            <h3 className="font-heading font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
            <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
              <p className="text-gray-300 text-sm">
                © 2025 MakeMyPropertyz. All rights reserved.
              </p>
              {/* <p className="text-gray-400 text-sm">
                RERA Registration: PRM/KA/RERA/1251/446/AG/010/2024
              </p> */}
            </div>
            
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
