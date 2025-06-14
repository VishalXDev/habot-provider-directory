import { Users, Heart, Target, Award } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert Network",
      description: "Access to qualified learning support specialists with proven track records in helping children succeed."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Personalized Care",
      description: "Every child is unique. We help you find providers who understand your child's specific learning needs."
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Targeted Solutions",
      description: "From ADHD coaching to dyslexia support, find specialists who focus on your child's specific challenges."
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Quality Assured",
      description: "All providers are vetted and rated by real families to ensure you get the best support available."
    }
  ];

  const stats = [
    { number: "500+", label: "Learning Support Providers" },
    { number: "1,000+", label: "Families Helped" },
    { number: "15+", label: "Specializations Covered" },
    { number: "4.8/5", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Habot Connect
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Empowering families to find the perfect learning support for every child's unique journey
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Habot Connect, we believe every child deserves the opportunity to learn and thrive. 
            We bridge the gap between families and qualified learning support providers, making it 
            easier than ever to find the right help for children with learning difficulties. Our 
            platform simplifies the search process, connecting you with specialists who understand 
            your child's unique needs.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Why Choose Habot Connect?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Founded in Dubai, Habot Connect DMCC emerged from a simple yet powerful idea: 
              every parent should have easy access to quality learning support for their child. 
              We recognized that finding the right specialist for children with learning 
              difficulties was often overwhelming and time-consuming for families.
            </p>
            <p>
              Our team of educators, technologists, and parents came together to create a 
              platform that puts families first. We carefully vet each provider, gather 
              authentic reviews, and present information in a clear, accessible way that 
              helps parents make informed decisions.
            </p>
            <p>
              Today, we're proud to serve families across the region, connecting them with 
              specialists in areas ranging from ADHD coaching and dyslexia support to autism 
              therapy and general learning disabilities. Our commitment remains unchanged: 
              making quality learning support accessible to every child who needs it.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Built with Care
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            This platform was crafted with dedication and attention to detail by
          </p>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8 max-w-md mx-auto">
            <div className="text-6xl mb-4">👨‍💻</div>
            <h3 className="text-2xl font-bold mb-2">Vishal Dwivedy</h3>
            <p className="text-blue-100">Full Stack Developer</p>
            <p className="text-sm text-blue-200 mt-2">
              Passionate about creating solutions that make a difference
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}