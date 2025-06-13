import { useState, useEffect, useMemo } from "react";
import { Provider } from "@/types/provider";
import ProviderCard from "@/components/ProviderCard";
import { fetchAllProviders } from "@/lib/fetchProviders";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [allProviders, setAllProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllProviders().then((data) => {
      setAllProviders(data);
      setLoading(false);
    });
  }, []);

  const categories = useMemo(() => {
    const unique = new Set(allProviders.map((p) => p.category));
    return ["All", ...Array.from(unique)];
  }, [allProviders]);

  const filteredProviders = useMemo(() => {
    return allProviders.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, allProviders]);

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Learning Support Provider Directory
        </h1>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Search by name or location..."
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="px-4 py-2 rounded-md border border-gray-300 shadow-sm"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading providers...</p>
        ) : filteredProviders.length === 0 ? (
          <p className="text-center text-gray-500">No providers found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProviders.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
