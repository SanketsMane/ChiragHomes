import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Calendar, 
  Heart, 
  Share2, 
  Phone, 
  Mail, 
  Star,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Maximize,
  CheckCircle
} from 'lucide-react';
import type { Property } from '../types';
import { mockProperties } from '../lib/data';
import { formatPrice, getImageUrl } from '../lib/utils';

export function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullscreenGallery, setShowFullscreenGallery] = useState(false);

  useEffect(() => {
    // In a real app, this would be an API call
    const foundProperty = mockProperties.find(p => p.id === id);
    setProperty(foundProperty || null);
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
            Property Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The property you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/properties" className="btn-primary">
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const currentImage = property.images[currentImageIndex];
  const statusColor = property.details.status === 'for-sale' ? 'bg-green-500' : 'bg-blue-500';
  const statusText = property.details.status === 'for-sale' ? 'For Sale' : 'For Rent';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container-custom py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary-500">Home</Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-primary-500">Properties</Link>
            <span>/</span>
            <span className="text-gray-900">{property.title}</span>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="container-custom pt-6">
        <Link 
          to="/properties" 
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-500 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Properties</span>
        </Link>
      </div>

      <div className="container-custom pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-card">
              <div className="relative">
                <img
                  src={getImageUrl(currentImage.url, 800, 500)}
                  alt={currentImage.alt}
                  className="w-full h-64 md:h-96 object-cover"
                />
                
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 ${statusColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {statusText}
                </div>

                {/* Navigation Arrows */}
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Fullscreen Button */}
                <button
                  onClick={() => setShowFullscreenGallery(true)}
                  className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white px-3 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                >
                  <Maximize className="w-4 h-4" />
                  <span className="text-sm">View All ({property.images.length})</span>
                </button>
              </div>

              {/* Thumbnail Strip */}
              {property.images.length > 1 && (
                <div className="p-4 flex space-x-2 overflow-x-auto">
                  {property.images.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex ? 'border-primary-500' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={getImageUrl(image.url, 80, 64)}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{property.location.address}, {property.location.city}</span>
                  </div>
                  <div className="text-3xl font-heading font-bold text-primary-500">
                    {formatPrice(property.price)}
                    {property.details.status === 'for-rent' && (
                      <span className="text-lg text-gray-500 font-normal">/month</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Bed className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900">{property.details.bedrooms}</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Bath className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900">{property.details.bathrooms}</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Square className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900">{property.details.sqft}</div>
                  <div className="text-sm text-gray-600">Sq Ft</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Calendar className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900">{property.details.yearBuilt || 'N/A'}</div>
                  <div className="text-sm text-gray-600">Year Built</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                  Features
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                  Amenities
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Contact Card */}
            <div className="bg-white rounded-2xl p-6 shadow-card sticky top-24">
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                Contact Agent
              </h3>
              
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={property.agent.photo}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{property.agent.name}</div>
                  <div className="text-sm text-gray-600">{property.agent.experience}+ years experience</div>
                  <div className="flex items-center mt-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {property.agent.rating} ({property.agent.reviewCount} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <a
                  href={`tel:${property.agent.phone}`}
                  className="w-full flex items-center justify-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white py-3 px-4 rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <a
                  href={`mailto:${property.agent.email}`}
                  className="w-full flex items-center justify-center space-x-2 border border-primary-500 text-primary-500 hover:bg-primary-50 py-3 px-4 rounded-xl transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                </a>
              </div>

              <div className="text-xs text-gray-500 text-center">
                By contacting, you agree to our Terms of Service
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                Location
              </h3>
              <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-sm">Interactive Map</div>
                  <div className="text-xs">Coming Soon</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <MapPin className="w-4 h-4 inline mr-1" />
                {property.location.address}, {property.location.city}, {property.location.state} {property.location.zipCode}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Gallery Modal */}
      {showFullscreenGallery && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            onClick={() => setShowFullscreenGallery(false)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center z-10"
          >
            ×
          </button>
          
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={currentImage.url}
              alt={currentImage.alt}
              className="max-w-full max-h-full object-contain"
            />
            
            {property.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
