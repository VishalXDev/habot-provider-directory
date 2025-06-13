import { Provider } from "@/types/provider";
import Link from "next/link";

export default function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <Link href={`/providers/${provider.id}`}>
      <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer">
        <img
          src={provider.image}
          alt={provider.name}
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{provider.name}</h2>
          <p className="text-sm text-gray-500">
            {provider.category} • {provider.location}
          </p>
          <p className="mt-2 text-gray-600 text-sm line-clamp-3">
            {provider.description}
          </p>
          <div className="mt-2 text-sm text-yellow-500">⭐ {provider.rating}</div>
        </div>
      </div>
    </Link>
  );
}
