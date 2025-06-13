import { Provider } from "@/types/provider";
import data from "@/data/providers.json";

/**
 * Simulates fetching all providers with a delay.
 */
export function fetchAllProviders(): Promise<Provider[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data as Provider[]);
    }, 800); // 800ms simulated delay
  });
}

/**
 * Simulates fetching a single provider by ID with a delay.
 */
export function fetchProviderById(id: string): Promise<Provider | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const all = data as Provider[];
      resolve(all.find((p) => p.id === id));
    }, 800); // same delay
  });
}
