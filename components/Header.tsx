import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const isActive = (path: string) => router.pathname === path;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100" 
            : "bg-white/95 backdrop-blur-sm shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Habot Directory
                </h1>
                <p className="text-xs text-gray-500 -mt-1 font-medium">Learning Support Network</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <Link 
                href="/" 
                className={`px-5 py-2.5 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 relative group ${
                  isActive("/") 
                    ? "text-blue-600 bg-blue-50 shadow-sm" 
                    : "text-gray-800 hover:text-blue-600 hover:bg-blue-50/80"
                }`}
              >
                <span className="relative z-10">Directory</span>
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-600 transition-all duration-200 ${
                  isActive("/") ? "w-8" : "w-0 group-hover:w-8"
                }`}></span>
              </Link>
              <Link 
                href="/about" 
                className={`px-5 py-2.5 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 relative group ${
                  isActive("/about") 
                    ? "text-blue-600 bg-blue-50 shadow-sm" 
                    : "text-gray-800 hover:text-blue-600 hover:bg-blue-50/80"
                }`}
              >
                <span className="relative z-10">About</span>
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-600 transition-all duration-200 ${
                  isActive("/about") ? "w-8" : "w-0 group-hover:w-8"
                }`}></span>
              </Link>
              <div className="ml-6">
                <Link 
                  href="/contact" 
                  className="relative inline-flex items-center px-7 py-3 rounded-full font-bold text-base tracking-wide text-white bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-200 hover:scale-105 hover:shadow-xl shadow-lg group overflow-hidden"
                >
                  <span className="relative z-10">Get Listed</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-0.5" : ""
                }`}></span>
                <span className={`w-5 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}></span>
                <span className={`w-5 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        <div className={`absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg transition-transform duration-300 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}>
          <div className="px-4 py-6 space-y-3">
            <Link 
              href="/" 
              className={`flex items-center px-5 py-4 rounded-xl font-semibold text-lg tracking-wide transition-all duration-200 ${
                isActive("/") 
                  ? "text-blue-600 bg-blue-50 shadow-sm" 
                  : "text-gray-800 hover:text-blue-600 hover:bg-blue-50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Directory
            </Link>
            <Link 
              href="/about" 
              className={`flex items-center px-5 py-4 rounded-xl font-semibold text-lg tracking-wide transition-all duration-200 ${
                isActive("/about") 
                  ? "text-blue-600 bg-blue-50 shadow-sm" 
                  : "text-gray-800 hover:text-blue-600 hover:bg-blue-50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <Link 
                href="/contact" 
                className="flex items-center justify-center w-full px-7 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl font-bold text-lg tracking-wide hover:shadow-xl transition-all duration-200 hover:scale-105 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Get Listed
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}