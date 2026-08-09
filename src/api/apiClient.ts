/**
 * API Client supporting VITE_API_URL environment configuration with graceful fallback handling.
 */

const BASE_URL = (import.meta.env["VITE_API_URL"] as string | undefined) || "";

export async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T | null> {
  if (!BASE_URL) {
    return null;
  }

  try {
    const url = `${BASE_URL.replace(/\/$/, "")}/${endpoint.replace(/^\//, "")}`;
    const res = await fetch(url, {
      ...options,
      credentials: options?.credentials ?? "include",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    if (!res.ok) {
      console.warn(`[API] Endpoint ${endpoint} returned status ${res.status}`);
      return null;
    }

    return (await res.json()) as T;
  } catch (error) {
    console.warn(`[API] Network error fetching ${endpoint}:`, error);
    return null;
  }
}
