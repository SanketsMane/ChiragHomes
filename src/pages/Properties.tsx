import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Grid, List, SlidersHorizontal, MapPin, IndianRupee, Home, Bed } from 'lucide-react';
import { PropertyCard } from '../components/PropertyCard';
import { mockProperties } from '../lib/data';
import type { SearchFilters } from '../types';

export function Properties() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  // Initialize filters from URL params
  const [filters, setFilters] = useState<SearchFilters>({
    location: searchParams.get('location') || '',
    priceMin: searchParams.get('priceMin') ? Number(searchParams.get('priceMin')) : undefined,
    priceMax: searchParams.get('priceMax') ? Number(searchParams.get('priceMax')) : undefined,
    bedrooms: searchParams.get('bedrooms') ? Number(searchParams.get('bedrooms')) : undefined,
    propertyType: searchParams.get('type')?.split(',') || [],
    status: searchParams.get('status')?.split(',') || [],
  });

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    let filtered = mockProperties.filter((property) => {
      // Location filter
      if (filters.location) {
        const searchTerm = filters.location.toLowerCase();
        const matchesLocation = 
          property.location.city.toLowerCase().includes(searchTerm) ||
          property.location.address.toLowerCase().includes(searchTerm);
        if (!matchesLocation) return false;
      }

      // Price filter
      if (filters.priceMin && property.price < filters.priceMin) return false;
      if (filters.priceMax && property.price > filters.priceMax) return false;

      // Bedrooms filter
      if (filters.bedrooms && property.details.bedrooms < filters.bedrooms) return false;

      // Property type filter
      if (filters.propertyType && filters.propertyType.length > 0) {
        if (!filters.propertyType.includes(property.details.propertyType)) return false;
      }

      // Status filter
      if (filters.status && filters.status.length > 0) {
        if (!filters.status.includes(property.details.status)) return false;
      }

      return true;
    });

    // Sort properties
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        default:
          return 0;
      }
    });

    return filtered;
  }, [filters, sortBy]);

  const updateFilters = (newFilters: Partial<SearchFilters>) => {
    const updated = { ...filters, ...newFilters };
    setFilters(updated);

    // Update URL params
    const params = new URLSearchParams();
    if (updated.location) params.set('location', updated.location);
    if (updated.priceMin) params.set('priceMin', updated.priceMin.toString());
    if (updated.priceMax) params.set('priceMax', updated.priceMax.toString());
    if (updated.bedrooms) params.set('bedrooms', updated.bedrooms.toString());
    if (updated.propertyType && updated.propertyType.length > 0) {
      params.set('type', updated.propertyType.join(','));
    }
    if (updated.status && updated.status.length > 0) {
      params.set('status', updated.status.join(','));
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      priceMin: undefined,
      priceMax: undefined,
      bedrooms: undefined,
      propertyType: [],
      status: [],
    });
    setSearchParams({});
  };

  const propertyTypes = [
    { value: 'apartment', label: 'Apartment' },
    { value: 'house', label: 'House' },
    { value: 'condo', label: 'Condo' },
    { value: 'townhouse', label: 'Townhouse' },
  ];

  const statusOptions = [
    { value: 'for-sale', label: 'For Sale' },
    { value: 'for-rent', label: 'For Rent' },
  ];

  const priceRanges = [
    { min: 0, max: 1000000, label: 'Under ₹10 Lakh' },
    { min: 1000000, max: 5000000, label: '₹10L - ₹50L' },
    { min: 5000000, max: 10000000, label: '₹50L - ₹1 Cr' },
    { min: 10000000, max: 20000000, label: '₹1 Cr - ₹2 Cr' },
    { min: 20000000, max: 50000000, label: '₹2 Cr - ₹5 Cr' },
    { min: 50000000, max: Infinity, label: 'Above ₹5 Cr' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white shadow-soft">
        <div className="container-custom py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-2">
                Properties in Bangalore
              </h1>
              <p className="text-lg text-gray-600">
                {filteredProperties.length} properties found
              </p>
            </div>
            
            {/* View Toggle & Sort */}
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow-soft' : 'hover:bg-gray-200'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-white shadow-soft' : 'hover:bg-gray-200'
                  }`}
                  aria-label="List view"
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-xl py-3 px-4 mb-4"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filters</span>
            </button>

            {/* Filters Panel */}
            <div className={`bg-white rounded-2xl p-6 sticky top-24 ${showFilters || 'hidden lg:block'}`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-heading font-semibold text-gray-900">
                  Filters
                </h3>
                <button
                  onClick={clearFilters}
                  className="text-primary-500 hover:text-primary-600 text-sm font-medium"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-6">
                {/* Location Search */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Location
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by area, city, or landmark"
                      value={filters.location}
                      onChange={(e) => updateFilters({ location: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <Home className="w-4 h-4 inline mr-1" />
                    Property Type
                  </label>
                  <div className="space-y-2">
                    {propertyTypes.map((type) => (
                      <label key={type.value} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.propertyType?.includes(type.value) || false}
                          onChange={(e) => {
                            const currentTypes = filters.propertyType || [];
                            const newTypes = e.target.checked
                              ? [...currentTypes, type.value]
                              : currentTypes.filter(t => t !== type.value);
                            updateFilters({ propertyType: newTypes });
                          }}
                          className="w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Status
                  </label>
                  <div className="space-y-2">
                    {statusOptions.map((status) => (
                      <label key={status.value} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.status?.includes(status.value) || false}
                          onChange={(e) => {
                            const currentStatus = filters.status || [];
                            const newStatus = e.target.checked
                              ? [...currentStatus, status.value]
                              : currentStatus.filter(s => s !== status.value);
                            updateFilters({ status: newStatus });
                          }}
                          className="w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{status.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <IndianRupee className="w-4 h-4 inline mr-1" />
                    Price Range
                  </label>
                  <div className="space-y-2">
                    {priceRanges.map((range, index) => (
                      <label key={index} className="flex items-center">
                        <input
                          type="radio"
                          name="priceRange"
                          checked={
                            filters.priceMin === range.min && 
                            (range.max === Infinity ? !filters.priceMax : filters.priceMax === range.max)
                          }
                          onChange={() => {
                            updateFilters({
                              priceMin: range.min,
                              priceMax: range.max === Infinity ? undefined : range.max,
                            });
                          }}
                          className="w-4 h-4 text-primary-500 border-gray-300 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <Bed className="w-4 h-4 inline mr-1" />
                    Bedrooms
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((beds) => (
                      <button
                        key={beds}
                        onClick={() => updateFilters({ bedrooms: beds === filters.bedrooms ? undefined : beds })}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                          filters.bedrooms === beds
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {beds}+
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Properties Grid/List */}
          <div className="flex-1">
            {filteredProperties.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                  No properties found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search criteria or filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                  : 'space-y-6'
              }>
                {filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    featured={property.featured}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
