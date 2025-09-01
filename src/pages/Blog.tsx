import { useState } from 'react';
import { Calendar, User, Tag, Clock, ArrowRight, Search } from 'lucide-react';

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Real Estate Investment Tips for 2024',
    excerpt: 'Discover the latest trends and strategies for making smart real estate investments in today\'s market.',
    content: 'Real estate investment continues to be one of the most reliable ways to build wealth...',
    author: 'Rajesh Kumar',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'Investment',
    tags: ['Investment', 'Tips', 'Market Trends'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop&crop=center',
    featured: true
  },
  {
    id: 2,
    title: 'Goa\'s Emerging Neighborhoods to Watch',
    excerpt: 'Explore up-and-coming areas in Goa that offer great potential for homebuyers and investors.',
    content: 'Goa continues to evolve as India\'s tourism capital...',
    author: 'Priya Sharma',
    publishDate: '2024-01-12',
    readTime: '6 min read',
    category: 'Location Guide',
    tags: ['Goa', 'Neighborhoods', 'Market Analysis'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop&crop=center',
    featured: false
  },
  {
    id: 3,
    title: 'Home Buying Checklist: What First-Time Buyers Need to Know',
    excerpt: 'A comprehensive guide for first-time home buyers navigating the property purchase process.',
    content: 'Buying your first home is an exciting milestone...',
    author: 'Amit Patel',
    publishDate: '2024-01-10',
    readTime: '10 min read',
    category: 'Home Buying',
    tags: ['First-time Buyers', 'Checklist', 'Guide'],
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=400&fit=crop&crop=center',
    featured: false
  },
  {
    id: 4,
    title: 'Understanding Property Valuation: A Complete Guide',
    excerpt: 'Learn how property valuation works and what factors influence the value of your real estate.',
    content: 'Property valuation is a critical aspect of real estate...',
    author: 'Sneha Reddy',
    publishDate: '2024-01-08',
    readTime: '7 min read',
    category: 'Education',
    tags: ['Valuation', 'Education', 'Property Value'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop&crop=center',
    featured: false
  },
  {
    id: 5,
    title: 'Market Report: Q4 2023 Real Estate Trends',
    excerpt: 'Comprehensive analysis of real estate market performance and trends in the fourth quarter of 2023.',
    content: 'The final quarter of 2023 showed interesting developments...',
    author: 'Rajesh Kumar',
    publishDate: '2024-01-05',
    readTime: '12 min read',
    category: 'Market Report',
    tags: ['Market Report', 'Trends', 'Analysis'],
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=800&h=400&fit=crop&crop=center',
    featured: true
  },
  {
    id: 6,
    title: 'Sustainable Housing: Green Building Features to Look For',
    excerpt: 'Discover eco-friendly features that make properties more sustainable and cost-effective.',
    content: 'Sustainable housing is becoming increasingly important...',
    author: 'Priya Sharma',
    publishDate: '2024-01-03',
    readTime: '5 min read',
    category: 'Sustainability',
    tags: ['Green Building', 'Sustainability', 'Eco-friendly'],
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=400&fit=crop&crop=center',
    featured: false
  }
];

const categories = [
  'All Categories',
  'Investment',
  'Location Guide',
  'Home Buying',
  'Education',
  'Market Report',
  'Sustainability'
];

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All Categories' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary-500 text-white py-16 lg:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Real Estate Insights
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Stay informed with the latest trends, tips, and insights from the real estate world.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">
                Featured Article
              </h2>
              <p className="text-gray-600">Our latest insights and analysis</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="bg-gray-200 h-64 lg:h-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{featuredPost.author}</span>
                    </div>
                    <button className="text-primary-500 font-medium flex items-center space-x-1 hover:text-primary-600">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-48">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span className="text-xs">{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <User className="w-3 h-3 text-gray-400" />
                    <span className="text-gray-600">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-gray-100 text-gray-600"
                      >
                        <Tag className="w-2 h-2 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="mt-4 w-full text-primary-500 font-medium flex items-center justify-center space-x-1 hover:text-primary-600 transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-primary-500 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-heading font-bold mb-4">
            Stay Updated with Real Estate Insights
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest real estate trends, 
            market analysis, and investment tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-primary-500 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
