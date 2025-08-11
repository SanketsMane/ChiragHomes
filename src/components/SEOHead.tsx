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
  title = "MakeMyPropertyz - Buy, Sell & Rent Properties in Bangalore | Best Real Estate Deals",
  description = "Find your dream property in Bangalore with MakeMyPropertyz. 1000+ verified listings, expert guidance, and transparent pricing. Buy, sell, or rent apartments, villas & luxury homes.",
  keywords = "property for sale bangalore, buy property bangalore, apartments for sale, real estate bangalore, property dealers, villas for sale",
  canonical,
  ogImage = "https://makemypropertyz.com/images/og-home.jpg",
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
    updateMetaTag('og:site_name', 'MakeMyPropertyz', 'property');
    updateMetaTag('og:locale', 'en_IN', 'property');
    
    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', title, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', ogImage, 'name');
    updateMetaTag('twitter:site', '@MakeMyPropertyz', 'name');
    
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
  "name": "MakeMyPropertyz",
  "description": "Leading real estate platform in Bengaluru offering verified property listings",
  "url": "https://makemypropertyz.com",
  "telephone": "+91-85510-78551",
  "email": "info@makemypropertyz.com",
  "address": {
        "@type": "PostalAddress",
        "streetAddress": "7, Jnanabharathi BDA Layout, Jnana Ganga Nagar",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560056",
        "addressCountry": "IN"
  },
  "areaServed": "Bangalore",
  "priceRange": "₹50L - ₹5Cr",
  "hasCredential": "RERA/KA/RERA/1251/446/AG/010/2024",
  "foundingDate": "2009",
  "numberOfEmployees": "25+",
  "awards": ["Best Real Estate Platform Bangalore 2023", "Customer Choice Award 2022"],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-85510-78551",
      "contactType": "Sales",
      "availableLanguage": ["English", "Hindi", "Kannada", "Tamil", "Telugu"],
      "hoursAvailable": "Mo-Sa 09:00-19:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/MakeMyPropertyz",
    "https://www.instagram.com/makemypropertyz",
    "https://www.linkedin.com/company/makemypropertyz",
    "https://twitter.com/MakeMyPropertyz"
  ]
};

export const propertyListingSchema = (property: any) => ({
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": property.title,
  "description": property.description,
  "url": `https://makemypropertyz.com/properties/${property.id}`,
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
    "addressRegion": "Karnataka",
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
    "name": "MakeMyPropertyz",
    "logo": {
      "@type": "ImageObject",
      "url": "https://makemypropertyz.com/logo.png"
    }
  },
  "datePublished": post.publishedAt,
  "dateModified": post.updatedAt,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://makemypropertyz.com/blog/${post.slug}`
  }
});

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://makemypropertyz.com",
  "name": "MakeMyPropertyz",
  "image": "https://makemypropertyz.com/images/office.jpg",
  "telephone": "+91-85510-78551",
  "email": "info@makemypropertyz.com",
  "address": {
        "@type": "PostalAddress",
        "streetAddress": "7, Jnanabharathi BDA Layout, Jnana Ganga Nagar",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560056",
        "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.946248741414733,
    "longitude": 77.48743389416147
  },
  "url": "https://makemypropertyz.com",
  "priceRange": "₹₹₹",
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
    "ratingValue": "4.8",
    "reviewCount": "247"
  }
};
