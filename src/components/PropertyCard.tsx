import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Heart, Phone, Mail } from 'lucide-react';
import type { Property } from '../types';
import { formatPrice, getImageUrl } from '../lib/utils';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

export function PropertyCard({ property, featured = false }: PropertyCardProps) {
  const primaryImage = property.images.find(img => img.isPrimary) || property.images[0];
  const statusColor = property.details.status === 'for-sale' ? 'bg-green-500' : 'bg-blue-500';
  const statusText = property.details.status === 'for-sale' ? 'For Sale' : 'For Rent';

  return (
    <div className={`bg-white rounded-xl lg:rounded-2xl shadow-card border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${featured ? 'ring-2 ring-primary-500' : ''}`}>
      {/* Image */}
      <div className="relative overflow-hidden">
        <Link to={`/properties/${property.id}`}>
          <img
            src={getImageUrl(primaryImage?.url, 600, 400)}
            alt={primaryImage?.alt || property.title}
            className="w-full h-40 sm:h-48 lg:h-56 xl:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </Link>
        
        {/* Status Badge */}
        <div className={`absolute top-2 sm:top-4 left-2 sm:left-4 ${statusColor} text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium`}>
          {statusText}
        </div>
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-primary-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
            Featured
          </div>
        )}
        
        {/* Like Button */}
        <button 
          className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-soft transition-all duration-200 hover:scale-110"
          aria-label="Add to favorites"
        >
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-primary-500" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 lg:p-6">
        {/* Price */}
        <div className="mb-2 sm:mb-3">
          <div className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-primary-500">
            {formatPrice(property.price)}
            {property.details.status === 'for-rent' && (
              <span className="text-xs sm:text-sm text-gray-500 font-normal">/month</span>
            )}
          </div>
        </div>

        {/* Title */}
        <Link to={`/properties/${property.id}`}>
          <h3 className="text-base sm:text-lg font-heading font-semibold text-gray-900 mb-2 hover:text-primary-500 transition-colors duration-200 line-clamp-2 leading-tight">
            {property.title}
          </h3>
        </Link>

        {/* Location */}
        <div className="flex items-start text-gray-600 mb-3 sm:mb-4">
          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm line-clamp-2 leading-relaxed">
            {property.location.address}, {property.location.city}
          </span>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between text-gray-600 mb-4 sm:mb-6">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="flex items-center">
              <Bed className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span className="text-xs sm:text-sm font-medium">{property.details.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span className="text-xs sm:text-sm font-medium">{property.details.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Square className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              <span className="text-xs sm:text-sm font-medium">{property.details.sqft} sqft</span>
            </div>
          </div>
        </div>

        {/* Agent Info */}
        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img
              src={property.agent.photo}
              alt={property.agent.name}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-gray-100"
            />
            <div>
              <div className="font-medium text-gray-900 text-xs sm:text-sm">
                {property.agent.name}
              </div>
              <div className="text-xs text-gray-500">
                {property.agent.experience}+ years exp.
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 sm:space-x-2">
            <a
              href={`tel:${property.agent.phone}`}
              className="w-7 h-7 sm:w-8 sm:h-8 bg-primary-50 hover:bg-primary-100 text-primary-500 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Call agent"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
            <a
              href={`mailto:${property.agent.email}`}
              className="w-7 h-7 sm:w-8 sm:h-8 bg-primary-50 hover:bg-primary-100 text-primary-500 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Email agent"
            >
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
