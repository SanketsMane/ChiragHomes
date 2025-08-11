import { useState } from 'react';
import { Search, MapPin, Home, DollarSign, Bed } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchFormData {
  location: string;
  propertyType: string;
  priceRange: string;
  bedrooms: string;
}

export function Hero() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState<SearchFormData>({
    location: '',
    propertyType: '',
    priceRange: '',
    bedrooms: '',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build search params
    const params = new URLSearchParams();
    if (searchData.location) params.set('location', searchData.location);
    if (searchData.propertyType) params.set('type', searchData.propertyType);
    if (searchData.priceRange) params.set('price', searchData.priceRange);
    if (searchData.bedrooms) params.set('bedrooms', searchData.bedrooms);
    
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop')`
        }}
      />
      
      <div className="relative z-10 container-custom text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Find Your Perfect
            <span className="text-primary-500"> Dream Home</span>
            <br />
            in Bengaluru
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl">
            Discover premium properties with the best amenities and locations. 
            Your journey to homeownership starts here.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="bg-white p-6 rounded-2xl shadow-card max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Location */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Search by city, area, or landmark"
                  value={searchData.location}
                  onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Home className="w-4 h-4 inline mr-1" />
                  Property Type
                </label>
                <select
                  value={searchData.propertyType}
                  onChange={(e) => setSearchData({ ...searchData, propertyType: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">All Types</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="townhouse">Townhouse</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <DollarSign className="w-4 h-4 inline mr-1" />
                  Budget
                </label>
                <select
                  value={searchData.priceRange}
                  onChange={(e) => setSearchData({ ...searchData, priceRange: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Any Budget</option>
                  <option value="0-10000000">Under ₹1 Cr</option>
                  <option value="10000000-20000000">₹1-2 Cr</option>
                  <option value="20000000-50000000">₹2-5 Cr</option>
                  <option value="50000000+">Above ₹5 Cr</option>
                </select>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Bed className="w-4 h-4 inline mr-1" />
                  Bedrooms
                </label>
                <select
                  value={searchData.bedrooms}
                  onChange={(e) => setSearchData({ ...searchData, bedrooms: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Any</option>
                  <option value="1">1 BHK</option>
                  <option value="2">2 BHK</option>
                  <option value="3">3 BHK</option>
                  <option value="4">4+ BHK</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="group w-full mt-6 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <Search className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              <span>Search Properties</span>
            </button>
          </form>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            <div className="text-center text-white">
              <div className="text-2xl lg:text-3xl font-heading font-bold text-primary-500">
                1000+
              </div>
              <div className="text-sm lg:text-base text-gray-200">
                Properties Listed
              </div>
            </div>
            <div className="text-center text-white">
              <div className="text-2xl lg:text-3xl font-heading font-bold text-primary-500">
                500+
              </div>
              <div className="text-sm lg:text-base text-gray-200">
                Happy Families
              </div>
            </div>
            <div className="text-center text-white">
              <div className="text-2xl lg:text-3xl font-heading font-bold text-primary-500">
                25+
              </div>
              <div className="text-sm lg:text-base text-gray-200">
                Areas Covered
              </div>
            </div>
            <div className="text-center text-white">
              <div className="text-2xl lg:text-3xl font-heading font-bold text-primary-500">
                15+
              </div>
              <div className="text-sm lg:text-base text-gray-200">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
