import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Users,
  Headphones,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    userType: "parent",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        userType: "parent",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email Us",
      details: "Vishaldwidy@gmail.com",
      description: "Get in touch for general inquiries",
    },
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: "Call Us",
      details: "+91 7004212369",
      description: "Available Monday to Friday, 9 AM - 6 PM",
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      title: "Visit Us",
      details: "Cyber House, B-35, Sector 32, Gurugram, Haryana 122001, India",
      description: "Schedule an appointment to visit our office",
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      description: "Weekend support via email only",
    },
  ];

  const supportOptions = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "For Parents",
      description:
        "Need help finding the right learning support provider for your child?",
    },
    {
      icon: <Headphones className="w-8 h-8 text-green-600" />,
      title: "For Providers",
      description:
        "Interested in joining our network of learning support specialists?",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-600" />,
      title: "Technical Support",
      description: "Experiencing issues with the platform? We're here to help!",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              We're here to help you find the perfect learning support for your
              child. Reach out to us anytime!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Support Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{option.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {option.title}
              </h3>
              <p className="text-gray-600">{option.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h2>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  Your message has been sent successfully. We'll get back to you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="userType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    I am a *
                  </label>
                  <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="parent">Parent looking for support</option>
                    <option value="provider">Learning support provider</option>
                    <option value="educator">
                      Educator/School representative
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {info.title}
                      </h3>
                      <p className="text-gray-900 font-medium">
                        {info.details}
                      </p>
                      <p className="text-sm text-gray-600">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Quick Help
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800">
                    How do I find a provider?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Browse our directory, use filters to narrow down options,
                    and view detailed profiles.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Is the service free?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Yes! Our directory is completely free for parents to use.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    How are providers vetted?
                  </h4>
                  <p className="text-sm text-gray-600">
                    All providers go through our verification process and are
                    rated by real families.
                  </p>
                </div>
              </div>
            </div>

            {/* Developer Credit */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-lg font-bold mb-2">
                Built by Vishal Dwivedy
              </h3>
              <p className="text-purple-100 text-sm">
                Crafted with passion and attention to detail
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
