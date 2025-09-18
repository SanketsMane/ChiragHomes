import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object;
  noindex?: boolean;
}

export function SEOHead({
  title = "ChiragHomes - #1 Real Estate Company in Goa | Buy, Sell & Rent Properties",
  description = "ChiragHomes - Leading real estate company in Goa. Find premium properties in North Goa, South Goa. Apartments, villas, plots for sale & rent. Expert property consultants. Call +91 9740207010",
  keywords = "real estate goa, property in goa, buy property goa, apartment for sale goa, villas goa, plots goa, north goa properties, south goa real estate, goa property dealers, calangute properties, baga properties, anjuna real estate, panjim properties, margao real estate, ChiragHomes goa, property consultant goa, RERA approved properties goa",
  canonical,
  ogImage = "https://www.chiraghomes.in/images/og-goa-properties.jpg",
  ogType = "website",
  schema,
  noindex = false
}: SEOProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:type', ogType, 'property');
    updateMetaTag('og:site_name', 'ChiragHomes', 'property');
    updateMetaTag('og:locale', 'en_IN', 'property');
    
    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', title, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', ogImage, 'name');
    updateMetaTag('twitter:site', '@ChiragHomes', 'name');
    
    // Add canonical link if provided
    if (canonical) {
      updateCanonicalLink(canonical);
    }
    
    // Add schema if provided
    if (schema) {
      updateSchemaScript(schema);
    }
    
    // Update robots meta
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow');
    }
    
  }, [title, description, keywords, canonical, ogImage, ogType, schema, noindex]);

  return null;
}

// Helper functions
function updateMetaTag(name: string, content: string, attribute: string = 'name') {
  const selector = `meta[${attribute}="${name}"]`;
  let element = document.querySelector(selector) as HTMLMetaElement;
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}

function updateCanonicalLink(href: string) {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  
  canonical.setAttribute('href', href);
}

function updateSchemaScript(schema: object) {
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }
  
  const script = document.createElement('script');
  script.setAttribute('type', 'application/ld+json');
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

// Predefined schemas for common pages
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "ChiragHomes",
  "description": "Leading real estate company in Goa offering premium residential and commercial properties in North Goa and South Goa",
  "url": "https://www.chiraghomes.in",
  "telephone": "+91 9740207010",
  "email": "chirraghomes@gmail.com",
  "address": {
        "@type": "PostalAddress",
        "streetAddress": "H.No. 5/59, Maddowaddo, VTC: Calangute",
        "addressLocality": "Calangute",
        "addressRegion": "North Goa",
        "postalCode": "403516",
        "addressCountry": "IN"
  },
  "areaServed": [
    {
      "@type": "Place",
      "name": "North Goa",
      "containedInPlace": {
        "@type": "Place",
        "name": "Goa, India"
      }
    },
    {
      "@type": "Place", 
      "name": "South Goa",
      "containedInPlace": {
        "@type": "Place",
        "name": "Goa, India"
      }
    }
  ],
  "priceRange": "₹50L - ₹10Cr",
  "hasCredential": "RERA/GA/RERA/1251/446/AG/010/2024",
  "foundingDate": "2020",
  "numberOfEmployees": "25+",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91 9740207010",
      "contactType": "Sales",
      "availableLanguage": ["English", "Hindi", "Marathi", "Konkani"],
      "hoursAvailable": "Mo-Sa 09:00-19:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/ChiragHomes",
    "https://www.instagram.com/ChiragHomes",
    "https://www.linkedin.com/company/ChiragHomes",
    "https://twitter.com/ChiragHomes"
  ]
};

export const propertyListingSchema = (property: any) => ({
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": property.title,
  "description": property.description,
  "url": `https://www.chiraghomes.in/properties/${property.id}`,
  "price": property.price,
  "priceCurrency": "INR",
  "floorSize": `${property.details.sqft} sq ft`,
  "numberOfRooms": property.details.bedrooms,
  "numberOfBathrooms": property.details.bathrooms,
  "yearBuilt": property.details.yearBuilt,
  "datePosted": property.createdAt,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": property.location.address,
    "addressLocality": property.location.area,
    "addressRegion": "Goa",
    "postalCode": property.location.zipCode,
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": property.location.coordinates?.lat,
    "longitude": property.location.coordinates?.lng
  },
  "image": property.images[0]?.url,
  "amenityFeature": property.amenities.map((amenity: string) => ({
    "@type": "LocationFeatureSpecification",
    "name": amenity
  })),
  "agent": {
    "@type": "RealEstateAgent",
    "name": property.agent.name,
    "telephone": property.agent.phone,
    "email": property.agent.email
  }
});

export const blogPostSchema = (post: any) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.title,
  "description": post.excerpt,
  "image": post.image,
  "author": {
    "@type": "Person",
    "name": post.author.name
  },
  "publisher": {
    "@type": "Organization",
    "name": "ChiragHomes",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.chiraghomes.in/chirag-homes-logo.png"
    }
  },
  "datePublished": post.publishedAt,
  "dateModified": post.updatedAt,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://www.chiraghomes.in/blog/${post.slug}`
  }
});

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.chiraghomes.in",
  "name": "ChiragHomes",
  "image": "https://www.chiraghomes.in/images/office-calangute.jpg",
  "telephone": "+91 9740207010",
  "email": "chirraghomes@gmail.com",
  "address": {
        "@type": "PostalAddress",
        "streetAddress": "H.No. 5/59, Maddowaddo, VTC: Calangute",
        "addressLocality": "Calangute",
        "addressRegion": "North Goa",
        "postalCode": "403516",
        "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 15.5530,
    "longitude": 73.7672
  },
  "url": "https://www.chiraghomes.in",
  "priceRange": "₹₹₹₹",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "350"
  }
};
