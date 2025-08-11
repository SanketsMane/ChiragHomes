const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-7 h-7 sm:w-8 sm:h-8"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
  </svg>
);

export function WhatsAppFloat() {
  const phoneNumber = '919945670248';
  const message = 'Hello%20MakeMyPropertyz%20Team!%20I%20need%20assistance%20with%20property%20search.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
      {/* Main Button Container */}
      <div className="relative group">
        {/* Animated Background Rings */}
        <div className="absolute inset-0 -m-2">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse opacity-20 animation-delay-1000"></div>
        </div>
        
        {/* Outer Glow Ring */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 rounded-full opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500"></div>
        
        {/* Main Button */}
        <button
          onClick={handleWhatsAppClick}
          aria-label="Chat on WhatsApp - Get instant property assistance"
          className="relative overflow-hidden bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 hover:from-green-400 hover:via-green-500 hover:to-emerald-500 text-white p-4 sm:p-5 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-500 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-400/50 active:scale-95 border border-green-400/20"
        >
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>
          
          {/* Icon Container */}
          <div className="relative z-10 flex items-center justify-center">
            <WhatsAppIcon />
          </div>
          
          {/* Ripple Effect on Click */}
          <div className="absolute inset-0 bg-white rounded-full scale-0 group-active:scale-150 opacity-20 transition-transform duration-300"></div>
        </button>

        {/* Enhanced Tooltip */}
        <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none transform translate-y-3 group-hover:translate-y-0 scale-95 group-hover:scale-100">
          <div className="relative">
            {/* Tooltip Background with Gradient */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-sm px-4 py-3 rounded-xl whitespace-nowrap shadow-2xl backdrop-blur-lg border border-gray-700/50">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium">Chat with our Property Experts</span>
              </div>
              <div className="text-xs text-gray-300 mt-1">Get instant assistance • Available 24/7</div>
            </div>
            
            {/* Tooltip Arrow */}
            <div className="absolute top-full right-6 w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-t-6 border-t-gray-800"></div>
          </div>
        </div>
        
        {/* Floating Mini Label */}
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-bounce">
          <span className="block w-2 h-2 bg-red-400 rounded-full animate-ping absolute -top-1 -right-1"></span>
          Live
        </div>
      </div>
      
      {/* Secondary Action Hint */}
      <div className="absolute -left-32 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 pointer-events-none">
        <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm text-gray-800 text-xs px-3 py-2 rounded-lg shadow-lg border">
          <span>💬</span>
          <span className="font-medium">Quick Response</span>
        </div>
      </div>
    </div>
  );
}
