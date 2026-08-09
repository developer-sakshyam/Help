import { fetchApi } from "./apiClient";
import {
  volunteersDemoData,
  type Volunteer,
} from "../data/volunteers";

export interface VolunteerFilters {
  query?: string;
  location?: string;
  district?: string;
  province?: string;
  skill?: string;
  interest?: string;
  availability?: string;
  experience?: string;
  verifiedOnly?: boolean;
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

  schedule: Array<{
    day: string;
    startTime: string;
    endTime: string;
  }>;

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

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

interface PaginatedResponse<T> {
  data: {
    data: T[];
    pagination: Pagination;
  };
  success: boolean;
}

interface SingleVolunteerResponse {
  data: {
    opportunity: BackendVolunteer;
  };
  success: boolean;
}

function mapVolunteer(
  volunteer: BackendVolunteer,
): Volunteer {
  const skills = [
    ...(volunteer.requiredSkills || []),
    ...(volunteer.preferredSkills || []),
  ].filter(Boolean);

  const address =
    volunteer.location?.municipality ||
    volunteer.location?.district ||
    "";

  const availability = volunteer.applicationDeadline
    ? `Open until ${new Date(
      volunteer.applicationDeadline,
    ).toLocaleDateString()}`
    : "Open";

  return {
    id: volunteer._id,

    name: volunteer.title,

    // With exactOptionalPropertyTypes enabled,
    // omit the property completely when there is no image.
    ...(volunteer.gallery?.[0]
      ? {
        profileImage: volunteer.gallery[0],
      }
      : {}),

    location: address,

    district:
      volunteer.location?.district || "",

    province:
      volunteer.location?.province || "",

    skills,

    interests: [
      volunteer.type,
      ...(volunteer.preferredSkills?.slice(0, 2) || []),
    ].filter(Boolean),

    experience:
      volunteer.shortDescription ||
      "Volunteer opportunity",

    availability,

    verified:
      volunteer.status === "open" ||
      volunteer.isFeatured === true,

    rating: 4.8,

    volunteerHours:
      volunteer.volunteerCount || 0,

    bio: volunteer.description,
  };
}

export async function getVolunteers(
  filters?: VolunteerFilters,
): Promise<Volunteer[]> {
  try {
    const remoteData =
      await fetchApi<
        PaginatedResponse<BackendVolunteer>
      >(
        "/api/volunteers?page=1&limit=100",
      );

    const dataset =
      remoteData &&
        Array.isArray(remoteData.data?.data)
        ? remoteData.data.data.map(mapVolunteer)
        : volunteersDemoData;

    // No filters
    if (!filters) {
      return dataset;
    }

    return dataset.filter((item) => {
      // -----------------------------------------
      // Verified filter
      // -----------------------------------------
      if (
        filters.verifiedOnly &&
        !item.verified
      ) {
        return false;
      }

      // -----------------------------------------
      // Skill filter
      // -----------------------------------------
      if (
        filters.skill &&
        filters.skill !== "all"
      ) {
        const matchSkill =
          item.skills.some((skill) =>
            skill
              .toLowerCase()
              .includes(
                filters.skill!.toLowerCase(),
              ),
          );

        if (!matchSkill) {
          return false;
        }
      }

      // -----------------------------------------
      // Interest filter
      // -----------------------------------------
      if (
        filters.interest &&
        filters.interest !== "all"
      ) {
        const matchInterest =
          item.interests.some((interest) =>
            interest
              .toLowerCase()
              .includes(
                filters.interest!.toLowerCase(),
              ),
          );

        if (!matchInterest) {
          return false;
        }
      }

      // -----------------------------------------
      // Province filter
      // -----------------------------------------
      if (
        filters.province &&
        filters.province !== "all"
      ) {
        if (
          item.province.toLowerCase() !==
          filters.province.toLowerCase()
        ) {
          return false;
        }
      }

      // -----------------------------------------
      // District filter
      // -----------------------------------------
      if (
        filters.district &&
        filters.district !== "all"
      ) {
        if (
          item.district.toLowerCase() !==
          filters.district.toLowerCase()
        ) {
          return false;
        }
      }

      // -----------------------------------------
      // Location filter
      // -----------------------------------------
      if (
        filters.location &&
        filters.location !== "all"
      ) {
        const locationText = `
          ${item.location}
          ${item.district}
          ${item.province}
        `.toLowerCase();

        if (
          !locationText.includes(
            filters.location.toLowerCase(),
          )
        ) {
          return false;
        }
      }

      // -----------------------------------------
      // Availability filter
      // -----------------------------------------
      if (
        filters.availability &&
        filters.availability !== "all"
      ) {
        if (
          !item.availability
            .toLowerCase()
            .includes(
              filters.availability.toLowerCase(),
            )
        ) {
          return false;
        }
      }

      // -----------------------------------------
      // Experience filter
      // -----------------------------------------
      if (
        filters.experience &&
        filters.experience !== "all"
      ) {
        if (
          !item.experience
            .toLowerCase()
            .includes(
              filters.experience.toLowerCase(),
            )
        ) {
          return false;
        }
      }

      // -----------------------------------------
      // Search query
      // -----------------------------------------
      if (filters.query) {
        const q =
          filters.query.toLowerCase();

        const matchName =
          item.name
            .toLowerCase()
            .includes(q);

        const matchBio =
          item.bio
            .toLowerCase()
            .includes(q);

        const matchLocation = `
          ${item.location}
          ${item.district}
          ${item.province}
        `
          .toLowerCase()
          .includes(q);

        const matchSkills =
          item.skills.some((skill) =>
            skill
              .toLowerCase()
              .includes(q),
          );

        const matchInterests =
          item.interests.some((interest) =>
            interest
              .toLowerCase()
              .includes(q),
          );

        return (
          matchName ||
          matchBio ||
          matchLocation ||
          matchSkills ||
          matchInterests
        );
      }

      return true;
    });
  } catch (error) {
    console.error(
      "Failed to fetch volunteers:",
      error,
    );

    // Fall back to demo data if API fails
    return volunteersDemoData;
  }
}

export async function getVolunteerById(
  id: string,
): Promise<Volunteer | null> {
  try {
    const remoteData =
      await fetchApi<SingleVolunteerResponse>(
        `/api/volunteers/${id}`,
      );

    if (
      remoteData?.data?.opportunity
    ) {
      return mapVolunteer(
        remoteData.data.opportunity,
      );
    }
  } catch (error) {
    console.error(
      `Failed to fetch volunteer ${id}:`,
      error,
    );
  }

  // Fallback to demo data
  const found =
    volunteersDemoData.find(
      (volunteer) =>
        volunteer.id === id,
    );

  return found || null;
}