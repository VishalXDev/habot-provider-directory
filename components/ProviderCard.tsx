import { Provider } from "@/types/provider";
import Link from "next/link";
import { useState } from "react";
import { MapPin, Star, Clock, Users, Phone, ArrowRight, Sparkles } from "lucide-react";

export default function ProviderCard({ provider, index = 0 }: { provider: Provider; index?: number }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors = {
      "Special Education": "bg-gradient-to-r from-purple-500 to-purple-600 text-white",
      "STEM Enrichment": "bg-gradient-to-r from-blue-500 to-blue-600 text-white",
      "Therapy & Wellness": "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white",
      "Academic Support": "bg-gradient-to-r from-orange-500 to-orange-600 text-white",
      "Creative Arts": "bg-gradient-to-r from-pink-500 to-pink-600 text-white",
      default: "bg-gradient-to-r from-gray-500 to-gray-600 text-white"
    };
    return colors[category as keyof typeof colors] || colors.default;
  };

  const getDefaultImage = () => {
    const images = [
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1581726707445-75cdd8f2d742?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop"
    ];
    return images[index % images.length];
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : i < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div 
      className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200/50 hover:-translate-y-2 h-full flex flex-col backdrop-blur-sm"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.6s ease-out both'
      }}
    >
      {/* Gradient overlay for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <Link href={`/providers/${provider.id}`} className="flex flex-col h-full">
        <div className="cursor-pointer flex flex-col h-full">
          {/* Compact Image Container */}
          <div className="relative h-36 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 flex-shrink-0">
            {!imageError && (
              <img
                src={provider.image || getDefaultImage()}
                alt={provider.name}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
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
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-1">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-xs text-gray-600">Learning Center</p>
                </div>
              </div>
            )}
            
            {/* Floating Category Badge */}
            <div className="absolute top-2.5 left-2.5">
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-md ${getCategoryColor(provider.category)}`}>
                <Sparkles className="w-3 h-3 mr-1" />
                {provider.category}
              </span>
            </div>

            {/* Experience Badge */}
            {provider.experience && (
              <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-md rounded-full px-2.5 py-1 flex items-center space-x-1 shadow-md">
                <Clock className="w-3 h-3 text-blue-600" />
                <span className="text-xs font-semibold text-gray-700">{provider.experience}</span>
              </div>
            )}

            {/* Gradient overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
          </div>

          {/* Streamlined Content */}
          <div className="p-4 flex-grow flex flex-col space-y-3">
            {/* Header Section */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1 mb-1">
                {provider.name}
              </h3>
              
              {/* Rating & Verification */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-0.5">
                    {renderStars(provider.rating)}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{provider.rating}</span>
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-green-600 font-medium">Verified</span>
                </div>
              </div>

              {/* Specialization */}
              {provider.specialization && (
                <p className="text-sm font-medium text-blue-600 mb-1 line-clamp-1">
                  {provider.specialization}
                </p>
              )}
            </div>

            {/* Location & Quick Info */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
                <span className="truncate">{provider.location}</span>
              </div>
              {provider.phoneNumber && (
                <div className="flex items-center text-gray-500">
                  <Phone className="w-3.5 h-3.5" />
                </div>
              )}
            </div>

            {/* Compact Description */}
            <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
              {provider.shortDescription || provider.description}
            </p>

            {/* Services & Age Groups - Horizontal Layout */}
            <div className="space-y-2">
              {/* Age Groups */}
              {provider.ageGroups && provider.ageGroups.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {provider.ageGroups.slice(0, 2).map((age, i) => (
                    <span key={i} className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                      {age}
                    </span>
                  ))}
                  {provider.ageGroups.length > 2 && (
                    <span className="text-xs text-gray-500">+{provider.ageGroups.length - 2}</span>
                  )}
                </div>
              )}

              {/* Top Services */}
              {provider.services && provider.services.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {provider.services.slice(0, 2).map((service, i) => (
                    <span key={i} className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                      {service}
                    </span>
                  ))}
                  {provider.services.length > 2 && (
                    <span className="text-xs text-blue-600 font-medium">+{provider.services.length - 2} more</span>
                  )}
                </div>
              )}
            </div>

            {/* Stylish CTA Footer */}
            <div className="mt-auto pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-xs text-gray-500">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <span className="font-medium">Full Profile</span>
                </div>
                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors duration-200">
                  <span className="mr-1">View Details</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}