import { fetchApi } from "./apiClient";
import { campaignsDemoData, type Campaign } from "../data/campaigns";

export interface CampaignFilters {
  query?: string | undefined;
  category?: string | undefined;
  status?: string | undefined;
  urgency?: string | undefined;
  province?: string | undefined;
  district?: string | undefined;
}

export async function getCampaigns(
  filters?: CampaignFilters,
): Promise<Campaign[]> {
  const remoteData = await fetchApi<Campaign[]>("/api/campaigns");
  const dataset =
    remoteData && Array.isArray(remoteData) ? remoteData : campaignsDemoData;

  if (!filters) return dataset;

  return dataset.filter((item) => {
    if (filters.category && filters.category !== "all") {
      if (item.category.toLowerCase() !== filters.category.toLowerCase())
        return false;
    }

    if (filters.status && filters.status !== "all") {
      if (item.status.toLowerCase() !== filters.status.toLowerCase())
        return false;
    }

    if (filters.urgency && filters.urgency !== "all") {
      if (item.urgency.toLowerCase() !== filters.urgency.toLowerCase())
        return false;
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
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchOrg = item.organization.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchLoc = `${item.location} ${item.district} ${item.province}`
        .toLowerCase()
        .includes(q);
      return matchTitle || matchOrg || matchDesc || matchLoc;
    }

    return true;
  });
}

export async function getCampaignById(id: string): Promise<Campaign | null> {
  const remoteData = await fetchApi<Campaign>(`/api/campaigns/${id}`);
  if (remoteData) return remoteData;

  const found = campaignsDemoData.find((c) => c.id === id);
  return found || null;
}
