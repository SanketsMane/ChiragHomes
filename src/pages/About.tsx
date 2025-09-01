import { Target, Award, TrendingUp, Shield, Heart, Phone, Mail, Sparkles, ArrowRight, MapPin, Building, Star, Quote } from 'lucide-react'; export function About() {
  const stats = [{ number: '100+', label: 'Properties Sold', icon: TrendingUp, color: 'from-blue-500 to-blue-600' }, { number: '200+', label: 'Happy Clients', icon: Heart, color: 'from-pink-500 to-red-500' }, { number: '1+', label: 'Years Experience', icon: Award, color: 'from-yellow-500 to-orange-500' }, { number: '50+', label: 'Areas Covered', icon: MapPin, color: 'from-green-500 to-emerald-500' }]; const values = [{ icon: Shield, title: 'Trust & Transparency', description: 'We believe in complete transparency in all our dealings, ensuring our clients have all the information they need to make informed decisions.', color: 'from-blue-500 to-blue-600' }, { icon: Heart, title: 'Customer First', description: 'Our customers are at the heart of everything we do. We go above and beyond to exceed their expectations and build lasting relationships.', color: 'from-pink-500 to-red-500' }, { icon: Target, title: 'Excellence', description: 'We strive for excellence in every aspect of our service, from property selection to after-sales support and customer service.', color: 'from-purple-500 to-purple-600' }, { icon: TrendingUp, title: 'Innovation', description: 'We leverage the latest technology and innovative approaches to make property buying and selling more efficient and enjoyable.', color: 'from-green-500 to-emerald-500' }]; const achievements = [
    { year: '2024', milestone: 'Company Founded', description: 'Started with a vision to transform real estate' },
    { year: '2024', milestone: 'First 10 Properties', description: 'Reached our first milestone in record time' },
    { year: '2025', milestone: 'Digital Platform Launch', description: 'Launched our online platform for seamless property search' },
    { year: '2025', milestone: '100+ Happy Clients', description: 'Helped 100+ clients find their dream homes' }
  ]; return (<div className="min-h-screen bg-white">      {/* Modern Hero Section */}            {/* Modern Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-12 lg:py-16 overflow-hidden">        {/* Background Elements */}        <div className="absolute inset-0">          <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>          <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary-300/20 rounded-full blur-3xl"></div>          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-200/10 rounded-full blur-2xl"></div>        </div>        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">          <div className="text-center max-w-4xl mx-auto">            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">              <Building className="w-8 h-8 text-white" />            </div>                        <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent">              About ChiragHomes            </h1>                        <p className="text-lg lg:text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed">              Your trusted partner in finding the perfect property. Founded in 2024, we are committed to innovation, transparency, and excellence.            </p>          </div>        </div>      </section>      {/* Enhanced Stats Section */}      <section className="py-20 bg-gray-50 relative">        <div className="container mx-auto px-4 sm:px-6 lg:px-8">          <div className="text-center mb-16">            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-6">              <Star className="w-8 h-8 text-white" />            </div>            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">              Our Achievements            </h2>            <p className="text-xl text-gray-600 max-w-3xl mx-auto">              Numbers that speak for our commitment to excellence and customer satisfaction            </p>          </div>          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">            {stats.map((stat, index) => (<div key={index} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"              >                {/* Gradient Background */}                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>                                <div className="relative z-10 text-center">                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg`}>                    <stat.icon className="w-8 h-8 text-white" />                  </div>                                    <div className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-3">                    {stat.number}                  </div>                                    <div className="text-gray-600 font-medium text-lg">                    {stat.label}                  </div>                </div>              </div>))}          </div>        </div>      </section>      {/* Mission & Vision Section */}      <section className="py-20 bg-white">        <div className="container mx-auto px-4 sm:px-6 lg:px-8">          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">            <div className="order-2 lg:order-1">              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-6">                <Target className="w-8 h-8 text-white" />              </div>                            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">                Our Mission              </h2>                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">                To revolutionize the real estate experience by providing transparent,                 technology-driven solutions that make property buying and selling                 accessible, efficient, and stress-free for everyone.              </p>                            <p className="text-gray-600 mb-8 leading-relaxed">                We believe that finding the perfect property should be an exciting journey,                 not a stressful ordeal. That's why we've built our entire business around
    putting our clients first and ensuring they have all the tools and
    support they need to make the best decisions.              </p>            </div>                        <div className="order-1 lg:order-2">              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 lg:p-12">                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-6">                  <Sparkles className="w-8 h-8 text-white" />                </div>                                <h3 className="text-3xl font-heading font-bold text-gray-900 mb-6">                  Our Vision                </h3>                                <p className="text-gray-600 mb-6 leading-relaxed">                  To be India's most trusted and innovative real estate platform,                   where every property transaction is transparent, efficient, and                   customer-centric.                </p>                                <div className="bg-primary-500 text-white rounded-2xl p-6">                  <div className="grid grid-cols-2 gap-4">                    <div>                      <div className="text-primary-200 text-sm font-medium mb-1">Founded</div>                      <div className="text-2xl font-bold">2024</div>                    </div>                    <div>                      <div className="text-primary-200 text-sm font-medium mb-1">Location</div>                      <div className="text-lg font-semibold">Goa</div>                    </div>                  </div>                </div>              </div>            </div>          </div>        </div>      </section>      {/* Values Section */}      <section className="py-20 bg-gray-50">        <div className="container mx-auto px-4 sm:px-6 lg:px-8">          <div className="text-center mb-16">            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-6">              <Heart className="w-8 h-8 text-white" />            </div>            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">              Our Core Values            </h2>            <p className="text-xl text-gray-600 max-w-3xl mx-auto">              These fundamental principles guide everything we do and shape the way we serve our clients            </p>          </div>          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">            {values.map((value, index) => (<div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"              >                {/* Gradient Background */}                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>                                <div className="relative z-10 text-center">                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg`}>                    <value.icon className="w-8 h-8 text-white" />                  </div>                                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">                    {value.title}                  </h3>                                    <p className="text-gray-600 leading-relaxed">                    {value.description}                  </p>                </div>              </div>))}          </div>        </div>      </section>

    {/* Timeline Section */}
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a small startup to Goa's leading real estate platform - our milestones tell our story
          </p>
        </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>

            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="text-3xl font-heading font-bold text-primary-500 mb-2">
                      {achievement.year}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                      {achievement.milestone}
                    </h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-primary-500 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-8">
              <Quote className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6">
              Ready to Work
              <span className="block text-primary-100">With the Best?</span>
            </h2>

          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Experience the difference that our innovative, customer-first approach can make in your property journey.
          </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-white text-primary-600 hover:bg-gray-50 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-3">
                <Phone className="w-6 h-6" />
                <span>Start Your Journey</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="group border-2 border-white/30 text-white hover:bg-white hover:text-primary-600 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3">
                <MapPin className="w-6 h-6" />
                <span>Visit Our Office</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-semibold">Call Us</div>
                <div className="text-primary-100">+91 9740207010</div>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-semibold">Email Us</div>
                <div className="text-primary-100">Muralimohanhj32100@gmail.com</div>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-semibold">Visit Us</div>
                <div className="text-primary-100">
                  7, Jnanabharathi BDA Layout, Jnana Ganga Nagar, Goa, Karnataka 560056
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

