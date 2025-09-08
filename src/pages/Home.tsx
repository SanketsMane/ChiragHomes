import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Play,
  MapPin,
  Phone,
  Mail,
  Star,
  Zap,
  Shield,
  Award,
  TrendingUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  Search,
  User,
  Building,
  Sparkles
} from 'lucide-react';
import { SEOHead, organizationSchema } from '../components/SEOHead';
import { mockTestimonials } from '../lib/data';

// Hero Background Images - High Quality 4K Property Images
const heroImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=3840&h=2160&fit=crop&crop=center&q=90',
    title: 'Luxury Penthouse Living'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=3840&h=2160&fit=crop&crop=center&q=90',
    title: 'Modern Villa Architecture'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=3840&h=2160&fit=crop&crop=center&q=90',
    title: 'Premium Residential Complex'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=3840&h=2160&fit=crop&crop=center&q=90',
    title: 'Executive Dream Homes'
  }
];

// Modern Hero Section Data
const heroStats = [
  { number: '300+', label: 'Properties', icon: Building },
  { number: '350+', label: 'Happy Clients', icon: User },
  { number: '25+', label: 'Areas', icon: MapPin },
  { number: '5+', label: 'Years', icon: Award }
];

// Modern Services Data
const modernServices = [
  {
    icon: Search,
    title: 'Smart Property Search',
    description: 'AI-powered search to find your perfect match'
  },
  {
    icon: Shield,
    title: 'Verified Listings',
    description: 'All properties are RERA verified and authenticated'
  },
  {
    icon: TrendingUp,
    title: 'Market Analytics',
    description: 'Real-time market insights and price predictions'
  },
  {
    icon: Zap,
    title: 'Instant Connect',
    description: 'Connect with agents instantly via chat or call'
  }
];

// Featured Properties Gallery - High Quality 4K Images
const featuredGallery = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=3840&h=2160&fit=crop&crop=center&q=90',
    title: 'Luxury Penthouse',
    location: 'Panaji, Goa',
    price: '₹2.5 Cr',
    type: 'Penthouse',
    bedrooms: 4,
    area: '3500',
    features: ['Swimming Pool', 'Gym', 'Parking', 'Security']
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=3840&h=2160&fit=crop&crop=center&q=90',
    title: 'Modern Villa',
    location: 'Calangute, Goa',
    price: '₹1.8 Cr',
    type: 'Villa',
    bedrooms: 3,
    area: '2800',
    features: ['Garden', 'Terrace', 'Parking', 'Security']
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=3840&h=2160&fit=crop&crop=center&q=90',
    title: 'Smart Apartment',
    location: 'Baga, Goa',
    price: '₹95 L',
    type: 'Apartment',
    bedrooms: 2,
    area: '1200',
    features: ['Smart Home', 'Gym', 'Pool', 'Security']
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=3840&h=2160&fit=crop&crop=center&q=90',
    title: 'Premium Duplex',
    location: 'Anjuna, Goa',
    price: '₹1.2 Cr',
    type: 'Duplex',
    bedrooms: 3,
    area: '2000',
    features: ['Balcony', 'Parking', 'Lift', 'Security']
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=3840&h=2160&fit=crop&crop=center&q=90',
    title: 'Garden Villa',
    location: 'Margao, Goa',
    price: '₹1.5 Cr',
    type: 'Villa',
    bedrooms: 4,
    area: '3000',
    features: ['Large Garden', 'Pool', 'Garage', 'Security']
  }
];

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);
  const [counters, setCounters] = useState({ properties: 0, clients: 0, areas: 0, years: 0 });

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    const heroSection = document.getElementById('hero-section');
    if (heroSection) observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  // Auto-scroll for featured gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredGallery.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll for hero background
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const animateCounters = () => {
    const targets = { properties: 300, clients: 350, areas: 25, years: 5 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCounters({
        properties: Math.floor(targets.properties * easeProgress),
        clients: Math.floor(targets.clients * easeProgress),
        areas: Math.floor(targets.areas * easeProgress),
        years: Math.floor(targets.years * easeProgress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepDuration);
  };

  return (
    <>
      <SEOHead
        title="ChiragHomes - Buy, Sell & Rent Properties in Goa | Best Real Estate Deals"
        description="Find your dream property in Goa with ChiragHomes. 1000+ verified listings, expert guidance, and transparent pricing. Buy, sell, or rent apartments, villas & luxury homes."
        keywords="property for sale Goa, buy property Goa, apartments for sale, real estate Goa, property dealers, villas for sale, property investment, RERA verified"
        canonical="https://chiraghomes.com"
        schema={organizationSchema}
      />
      <main className="overflow-hidden">
        {/* Modern Hero Section */}
        <section id="hero-section" className="relative min-h-screen overflow-hidden">
          {/* Hero Image Slideshow Background */}
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-opacity duration-2000 ${index === heroSlide ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/50"></div>
                {/* Red gradient overlay for brand consistency */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-primary-800/20 to-primary-600/30"></div>
              </div>
            ))}
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-200/20 to-primary-300/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-primary-100/20 to-primary-200/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary-50/30 to-primary-100/10 rounded-full blur-2xl animate-pulse"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-20 container-custom pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
            <div className="text-center max-w-5xl mx-auto">
              {/* Main Heading */}
              <h1 className="heading-xl text-white mb-4 sm:mb-6 animate-fade-in-delay drop-shadow-lg">
                Find Your
                <span className="block bg-gradient-to-r from-primary-300 via-primary-200 to-primary-100 bg-clip-text text-transparent">
                  Dream Home
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-in-delay-2 drop-shadow-md leading-relaxed">
                Discover premium properties in Goa with our expert guidance and transparent pricing
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 animate-fade-in-delay-2 max-w-md mx-auto xs:max-w-none">
                <Link
                  to="/properties"
                  className="group bg-primary-500 hover:bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center space-x-2"
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Explore Properties</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <button className="group border-2 border-white/80 text-white hover:bg-white hover:text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2 backdrop-blur-sm">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>

              {/* Stats Counter */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
                {heroStats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-110"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm group-hover:bg-primary-500 rounded-xl sm:rounded-2xl mb-2 sm:mb-4 transition-all duration-300">
                      <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:text-white" />
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">
                      {index === 0 ? counters.properties : index === 1 ? counters.clients : index === 2 ? counters.areas : counters.years}+
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-gray-200 font-medium drop-shadow-md">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-lg" />
            </div>

            {/* Hero Slide Indicators */}
            <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 flex space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setHeroSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === heroSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/80'
                    }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Modern Services Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience excellence in real estate with our innovative platform and expert guidance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {modernServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 shadow-card hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-primary-200"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 group-hover:bg-primary-500 rounded-2xl mb-6 transform group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-8 h-8 text-primary-600 group-hover:text-white" />
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-200 rounded-3xl transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Property Gallery */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
                Featured Properties
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover handpicked premium properties in Goa's most desirable locations
              </p>
            </div>

            {/* Interactive Gallery */}
            <div className="relative max-w-6xl mx-auto">
              <div className="relative h-96 lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl">
                {featuredGallery.map((property, index) => (
                  <div
                    key={property.id}
                    className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide
                      ? 'opacity-100 transform scale-100'
                      : 'opacity-0 transform scale-105'
                      }`}
                  >
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Property Info */}
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
                        <div className="lg:flex-1">
                          <div className="inline-flex items-center bg-primary-500 rounded-full px-4 py-2 mb-4">
                            <span className="text-sm font-semibold">{property.type}</span>
                          </div>
                          <h3 className="text-3xl lg:text-5xl font-heading font-bold mb-3">{property.title}</h3>
                          <div className="flex items-center text-lg opacity-90 mb-4">
                            <MapPin className="w-5 h-5 mr-2" />
                            {property.location}
                          </div>
                          <div className="flex items-center space-x-6 text-base mb-4">
                            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{property.bedrooms} BHK</span>
                            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{property.area} sq ft</span>
                          </div>
                          {/* Property Features */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {property.features.map((feature, idx) => (
                              <span key={idx} className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-4 lg:mt-0 lg:text-right">
                          <div className="text-4xl lg:text-5xl font-heading font-bold text-primary-300 mb-2">{property.price}</div>
                          <Link
                            to={`/properties/${property.id}`}
                            className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 space-x-2"
                          >
                            <span>View Details</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-6 right-6 flex space-x-3">
                      <button className="bg-white/20 backdrop-blur-sm hover:bg-primary-500 p-3 rounded-full transition-all duration-300 group">
                        <Heart className="w-5 h-5 text-white group-hover:text-white" />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm hover:bg-primary-500 p-3 rounded-full transition-all duration-300 group">
                        <Eye className="w-5 h-5 text-white group-hover:text-white" />
                      </button>
                    </div>

                    {/* Property Count */}
                    <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                      {index + 1} / {featuredGallery.length}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + featuredGallery.length) % featuredGallery.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-primary-500 p-4 rounded-full transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredGallery.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-primary-500 p-4 rounded-full transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110" />
              </button>

              {/* Slide Indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                {featuredGallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                      ? 'bg-primary-500 scale-125'
                      : 'bg-gray-400 hover:bg-primary-300'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* View All Properties Button */}
            <div className="text-center mt-12">
              <Link
                to="/properties"
                className="group inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl space-x-2"
              >
                <span>View All Properties</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>

        {/* Modern Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover why thousands of families trust us with their property dreams
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {mockTestimonials.slice(0, 3).map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    {/* Rating Stars */}
                    <div className="flex items-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                            }`}
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center">
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover mr-4 ring-4 ring-white shadow-md"
                      />
                      <div>
                        <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                        <div className="text-gray-600">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-6xl text-blue-100 group-hover:text-blue-200 transition-colors duration-300">
                    "
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modern CTA Section */}
        <section className="py-20 bg-primary-500 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6">
                Ready to Find Your
                <span className="block text-primary-100">
                  Perfect Home?
                </span>
              </h2>

              <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
                Join thousands of satisfied clients who found their dream properties with our expert guidance and innovative platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  to="/properties"
                  className="group bg-white text-primary-600 hover:bg-gray-50 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-3"
                >
                  <Search className="w-6 h-6" />
                  <span>Start Your Search</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <Link
                  to="/contact"
                  className="group border-2 border-white/30 text-white hover:bg-white hover:text-primary-600 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3"
                >
                  <Phone className="w-6 h-6" />
                  <span>Get Free Consultation</span>
                </Link>
              </div>

              {/* Contact Info */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl mb-4 group-hover:bg-white/20 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-semibold">Call Us</div>
                  <div className="text-primary-100">+91 9740207010</div>
                </div>

                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl mb-4 group-hover:bg-white/20 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-semibold">Email Us</div>
                  <div className="text-primary-100">chiraghomes333@gmail.com</div>
                </div>

                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl mb-4 group-hover:bg-white/20 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-semibold">Visit Us</div>
                  <div className="text-primary-100">Goa, India</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
