import { Provider } from "@/types/provider";
import Link from "next/link";
import { useState } from "react";

export default function ProviderCard({ provider, index = 0 }: { provider: Provider; index?: number }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors = {
      "Special Education": "bg-purple-100 text-purple-800 border-purple-200",
      "STEM Enrichment": "bg-blue-100 text-blue-800 border-blue-200",
      "Therapy & Wellness": "bg-green-100 text-green-800 border-green-200",
      "Academic Support": "bg-orange-100 text-orange-800 border-orange-200",
      "Creative Arts": "bg-pink-100 text-pink-800 border-pink-200",
      default: "bg-gray-100 text-gray-800 border-gray-200"
    };
    return colors[category as keyof typeof colors] || colors.default;
  };

  const getDefaultImage = () => {
    const images = [
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581726707445-75cdd8f2d742?w=400&h=300&fit=crop"
    ];
    return images[index % images.length];
  };

  return (
    <div 
      className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.6s ease-out both'
      }}
    >
      <Link href={`/providers/${provider.id}`}>
        <div className="cursor-pointer">
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
            {!imageError && (
              <img
                src={provider.image || getDefaultImage()}
                alt={provider.name}
                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            )}
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 animate-pulse"></div>
            )}
            {imageError && (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">Learning Center</p>
                </div>
              </div>
            )}
            
            {/* Category Badge */}
            <div className="absolute top-3 left-3">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(provider.category)}`}>
                {provider.category}
              </span>
            </div>

            {/* Rating Badge */}
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">{provider.rating}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                {provider.name}
              </h3>
            </div>

            <div className="flex items-center text-sm text-gray-600 mb-3">
              <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {provider.location}
            </div>

            <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
              {provider.description}
            </p>

            {/* Services Tags */}
            {provider.services && provider.services.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {provider.services.slice(0, 3).map((service, i) => (
                  <span key={i} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700">
                    {service}
                  </span>
                ))}
                {provider.services.length > 3 && (
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                    +{provider.services.length - 3} more
                  </span>
                )}
              </div>
            )}

            {/* CTA Button */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>View Details</span>
              </div>
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                <span className="mr-1">Learn More</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}