import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Provider } from "@/types/provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchProviderById } from "@/lib/fetchProviders";

export default function ProviderDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [provider, setProvider] = useState<Provider | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id && typeof id === "string") {
      fetchProviderById(id).then((res) => {
        setProvider(res || null);
        setLoading(false);
      });
    }
  }, [id]);

  if (!router.isReady || loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-500 text-lg">Loading...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!provider) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-500 text-lg">Provider not found.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white py-10 px-6 max-w-3xl mx-auto">
        <button
          onClick={() => router.back()}
          className="text-blue-600 hover:underline mb-6 inline-block"
        >
          ← Back to Directory
        </button>

        <img
          src={provider.image || "/images/default-provider.jpg"}
          alt={provider.name}
          className="w-full h-64 object-cover rounded-lg mb-6 shadow"
        />

        <h1 className="text-3xl font-bold text-gray-800 mb-2">{provider.name}</h1>
        <p className="text-gray-600 mb-1">
          {provider.category} • {provider.location}
        </p>
        <p className="text-sm text-gray-500 mb-4">Rating: ⭐ {provider.rating}</p>

        <p className="text-gray-700 mb-6">{provider.description}</p>

        {provider.services?.length > 0 && (
          <>
            <h3 className="font-semibold text-gray-800 mb-2">Services:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {provider.services.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
