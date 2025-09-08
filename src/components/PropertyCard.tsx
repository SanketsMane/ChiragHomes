import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Property } from '../types';
import { formatPrice, getImageUrl } from '../lib/utils';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

export function PropertyCard({ property, featured = false }: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = property.images;
  
  // Auto-slide images
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 3 seconds
      
      return () => clearInterval(interval);
    }
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  const prevImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  const currentImage = images[currentImageIndex];
  const statusColor = 'bg-green-500';
  const statusText = 'Available for Rent';

  return (
    <div className={`bg-white rounded-xl lg:rounded-2xl shadow-card border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${featured ? 'ring-2 ring-primary-500' : ''}`}>
      {/* Image Carousel */}
      <div className="relative overflow-hidden">
        <Link to={`/properties/${property.id}`}>
          <img
            src={getImageUrl(currentImage?.url, 600, 400)}
            alt={currentImage?.alt || property.title}
            className="w-full h-40 sm:h-48 lg:h-56 xl:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </Link>
        
        {/* Image Navigation - only show if multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            
            {/* Image Indicators */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
        
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
            <span className="text-xs sm:text-sm text-gray-500 font-normal">/night</span>
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
      </div>
    </div>
  );
}
