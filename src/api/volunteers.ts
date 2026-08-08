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

export async function getVolunteers(
  filters?: VolunteerFilters,
): Promise<Volunteer[]> {
  const remoteData = await fetchApi<Volunteer[]>("/api/volunteers");
  const dataset =
    remoteData && Array.isArray(remoteData) ? remoteData : volunteersDemoData;

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
  const remoteData = await fetchApi<Volunteer>(`/api/volunteers/${id}`);
  if (remoteData) return remoteData;

  const found = volunteersDemoData.find((v) => v.id === id);
  return found || null;
}
