import { Users, Target, Award, TrendingUp, Shield, Heart, Phone, Mail, Linkedin, Sparkles, ArrowRight, MapPin, Building, Star, Quote } from 'lucide-react'; export function About() {
  const stats = [{ number: '500+', label: 'Properties Sold', icon: TrendingUp, color: 'from-blue-500 to-blue-600' }, { number: '1000+', label: 'Happy Clients', icon: Heart, color: 'from-pink-500 to-red-500' }, { number: '15+', label: 'Years Experience', icon: Award, color: 'from-yellow-500 to-orange-500' }, { number: '25+', label: 'Team Members', icon: Users, color: 'from-green-500 to-emerald-500' },]; const team = [{ name: 'Rajesh Kumar', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=center&q=90', description: 'With over 15 years in real estate, Rajesh founded MakeMyPropertyz with a vision to make property buying transparent and hassle-free.', contact: { email: 'rajesh@makemypropertyz.com', phone: '+91 98765 43210', linkedin: '#' }, specialties: ['Luxury Properties', 'Investment Advisory', 'Market Analysis'] }, { name: 'Priya Sharma', role: 'Head of Sales', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&q=90', description: 'Priya leads our sales team with expertise in luxury residential properties and investment opportunities across Bengaluru.', contact: { email: 'priya@makemypropertyz.com', phone: '+91 98765 43211', linkedin: '#' }, specialties: ['Residential Sales', 'Client Relations', 'Luxury Markets'] }, { name: 'Amit Patel', role: 'Property Consultant', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center&q=90', description: 'Amit specializes in commercial real estate and has helped numerous businesses find their perfect office spaces.', contact: { email: 'amit@makemypropertyz.com', phone: '+91 98765 43212', linkedin: '#' }, specialties: ['Commercial Real Estate', 'Office Spaces', 'Investment Properties'] }, { name: 'Sneha Reddy', role: 'Marketing Director', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=center&q=90', description: 'Sneha drives our digital marketing initiatives and ensures our properties reach the right audience at the right time.', contact: { email: 'sneha@makemypropertyz.com', phone: '+91 98765 43213', linkedin: '#' }, specialties: ['Digital Marketing', 'Brand Strategy', 'Market Research'] }]; const values = [{ icon: Shield, title: 'Trust & Transparency', description: 'We believe in complete transparency in all our dealings, ensuring our clients have all the information they need to make informed decisions.', color: 'from-blue-500 to-blue-600' }, { icon: Heart, title: 'Customer First', description: 'Our customers are at the heart of everything we do. We go above and beyond to exceed their expectations and build lasting relationships.', color: 'from-pink-500 to-red-500' }, { icon: Target, title: 'Excellence', description: 'We strive for excellence in every aspect of our service, from property selection to after-sales support and customer service.', color: 'from-purple-500 to-purple-600' }, { icon: TrendingUp, title: 'Innovation', description: 'We leverage the latest technology and innovative approaches to make property buying and selling more efficient and enjoyable.', color: 'from-green-500 to-emerald-500' }]; const achievements = [{ year: '2009', milestone: 'Company Founded', description: 'Started with a vision to transform real estate' }, { year: '2012', milestone: 'First 100 Properties', description: 'Reached our first major milestone' }, { year: '2015', milestone: 'Digital Transformation', description: 'Launched our online platform' }, { year: '2018', milestone: '500+ Happy Families', description: 'Helped 500 families find their dream homes' }, { year: '2021', milestone: 'Market Leader', description: 'Became the leading real estate platform in Bengaluru' }, { year: '2024', milestone: '1000+ Properties', description: 'Crossed 1000 successful property transactions' }]; return (<div className="min-h-screen bg-white">      {/* Modern Hero Section */}      <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-20 lg:py-32 overflow-hidden">        {/* Background Elements */}        <div className="absolute inset-0">          <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>          <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary-300/20 rounded-full blur-3xl"></div>          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-200/10 rounded-full blur-2xl"></div>        </div>        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">          <div className="text-center max-w-4xl mx-auto">            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-8">              <Building className="w-10 h-10 text-white" />            </div>                        <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent">              About MakeMyPropertyz            </h1>                        <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">              Your trusted partner in finding the perfect property. We've been making dreams come true for over 15 years with innovation, transparency, and unwavering commitment to excellence.            </p>            {/* Call to Action */}            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">              <button className="group bg-white text-primary-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-2">                <Phone className="w-5 h-5" />                <span>Get in Touch</span>                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />              </button>            </div>          </div>        </div>      </section>      {/* Enhanced Stats Section */}      <section className="py-20 bg-gray-50 relative">        <div className="container mx-auto px-4 sm:px-6 lg:px-8">          <div className="text-center mb-16">            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-6">              <Star className="w-8 h-8 text-white" />            </div>            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">              Our Achievements            </h2>            <p className="text-xl text-gray-600 max-w-3xl mx-auto">              Numbers that speak for our commitment to excellence and customer satisfaction            </p>          </div>          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">            {stats.map((stat, index) => (<div key={index} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"              >                {/* Gradient Background */}                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>                                <div className="relative z-10 text-center">                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg`}>                    <stat.icon className="w-8 h-8 text-white" />                  </div>                                    <div className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-3">                    {stat.number}                  </div>                                    <div className="text-gray-600 font-medium text-lg">                    {stat.label}                  </div>                </div>              </div>))}          </div>        </div>      </section>      {/* Mission & Vision Section */}      <section className="py-20 bg-white">        <div className="container mx-auto px-4 sm:px-6 lg:px-8">          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">            <div className="order-2 lg:order-1">              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-6">                <Target className="w-8 h-8 text-white" />              </div>                            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">                Our Mission              </h2>                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">                To revolutionize the real estate experience by providing transparent,                 technology-driven solutions that make property buying and selling                 accessible, efficient, and stress-free for everyone.              </p>                            <p className="text-gray-600 mb-8 leading-relaxed">                We believe that finding the perfect property should be an exciting journey,                 not a stressful ordeal. That's why we've built our entire business around
    putting our clients first and ensuring they have all the tools and
    support they need to make the best decisions.              </p>              <div className="flex items-center space-x-4">                <div className="flex -space-x-2">                  {team.slice(0, 3).map((member, index) => (<img key={index} src={member.image} alt={member.name} className="w-12 h-12 rounded-full border-4 border-white shadow-lg" />))}                </div>                <div className="text-gray-600">                  <div className="font-semibold">Meet our expert team</div>                  <div className="text-sm">Dedicated professionals ready to help</div>                </div>              </div>            </div>                        <div className="order-1 lg:order-2">              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 lg:p-12">                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-6">                  <Sparkles className="w-8 h-8 text-white" />                </div>                                <h3 className="text-3xl font-heading font-bold text-gray-900 mb-6">                  Our Vision                </h3>                                <p className="text-gray-600 mb-6 leading-relaxed">                  To be India's most trusted and innovative real estate platform,                   where every property transaction is transparent, efficient, and                   customer-centric.                </p>                                <div className="bg-primary-500 text-white rounded-2xl p-6">                  <div className="grid grid-cols-2 gap-4">                    <div>                      <div className="text-primary-200 text-sm font-medium mb-1">Founded</div>                      <div className="text-2xl font-bold">2008</div>                    </div>                    <div>                      <div className="text-primary-200 text-sm font-medium mb-1">Location</div>                      <div className="text-lg font-semibold">Bengaluru</div>                    </div>                  </div>                </div>              </div>            </div>          </div>        </div>      </section>      {/* Values Section */}      <section className="py-20 bg-gray-50">        <div className="container mx-auto px-4 sm:px-6 lg:px-8">          <div className="text-center mb-16">            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-6">              <Heart className="w-8 h-8 text-white" />            </div>            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">              Our Core Values            </h2>            <p className="text-xl text-gray-600 max-w-3xl mx-auto">              These fundamental principles guide everything we do and shape the way we serve our clients            </p>          </div>          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">            {values.map((value, index) => (<div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"              >                {/* Gradient Background */}                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>                                <div className="relative z-10 text-center">                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg`}>                    <value.icon className="w-8 h-8 text-white" />                  </div>                                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">                    {value.title}                  </h3>                                    <p className="text-gray-600 leading-relaxed">                    {value.description}                  </p>                </div>              </div>))}          </div>        </div>      </section>      {/* Team Section */}      <section className="py-20 bg-white">        <div className="container mx-auto px-4 sm:px-6 lg:px-8">          <div className="text-center mb-16">            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-6">              <Users className="w-8 h-8 text-white" />            </div>            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">              Meet Our Expert Team            </h2>            <p className="text-xl text-gray-600 max-w-3xl mx-auto">              Our dedicated professionals bring years of experience and passion to help you find your perfect property            </p>          </div>          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">            {team.map((member, index) => (<div key={index} className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"              >                {/* Background Gradient */}                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>                                <div className="relative z-10 text-center">                  <div className="relative mb-6">                    <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg ring-4 ring-white group-hover:ring-primary-200 transition-all duration-300" />                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">                      {member.role.split(' ')[0]}                    </div>                  </div>                                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">                    {member.name}                  </h3>                                    <p className="text-primary-600 font-semibold mb-4">                    {member.role}                  </p>                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">                    {member.description}                  </p>                  {/* Specialties */}                  <div className="flex flex-wrap gap-1 mb-4 justify-center">                    {member.specialties.map((specialty, idx) => (<span key={idx} className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">                        {specialty}                      </span>))}                  </div>                  {/* Contact */}                  <div className="flex justify-center space-x-3">                    <a
      href={`mailto:${member.contact.email}`}
      className="p-2 bg-gray-100 hover:bg-primary-500 rounded-full transition-all duration-300 group/btn"
    >
      <Mail className="w-4 h-4 text-gray-600 group-hover/btn:text-white" />
    </a>
      <a
        href={`tel:${member.contact.phone}`}
        className="p-2 bg-gray-100 hover:bg-primary-500 rounded-full transition-all duration-300 group/btn"
      >
        <Phone className="w-4 h-4 text-gray-600 group-hover/btn:text-white" />
      </a>
      <a
        href={member.contact.linkedin}
        className="p-2 bg-gray-100 hover:bg-primary-500 rounded-full transition-all duration-300 group/btn"
      >
        <Linkedin className="w-4 h-4 text-gray-600 group-hover/btn:text-white" />
      </a>
    </div>
    </div>
    </div>
    ))}
    </div>
    </div>
    </section>

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
            From a small startup to Bengaluru's leading real estate platform - our milestones tell our story
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>

          {achievements.map((achievement, index) => (
            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}>
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
                  <p className="text-gray-600">
                    {achievement.description}
                  </p>
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
            <span className="block text-primary-100">
              With the Best?
            </span>
          </h2>

          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Experience the difference that 15+ years of expertise, innovation, and customer-first approach can make in your property journey.
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
              <div className="text-primary-100">+91 8551 07 8551</div>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl mb-4 group-hover:bg-white/20 transition-colors duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-white font-semibold">Email Us</div>
              <div className="text-primary-100">contact@makemypropertyz.com</div>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl mb-4 group-hover:bg-white/20 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="text-white font-semibold">Visit Us</div>
              <div className="text-primary-100">7, Jnanabharathi BDA Layout, Jnana Ganga Nagar, Bengaluru, Karnataka 560056</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}
