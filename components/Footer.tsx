export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-t-4 border-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Habot Connect
            </h3>
            <p className="text-sm text-gray-700 font-medium">
              Connecting families with the right learning support
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:text-purple-600 hover:scale-105 transition-all duration-200 px-3 py-1 rounded-full hover:bg-blue-100"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-sm font-medium text-green-600 hover:text-emerald-600 hover:scale-105 transition-all duration-200 px-3 py-1 rounded-full hover:bg-green-100"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-sm font-medium text-purple-600 hover:text-pink-600 hover:scale-105 transition-all duration-200 px-3 py-1 rounded-full hover:bg-purple-100"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm font-medium text-orange-600 hover:text-red-600 hover:scale-105 transition-all duration-200 px-3 py-1 rounded-full hover:bg-orange-100"
            >
              Support
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-6 pt-4 border-t-2 border-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-gray-600 font-medium">
              © {new Date().getFullYear()} 
              <span className="text-blue-600 font-semibold ml-1">Habot Connect DMCC</span>. 
              <span className="text-purple-600 ml-1">All rights reserved.</span>
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-teal-600 font-medium bg-teal-50 px-2 py-1 rounded-full">
                Learning Support Provider Directory
              </span>
              <span className="text-gray-400">•</span>
              <span className="flex items-center space-x-1 bg-gradient-to-r from-pink-50 to-yellow-50 px-3 py-1 rounded-full">
                <span className="text-gray-700">Crafted with</span>
                <span className="text-red-500 animate-pulse text-lg">💖</span>
                <span className="text-gray-700">by</span>
                <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Vishal Dwivedy
                </span>
                <span className="text-yellow-500 animate-bounce text-lg">✨</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}