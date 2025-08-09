import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Building, 
  MessageCircle, 
  Sparkles, 
  ArrowRight, 
  Globe, 
  Users, 
  Star 
} from 'lucide-react';

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number').optional().or(z.literal('')),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  propertyId: z.string().optional(),
  preferredContact: z.enum(['email', 'phone']),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      preferredContact: 'email',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Contact form submitted:', data);
      setSubmitSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: ['123 MG Road, Bangalore', 'Karnataka 560001, India'],
      link: 'https://maps.google.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 80 4567 8901'],
      link: 'tel:+919876543210',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@makemypropertyz.com', 'support@makemypropertyz.com'],
      link: 'mailto:info@makemypropertyz.com',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 5:00 PM'],
      color: 'from-orange-500 to-red-500'
    },
  ];

  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Connect with our experienced property consultants'
    },
    {
      icon: MessageCircle,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your queries'
    },
    {
      icon: Globe,
      title: 'Online Platform',
      description: 'Access our services from anywhere, anytime'
    },
    {
      icon: Star,
      title: 'Trusted Service',
      description: '1000+ satisfied clients and growing'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-200/10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-8">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent">
              Contact Us
            </h1>
            
            <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Ready to find your dream property? Get in touch with our expert team today and let us help you make your property dreams a reality.
            </p>

            {/* Quick Contact Actions */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919876543210"
                className="group bg-white text-primary-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <a 
                href="mailto:info@makemypropertyz.com"
                className="group border-2 border-white/30 text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 backdrop-blur-sm"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Why Choose Our Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience exceptional service with our dedicated team and comprehensive support system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 group-hover:bg-primary-500 rounded-2xl mb-6 transform group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-primary-600 group-hover:text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-6">
                <Send className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              {submitSuccess && (
                <div className="mb-6 p-6 bg-green-50 border-2 border-green-200 rounded-2xl flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="text-green-800 font-semibold text-lg">Message sent successfully!</p>
                    <p className="text-green-600">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-6 bg-red-50 border-2 border-red-200 rounded-2xl flex items-center space-x-3">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                  <p className="text-red-800 font-semibold">{submitError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Name */}
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register('name')}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-red-600 font-medium">{errors.name.message}</p>
                  )}
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-red-600 font-medium">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-base font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && (
                      <p className="mt-2 text-red-600 font-medium">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    {...register('subject')}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                    placeholder="What can we help you with?"
                  />
                  {errors.subject && (
                    <p className="mt-2 text-red-600 font-medium">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-3">
                    Message *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={6}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg resize-none"
                    placeholder="Tell us more about your property requirements..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-red-600 font-medium">{errors.message.message}</p>
                  )}
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-4">
                    Preferred Contact Method *
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        {...register('preferredContact')}
                        value="email"
                        className="w-5 h-5 text-primary-500 border-2 border-gray-300 focus:ring-primary-500"
                      />
                      <span className="ml-3 text-gray-700 font-medium">Email</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        {...register('preferredContact')}
                        value="phone"
                        className="w-5 h-5 text-primary-500 border-2 border-gray-300 focus:ring-primary-500"
                      />
                      <span className="ml-3 text-gray-700 font-medium">Phone</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center space-x-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      <span>Send Message</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-6">
                  <Building className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                
                <p className="text-xl text-gray-600 mb-8">
                  We're here to help you find your perfect property. Reach out to us through any of these channels.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10 text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                        <info.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                        {info.title}
                      </h3>
                      
                      <div className="space-y-2">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>

                      {info.link && (
                        <a 
                          href={info.link}
                          className="inline-flex items-center mt-4 text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-300"
                        >
                          <span>Contact Now</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Find Our Office
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Bangalore, our office is easily accessible and we're always ready to welcome you
            </p>
          </div>

          <div className="bg-white rounded-3xl p-4 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6404675444453!2d77.61106431482246!3d12.97539949087617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167f7e5d2b0b%3A0x3a3b9a58d3e3b8e7!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1673961234567!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
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
            <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6">
              Ready to Get
              <span className="block text-primary-100">
                Started?
              </span>
            </h2>
            
            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
              Don't wait any longer. Contact us today and take the first step towards finding your perfect property.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="tel:+919876543210"
                className="group bg-white text-primary-600 hover:bg-gray-50 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-3"
              >
                <Phone className="w-6 h-6" />
                <span>Call Us Now</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <a 
                href="#contact-form"
                className="group border-2 border-white/30 text-white hover:bg-white hover:text-primary-600 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Send Message</span>
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-semibold">Call Us</div>
                <div className="text-primary-100">+91 98765 43210</div>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-semibold">Email Us</div>
                <div className="text-primary-100">info@makemypropertyz.com</div>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="text-white font-semibold">Visit Us</div>
                <div className="text-primary-100">MG Road, Bangalore</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}