import { useState, useEffect, useMemo } from "react";
import { Provider } from "@/types/provider";
import ProviderCard from "@/components/ProviderCard";
import { fetchAllProviders } from "@/lib/fetchProviders";
import Head from "next/head";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [allProviders, setAllProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProviders = async () => {
      try {
        setLoading(true);
        const data = await fetchAllProviders();
        setAllProviders(data);
      } catch (err) {
        setError("Failed to load providers. Please try again later.");
        console.error("Error fetching providers:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProviders();
  }, []);

  const categories = useMemo(() => {
    const unique = new Set(allProviders.map((p) => p.category));
    return ["All", ...Array.from(unique)].sort();
  }, [allProviders]);

  const filteredProviders = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    
    return allProviders.filter((p) => {
      // Search matching logic
      const searchFields = [
        p.name?.toLowerCase() || "",
        p.location?.toLowerCase() || "",
        p.shortDescription?.toLowerCase() || "",
        p.longDescription?.toLowerCase() || "",
        ...(p.services?.map((s) => s.toLowerCase()) || [])
      ];

      const matchesSearch = q === "" || 
        searchFields.some(field => field.includes(q));

      // Category matching logic
      const matchesCategory = 
        selectedCategory === "All" || 
        p.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, allProviders]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  // Calculate statistics
  const stats = useMemo(() => {
    const totalProviders = allProviders.length;
    const totalCategories = categories.length - 1;
    const averageRating = totalProviders > 0 
      ? Math.round((allProviders.reduce((sum, p) => sum + p.rating, 0) / totalProviders) * 10) / 10
      : 0;
    
    return { totalProviders, totalCategories, averageRating };
  }, [allProviders, categories]);

  return (
    <>
      <Head>
        <title>Find Learning Support Providers | OurPlatform</title>
        <meta name="description" content="Discover qualified providers specializing in learning differences, therapy, and educational support services." />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Find the Perfect
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Learning Support
              </span>
              for Your Child
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover qualified providers specializing in learning differences, therapy, and educational support services.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1 w-full">
                <input
                  type="text"
                  placeholder="Search by name, location, or service..."
                  className="w-full px-6 py-4 rounded-2xl text-gray-900 placeholder-gray-500 shadow-xl focus:ring-4 focus:ring-white/30 focus:outline-none text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search providers"
                />
                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {(searchQuery || selectedCategory !== "All") && (
              <button
                onClick={clearFilters}
                className="mt-4 text-blue-200 hover:text-white underline transition-colors"
                aria-label="Clear all filters"
              >
                Clear filters
              </button>
            )}
          </div>

          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48" />
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filters Panel */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
                <div className="flex-1">
                  <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-2">
                    Filter by Category
                  </label>
                  <select
                    id="category-filter"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat === "All" ? "All Categories" : cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">View:</span>
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    {["grid", "list"].map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setViewMode(mode as "grid" | "list")}
                        className={`p-2 rounded-md transition-all ${
                          viewMode === mode
                            ? "bg-white shadow-sm text-blue-600"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                        aria-label={`${mode} view`}
                      >
                        {mode === "grid" ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  {loading ? (
                    "Loading providers..."
                  ) : error ? (
                    <span className="text-red-500">{error}</span>
                  ) : (
                    <>
                      Showing{" "}
                      <span className="font-semibold text-gray-900">
                        {filteredProviders.length}
                      </span>
                      {filteredProviders.length === 1 ? " provider" : " providers"}
                      {(searchQuery || selectedCategory !== "All") && (
                        <span>
                          {searchQuery && ` matching "${searchQuery}"`}
                          {selectedCategory !== "All" && ` in ${selectedCategory}`}
                        </span>
                      )}
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Content Area */}
            {error ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Providers</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  {error}
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  Try Again
                </button>
              </div>
            ) : loading ? (
              <div className="flex items-center justify-center py-20 text-center">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-700">Finding the best providers for you...</p>
                  <p className="text-gray-500">This will just take a moment</p>
                </div>
              </div>
            ) : filteredProviders.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No providers found</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  We couldn't find any providers matching your criteria. Try adjusting your search terms or filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  View All Providers
                </button>
              </div>
            ) : (
              <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
                {filteredProviders.map((provider) => (
                  <ProviderCard 
                    key={provider.id} 
                    provider={provider} 
                    layout={viewMode}
                  />
                ))}
              </div>
            )}

            {/* Statistics Section */}
            {!loading && !error && filteredProviders.length > 0 && (
              <div className="mt-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl shadow-xl p-8 border-2 border-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mb-8">
                  Our Community Impact ✨
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-blue-500">
                    <div className="text-4xl mb-3">🏥</div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                      {stats.totalProviders}+
                    </div>
                    <div className="text-gray-600 font-medium">Verified Providers</div>
                  </div>
                  
                  <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-purple-500">
                    <div className="text-4xl mb-3">🎯</div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">
                      {stats.totalCategories}
                    </div>
                    <div className="text-gray-600 font-medium">Specialization Areas</div>
                  </div>
                  
                  <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-green-500">
                    <div className="text-4xl mb-3">⭐</div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-2">
                      {stats.averageRating}
                    </div>
                    <div className="text-gray-600 font-medium">Average Rating</div>
                  </div>
                  
                  <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-orange-500">
                    <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-2">
                      2,500+
                    </div>
                    <div className="text-gray-600 font-medium">Families Helped</div>
                  </div>
                  
                  <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-pink-500">
                    <div className="text-4xl mb-3">💪</div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent mb-2">
                      98%
                    </div>
                    <div className="text-gray-600 font-medium">Success Rate</div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                      <p className="text-lg font-semibold text-gray-800">
                        🌟 Join our growing community of providers and families
                      </p>
                      <p className="text-gray-600">
                        Making learning support accessible to every child
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full">
                        <span className="text-sm font-medium text-blue-700">🏆 Award Winning</span>
                      </div>
                      <div className="bg-gradient-to-r from-green-100 to-teal-100 px-4 py-2 rounded-full">
                        <span className="text-sm font-medium text-green-700">✅ Trusted Platform</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}