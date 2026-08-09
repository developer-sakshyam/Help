import { fetchApi } from "./apiClient";
import { volunteersDemoData, type Volunteer } from "../data/volunteers";

export interface VolunteerFilters {
  query?: string | undefined;
  location?: string | undefined;
  district?: string | undefined;
  province?: string | undefined;
  skill?: string | undefined;
  interest?: string | undefined;
  availability?: string | undefined;
  experience?: string | undefined;
  verifiedOnly?: boolean | undefined;
}

interface BackendVolunteer {
  _id: string;
  title: string;
  description: string;
  shortDescription: string;
  type: string;
  requiredSkills: string[];
  preferredSkills: string[];
  volunteerCount: number;
  filledCount?: number;
  schedule: Array<{ day: string; startTime: string; endTime: string }>;
  applicationDeadline?: string;
  location: {
    province: string;
    district: string;
    municipality?: string;
    address?: string;
  };
  status: string;
  isFeatured?: boolean;
  gallery?: string[];
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

interface SingleVolunteerResponse {
  data: {
    opportunity: BackendVolunteer;
  };
  success: boolean;
}

function mapVolunteer(volunteer: BackendVolunteer): Volunteer {
  const skills = [
    ...(volunteer.requiredSkills || []),
    ...(volunteer.preferredSkills || []),
  ].filter(Boolean);

  const address =
    volunteer.location.municipality || volunteer.location.district || "";

  const availability = volunteer.applicationDeadline
    ? `Open until ${new Date(volunteer.applicationDeadline).toLocaleDateString()}`
    : "Open";

  return {
    id: volunteer._id,
    name: volunteer.title,
    profileImage: volunteer.gallery?.[0] || undefined,
    location: address,
    district: volunteer.location.district,
    province: volunteer.location.province,
    skills,
    interests: [
      volunteer.type,
      ...(volunteer.preferredSkills?.slice(0, 2) || []),
    ].filter(Boolean),
    experience: volunteer.shortDescription || "Volunteer opportunity",
    availability,
    verified: volunteer.status === "open" || volunteer.isFeatured === true,
    rating: 4.8,
    volunteerHours: volunteer.volunteerCount || 0,
    bio: volunteer.description,
  };
}

export async function getVolunteers(
  filters?: VolunteerFilters,
): Promise<Volunteer[]> {
  const remoteData = await fetchApi<PaginatedResponse<BackendVolunteer>>(
    "/api/volunteers?page=1&limit=100",
  );
  const dataset =
    remoteData && Array.isArray(remoteData.data?.data)
      ? remoteData.data.data.map(mapVolunteer)
      : volunteersDemoData;

  if (!filters) return dataset;

  return dataset.filter((item) => {
    if (filters.verifiedOnly && !item.verified) return false;

    if (filters.skill && filters.skill !== "all") {
      const matchSkill = item.skills.some((s) =>
        s.toLowerCase().includes(filters.skill!.toLowerCase()),
      );
      if (!matchSkill) return false;
    }

    if (filters.interest && filters.interest !== "all") {
      const matchInterest = item.interests.some((i) =>
        i.toLowerCase().includes(filters.interest!.toLowerCase()),
      );
      if (!matchInterest) return false;
    }

    if (filters.province && filters.province !== "all") {
      if (item.province.toLowerCase() !== filters.province.toLowerCase())
        return false;
    }

    if (filters.district && filters.district !== "all") {
      if (item.district.toLowerCase() !== filters.district.toLowerCase())
        return false;
    }

    if (filters.availability && filters.availability !== "all") {
      if (
        !item.availability
          .toLowerCase()
          .includes(filters.availability.toLowerCase())
      )
        return false;
    }

    if (filters.query) {
      const q = filters.query.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchBio = item.bio.toLowerCase().includes(q);
      const matchLoc = `${item.location} ${item.district} ${item.province}`
        .toLowerCase()
        .includes(q);
      const matchSkills = item.skills.some((s) => s.toLowerCase().includes(q));
      return matchName || matchBio || matchLoc || matchSkills;
    }

    return true;
  });
}

export async function getVolunteerById(id: string): Promise<Volunteer | null> {
  const remoteData = await fetchApi<SingleVolunteerResponse>(
    `/api/volunteers/${id}`,
  );
  if (remoteData?.data?.opportunity)
    return mapVolunteer(remoteData.data.opportunity);

  const found = volunteersDemoData.find((v) => v.id === id);
  return found || null;
}
