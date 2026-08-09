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

interface BackendCampaign {
  _id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  coverImage?: string;
  gallery?: string[];
  organization?: string | { name?: string };
  goalAmount: number;
  currency?: string;
  raisedAmount?: number;
  donorCount?: number;
  volunteerCount?: number;
  startDate: string;
  endDate: string;
  status: string;
  isUrgent?: boolean;
  location?: {
    province?: string;
    district?: string;
    municipality?: string;
    address?: string;
  };
  tags?: string[];
}

interface PaginatedResponse<T> {
  data: {
    data: T[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
      hasNext: boolean;
      hasPrev: boolean;
    };
  };
  success: boolean;
}

interface SingleCampaignResponse {
  data: {
    campaign: BackendCampaign;
  };
  success: boolean;
}

const CAMPAIGN_CATEGORY_MAP: Record<string, Campaign["category"]> = {
  healthcare: "Medical",
  education: "Education",
  disaster_relief: "Disaster Relief",
  poverty_alleviation: "Volunteer",
  environment: "Environment",
  women_empowerment: "Volunteer",
  child_welfare: "Volunteer",
  elderly_care: "Volunteer",
  disability_support: "Volunteer",
  community_development: "Volunteer",
  food_security: "Food",
  water_sanitation: "Volunteer",
  shelter_housing: "Volunteer",
  emergency_response: "Blood",
};

function mapCampaign(campaign: BackendCampaign): Campaign {
  const progress = campaign.goalAmount
    ? Math.min(
        100,
        Math.round(((campaign.raisedAmount ?? 0) / campaign.goalAmount) * 100),
      )
    : 0;

  return {
    id: campaign._id,
    title: campaign.title,
    image:
      campaign.coverImage ||
      campaign.gallery?.find(Boolean) ||
      undefined,
    organization:
      typeof campaign.organization === "string"
        ? campaign.organization
        : campaign.organization?.name || "Community",
    category:
      CAMPAIGN_CATEGORY_MAP[campaign.category.toLowerCase()] ||
      (campaign.category as Campaign["category"]),
    location:
      campaign.location?.municipality || campaign.location?.district || "",
    district: campaign.location?.district || "",
    province: campaign.location?.province || "",
    description: campaign.shortDescription || campaign.description || "",
    goal: `${campaign.currency ?? "NPR"} ${campaign.goalAmount.toLocaleString()}`,
    progressPercentage: progress,
    participantsCount:
      (campaign.donorCount ?? 0) + (campaign.volunteerCount ?? 0),
    startDate: campaign.startDate ? campaign.startDate.split("T")[0] : "",
    endDate: campaign.endDate ? campaign.endDate.split("T")[0] : "",
    status:
      campaign.status.toLowerCase() === "active"
        ? "Active"
        : campaign.status.toLowerCase() === "draft"
        ? "Upcoming"
        : campaign.status.toLowerCase() === "completed"
        ? "Completed"
        : "Active",
    urgency: campaign.isUrgent ? "Urgent" : "Normal",
    volunteerNeeded: true,
    donationsNeeded: true,
    requirements: campaign.tags ?? [],
  };
}

export async function getCampaigns(
  filters?: CampaignFilters,
): Promise<Campaign[]> {
  const remoteData = await fetchApi<PaginatedResponse<BackendCampaign>>(
    "/api/campaigns?page=1&limit=100",
  );
  const dataset =
    remoteData && Array.isArray(remoteData.data?.data)
      ? remoteData.data.data.map(mapCampaign)
      : campaignsDemoData;

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
  const remoteData = await fetchApi<SingleCampaignResponse>(
    `/api/campaigns/${id}`,
  );

  if (remoteData?.data?.campaign) {
    return mapCampaign(remoteData.data.campaign);
  }

  const found = campaignsDemoData.find((c) => c.id === id);
  return found || null;
}
