export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    latitude?: number;
    longitude?: number;
  };
  details: {
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    lotSize?: number;
    yearBuilt?: number;
    propertyType: 'house' | 'apartment' | 'condo' | 'townhouse' | 'land' | 'room' | 'villa';
    status: 'for-sale' | 'for-rent' | 'sold' | 'rented';
  };
  features: string[];
  amenities: string[];
  images: PropertyImage[];
  agent: Agent;
  featured?: boolean;
  virtualTour?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PropertyImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  isPrimary: boolean;
  order: number;
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  bio: string;
  specialties: string[];
  experience: number;
  rating: number;
  reviewCount: number;
}

export interface SearchFilters {
  location?: string;
  priceMin?: number;
  priceMax?: number;
  bedrooms?: number;
  bathrooms?: number;
  propertyType?: string[];
  status?: string[];
  features?: string[];
  sqftMin?: number;
  sqftMax?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    photo: string;
    bio: string;
  };
  tags: string[];
  image: string;
  publishedAt: string;
  updatedAt: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  propertyId?: string;
  preferredContact: 'email' | 'phone';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  photo: string;
  rating: number;
  text: string;
  date: string;
}
