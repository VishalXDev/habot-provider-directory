import { Users, Heart, Target, Award } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert Network",
      description:
        "Access to qualified learning support specialists with proven track records in helping children succeed.",
      color: "from-blue-50 to-blue-100",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Personalized Care",
      description:
        "Every child is unique. We help you find providers who understand your child's specific learning needs.",
      color: "from-red-50 to-red-100",
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Targeted Solutions",
      description:
        "From ADHD coaching to dyslexia support, find specialists who focus on your child's specific challenges.",
      color: "from-green-50 to-green-100",
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Quality Assured",
      description:
        "All providers are vetted and rated by real families to ensure you get the best support available.",
      color: "from-purple-50 to-purple-100",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Learning Support Providers",
      color: "text-blue-600",
    },
    { number: "1,000+", label: "Families Helped", color: "text-purple-600" },
    {
      number: "15+",
      label: "Specializations Covered",
      color: "text-green-600",
    },
    { number: "4.8/5", label: "Average Rating", color: "text-amber-600" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Habot Connect
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Empowering Indian families to find the perfect learning support
              for every child's unique journey
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Habot Connect, we believe every Indian child deserves the
            opportunity to learn and thrive. We bridge the gap between families
            and qualified learning support providers across India, making it
            easier than ever to find the right help for children with learning
            difficulties. Our platform simplifies the search process, connecting
            you with specialists who understand your child's unique needs in the
            Indian context.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}
              >
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-800 text-center mb-12"
          >
            Why Choose Habot Connect?
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${feature.color} p-6 rounded-xl shadow-sm hover:shadow-md transition-all`}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Born from the vibrant diversity of India, Habot Connect emerged
              from a simple yet powerful idea: every Indian parent should have
              easy access to quality learning support for their child. We
              recognized that finding the right specialist for children with
              learning difficulties was often overwhelming and time-consuming
              for families across our nation.
            </p>
            <p>
              Our team of Indian educators, technologists, and parents came
              together to create a platform that understands the unique
              challenges faced by Indian families. We carefully vet each
              provider, gather authentic reviews, and present information in a
              clear, accessible way that helps parents make informed decisions
              within the Indian educational landscape.
            </p>
            <p>
              Today, we're proud to serve families across India, connecting them
              with specialists in areas ranging from ADHD coaching and dyslexia
              support to autism therapy and general learning disabilities. Our
              commitment remains unchanged: making quality learning support
              accessible to every Indian child who needs it.
            </p>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Built with Care
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            This platform was crafted with dedication and attention to detail by
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-8 max-w-md mx-auto shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <Image
                src="/images/id-pic.jpg"
                alt="Vishal Dwivedy"
                width={100}
                height={100}
                className="rounded-full border-4 border-white object-cover"
                priority 
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Vishal Dwivedy</h3>
            <p className="text-blue-100">Full Stack Developer</p>
            <p className="text-sm text-blue-200 mt-2">
              Passionate about creating solutions that make a difference in
              Indian education
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
