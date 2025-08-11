export interface PropertySchema {
  id: string;
  name: string;
  description: string;
  price: number;
  priceCurrency: string;
  propertyType: 'apartment' | 'villa' | 'penthouse' | 'house';
  bedrooms: number;
  bathrooms: number;
  floorSize: number;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  images: string[];
  amenities: string[];
  yearBuilt?: number;
  datePosted: string;
  availabilityDate?: string;
  status: 'for-sale' | 'for-rent' | 'sold' | 'rented';
  agent?: {
    name: string;
    telephone: string;
    email: string;
  };
}

export const generatePropertySchema = (property: PropertySchema) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateProperty',
    '@id': `https://makemypropertyz.com/properties/${property.id}`,
    name: property.name,
    description: property.description,
    url: `https://makemypropertyz.com/properties/${property.id}`,
    image: property.images,
    offers: {
      '@type': property.status === 'for-sale' ? 'Offer' : 'Lease',
      price: property.price,
      priceCurrency: property.priceCurrency,
      availability: 'https://schema.org/InStock',
      validFrom: property.datePosted,
      ...(property.availabilityDate && { validThrough: property.availabilityDate }),
      seller: {
        '@type': 'Organization',
        name: 'MakeMyPropertyz',
        url: 'https://makemypropertyz.com',
        logo: 'https://makemypropertyz.com/images/logo.png',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-85510-78551',
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['en', 'hi', 'kn']
        }
      },
      ...(property.agent && {
        broker: {
          '@type': 'Person',
          name: property.agent.name,
          telephone: property.agent.telephone,
          email: property.agent.email
        }
      })
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address.streetAddress,
      addressLocality: property.address.addressLocality,
      addressRegion: property.address.addressRegion,
      postalCode: property.address.postalCode,
      addressCountry: property.address.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: property.geo.latitude,
      longitude: property.geo.longitude
    },
    floorSize: {
      '@type': 'QuantitativeValue',
      value: property.floorSize,
      unitCode: 'SQM'
    },
    numberOfRooms: property.bedrooms,
    numberOfBedrooms: property.bedrooms,
    numberOfBathroomsTotal: property.bathrooms,
    ...(property.yearBuilt && { yearBuilt: property.yearBuilt }),
    datePosted: property.datePosted,
    category: property.propertyType,
    amenityFeature: property.amenities.map(amenity => ({
      '@type': 'LocationFeatureSpecification',
      name: amenity
    })),
    additionalType: `https://schema.org/${property.propertyType === 'apartment' ? 'Apartment' : 'House'}`,
    potentialAction: {
      '@type': 'ViewAction',
      url: `https://makemypropertyz.com/properties/${property.id}`,
      name: `View ${property.name}`
    }
  };
};

export const generatePropertyListingSchema = (properties: PropertySchema[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': 'https://makemypropertyz.com/properties',
    name: 'Property Listings - MakeMyPropertyz',
    description: 'Browse premium real estate properties in Bangalore',
    url: 'https://makemypropertyz.com/properties',
    numberOfItems: properties.length,
    itemListElement: properties.map((property, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: generatePropertySchema(property)
    }))
  };
};

export const generateSearchResultsSchema = (
  searchQuery: string,
  results: PropertySchema[],
  totalResults: number
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'SearchResultsPage',
    '@id': `https://makemypropertyz.com/properties?search=${encodeURIComponent(searchQuery)}`,
    name: `Search Results for "${searchQuery}" - MakeMyPropertyz`,
    description: `Found ${totalResults} properties matching "${searchQuery}" in Bangalore`,
    url: `https://makemypropertyz.com/properties?search=${encodeURIComponent(searchQuery)}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: totalResults,
      itemListElement: results.map((property, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: generatePropertySchema(property)
      }))
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://makemypropertyz.com/properties?search={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };
};

export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
};

export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': 'https://makemypropertyz.com/#organization',
    name: 'MakeMyPropertyz',
    alternateName: 'Make My Propertyz',
    description: 'Premium real estate services in Bangalore - Find your dream property with expert guidance and trusted services.',
    url: 'https://makemypropertyz.com',
    logo: 'https://makemypropertyz.com/images/logo.png',
    image: 'https://makemypropertyz.com/images/office.jpg',
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      name: 'Sanket Patil'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'MG Road',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560001',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.9716,
      longitude: 77.5946
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-85510-78551',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi', 'kn'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00'
      }
    },
    sameAs: [
      'https://www.facebook.com/makemypropertyz',
      'https://www.instagram.com/makemypropertyz',
      'https://www.linkedin.com/company/makemypropertyz',
      'https://twitter.com/makemypropertyz'
    ],
    serviceArea: {
      '@type': 'City',
      name: 'Bangalore',
      sameAs: 'https://en.wikipedia.org/wiki/Bangalore'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Property Buying Assistance',
            description: 'Expert guidance for property purchase'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Property Selling Services',
            description: 'Professional property selling support'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Rental Property Management',
            description: 'Complete rental property solutions'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.8,
      reviewCount: 150,
      bestRating: 5,
      worstRating: 1
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Priya Sharma'
        },
        datePublished: '2024-12-15',
        reviewBody: 'Excellent service! Found my dream apartment in Koramangala within 2 weeks.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
          bestRating: 5
        }
      }
    ]
  };
};
