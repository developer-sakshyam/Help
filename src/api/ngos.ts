import { fetchApi } from "./apiClient";
import { ngosDemoData, type NGO } from "../data/ngos";

export interface NGOFilters {
  query?: string | undefined;
  cause?: string | undefined;
  province?: string | undefined;
  district?: string | undefined;
  verifiedOnly?: boolean | undefined;
}

interface BackendNGO {
  _id: string;
  name: string;
  slug: string;
  description: string;
  mission: string;
  registrationDate: string;
  logo?: string;
  website?: string;
  email: string;
  phone: string;
  location: {
    province: string;
    district: string;
    municipality?: string;
    address?: string;
  };
  contactPerson: {
    name: string;
    position: string;
    email: string;
    phone: string;
  };
  focusAreas: string[];
  isVerified: boolean;
  totalCampaigns: number;
  totalVolunteers: number;
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

interface SingleNGOResponse {
  data: {
    ngo: BackendNGO;
  };
  success: boolean;
}

function mapNGO(ngo: BackendNGO): NGO {
  const address = ngo.location.address || ngo.location.municipality || "";

  return {
    id: ngo._id,
    name: ngo.name,
    logo: ngo.logo || "",
    location: address ? `${address}, ${ngo.location.district}` : ngo.location.district,
    district: ngo.location.district,
    province: ngo.location.province,
    causes: ngo.focusAreas,
    description: ngo.description,
    verified: ngo.isVerified,
    founded: new Date(ngo.registrationDate).getFullYear(),
    volunteersCount: ngo.totalVolunteers,
    projectsCount: ngo.totalCampaigns,
    contact: {
      phone: ngo.contactPerson.phone,
      email: ngo.contactPerson.email,
      address: address || `${ngo.location.municipality || ""}, ${ngo.location.district}`,
    },
    website: ngo.website || "",
    activeProjects: ngo.focusAreas.slice(0, 4),
  };
}

export async function getNGOs(filters?: NGOFilters): Promise<NGO[]> {
  const remoteData = await fetchApi<PaginatedResponse<BackendNGO>>(
    "/api/ngos?page=1&limit=100",
  );
  const dataset =
    remoteData && Array.isArray(remoteData.data?.data)
      ? remoteData.data.data.map(mapNGO)
      : ngosDemoData;

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
  const remoteData = await fetchApi<SingleNGOResponse>(`/api/ngos/${id}`);
  if (remoteData?.data?.ngo) return mapNGO(remoteData.data.ngo);

  const found = ngosDemoData.find((n) => n.id === id);
  return found || null;
}
