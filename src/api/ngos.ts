import { fetchApi } from "./apiClient";
import { ngosDemoData, type NGO } from "../data/ngos";

export interface NGOFilters {
  query?: string | undefined;
  cause?: string | undefined;
  province?: string | undefined;
  district?: string | undefined;
  verifiedOnly?: boolean | undefined;
}

export async function getNGOs(filters?: NGOFilters): Promise<NGO[]> {
  const remoteData = await fetchApi<NGO[]>("/api/ngos");
  const dataset =
    remoteData && Array.isArray(remoteData) ? remoteData : ngosDemoData;

  if (!filters) return dataset;

  return dataset.filter((item) => {
    if (filters.verifiedOnly && !item.verified) return false;

    if (filters.cause && filters.cause !== "all") {
      const matchCause = item.causes.some((c) =>
        c.toLowerCase().includes(filters.cause!.toLowerCase()),
      );
      if (!matchCause) return false;
    }

    if (filters.province && filters.province !== "all") {
      if (item.province.toLowerCase() !== filters.province.toLowerCase())
        return false;
    }

    if (filters.district && filters.district !== "all") {
      if (item.district.toLowerCase() !== filters.district.toLowerCase())
        return false;
    }

    if (filters.query) {
      const q = filters.query.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchLoc = `${item.location} ${item.district} ${item.province}`
        .toLowerCase()
        .includes(q);
      const matchCauses = item.causes.some((c) => c.toLowerCase().includes(q));
      return matchName || matchDesc || matchLoc || matchCauses;
    }

    return true;
  });
}

export async function getNGOById(id: string): Promise<NGO | null> {
  const remoteData = await fetchApi<NGO>(`/api/ngos/${id}`);
  if (remoteData) return remoteData;

  const found = ngosDemoData.find((n) => n.id === id);
  return found || null;
}
