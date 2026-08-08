import { useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import type { LatLngExpression } from "leaflet";
import { Search, X } from "lucide-react";
import { AnimatedButton } from "@/components/AnimatedButton";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteNav } from "@/components/site/site-nav";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { gsap, registerGsap } from "@/lib/gsap";
import {
  opportunities,
  Opportunity,
  categoryButtons,
  categoryLabels,
  provinceDistricts,
} from "@/data/exploreData";
import "leaflet/dist/leaflet.css";
import "./explore.css";

const nepalCenter: LatLngExpression = [28.1658, 84.2279];
const nepalZoom = 7;

const categoryColors: Record<string, string> = {
  blood: "#b6172b",
  food: "#c0771b",
  clothing: "#6d4b26",
  medical: "#1f5e8d",
  books: "#375f2b",
  furniture: "#5c4c3a",
  electronics: "#2a4a5d",
  volunteers: "#5d2f72",
};

function createMarkerIcon(color: string, L: typeof import("leaflet")) {
  return new L.DivIcon({
    html: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='${color}'><path d='M12 2c-3.314 0-6 2.686-6 6 0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6zm0 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z'/></svg>`,
    className: "explore-marker-icon",
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -40],
  });
}

function getPopupHtml(item: Opportunity) {
  return `
    <div class="popup-card">
      <strong>${item.title}</strong>
      <p>${item.location.city}, ${item.location.province}</p>
      <p>${categoryLabels[item.category]}</p>
      <button class="popup-view-button" data-id="${item.id}">View opportunity</button>
    </div>
  `;
}

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Help.com — Explore" },
      { name: "description", content: "Explore help opportunities across Nepal." },
    ],
  }),
  component: ExplorePage,
});

function ExplorePage() {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [urgency, setUrgency] = useState("all");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState("newest");
  const [selectedOpportunityId, setSelectedOpportunityId] = useState<string | null>(null);
  const [searchMode, setSearchMode] = useState<"map" | "list">("map");
  const [detailOpen, setDetailOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const mapRef = useRef<any>(null);
  const markerGroupRef = useRef<any>(null);
  const leafletRef = useRef<typeof import("leaflet") | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const leftPanelRef = useRef<HTMLDivElement | null>(null);
  const centerPanelRef = useRef<HTMLDivElement | null>(null);
  const rightPanelRef = useRef<HTMLDivElement | null>(null);
  const workspaceRef = useRef<HTMLDivElement | null>(null);

  const query = router.state.location.search;

  useEffect(() => {
    const params = new URLSearchParams(query);
    const categoryParam = params.get("category");
    if (categoryParam) {
      setCategory(categoryParam);
    }
  }, [query]);

  const filteredOpportunities = useMemo(() => {
    return opportunities
      .filter((item) => {
        if (category !== "all" && item.category !== category) return false;
        if (province && item.location.province !== province) return false;
        if (district && item.location.district !== district) return false;
        if (status !== "all" && item.status !== status) return false;
        if (urgency !== "all" && item.urgency !== urgency) return false;
        if (category === "blood" && bloodGroup && item.bloodGroup !== bloodGroup) return false;

        const searchTerm = search.trim().toLowerCase();
        if (!searchTerm) return true;

        const haystack = [
          item.title,
          item.description,
          item.category,
          item.location.province,
          item.location.district,
          item.location.city,
          item.bloodGroup ?? "",
          item.organization,
          item.tags.join(" "),
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(searchTerm);
      })
      .sort((a, b) => {
        if (sort === "urgent") {
          if (a.urgency === b.urgency) return 0;
          return a.urgency === "urgent" ? -1 : 1;
        }
        if (sort === "nearest") {
          return 0;
        }
        return new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime();
      });
  }, [category, province, district, bloodGroup, urgency, status, search, sort]);

  const selectedOpportunity = useMemo(
    () => filteredOpportunities.find((item) => item.id === selectedOpportunityId) ?? filteredOpportunities[0] ?? null,
    [filteredOpportunities, selectedOpportunityId],
  );

  useEffect(() => {
    if (!selectedOpportunity && filteredOpportunities.length > 0) {
      setSelectedOpportunityId(filteredOpportunities[0].id);
    }
  }, [filteredOpportunities, selectedOpportunity]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!mapContainerRef.current) return;

    let map: any = null;
    let markerGroup: any = null;
    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled) return;
      leafletRef.current = L;
      map = L.map(mapContainerRef.current!, {
        center: nepalCenter,
        zoom: nepalZoom,
        scrollWheelZoom: true,
        zoomControl: true,
        attributionControl: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      mapRef.current = map;
      markerGroup = L.layerGroup().addTo(map);
      markerGroupRef.current = markerGroup;
    });

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      markerGroupRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    const markerGroup = markerGroupRef.current;
    const L = leafletRef.current;
    if (!map || !markerGroup || !L) return;

    markerGroup.clearLayers();

    filteredOpportunities.forEach((item) => {
      const marker = L.marker([item.location.lat, item.location.lng], {
        icon: createMarkerIcon(categoryColors[item.category] ?? "#5d2f72", L),
      });

      marker.on("click", () => {
        setSelectedOpportunityId(item.id);
        setDetailOpen(true);
      });

      marker.bindPopup(getPopupHtml(item), { className: "explore-popup" });

      marker.on("popupopen", (event: any) => {
        const popupEl = event.popup.getElement();
        if (!popupEl) return;
        const button = popupEl.querySelector<HTMLButtonElement>(".popup-view-button");
        if (!button) return;
        button.addEventListener("click", () => {
          setSelectedOpportunityId(item.id);
          setDetailOpen(true);
        });
      });

      marker.addTo(markerGroup);
    });
  }, [filteredOpportunities]);

  useEffect(() => {
    if (!selectedOpportunity) return;
    const map = mapRef.current;
    if (!map) return;

    map.flyTo([selectedOpportunity.location.lat, selectedOpportunity.location.lng], 11, { duration: 0.8 });
  }, [selectedOpportunity]);

  useEffect(() => {
    if (!workspaceRef.current) return;
    registerGsap();

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { duration: 0.52, ease: "power3.out" } });
      timeline
        .from(leftPanelRef.current, { opacity: 0, x: -28 }, 0)
        .from(centerPanelRef.current, { opacity: 0, y: 26 }, 0.1)
        .from(rightPanelRef.current, { opacity: 0, x: 28 }, 0.15);
    }, workspaceRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!centerPanelRef.current) return;
    const cards = centerPanelRef.current.querySelectorAll(".explore-card");
    if (!cards.length) return;
    registerGsap();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.32,
          stagger: 0.04,
          ease: "power3.out",
        },
      );
    }, centerPanelRef);

    return () => ctx.revert();
  }, [filteredOpportunities.length, search, category, province, district, bloodGroup, urgency, status, sort]);

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setDistrict("");
    setBloodGroup("");
    const params = new URLSearchParams(router.state.location.search);
    if (value === "all") {
      params.delete("category");
    } else {
      params.set("category", value);
    }
    router.navigate({ search: params.toString() });
  };

  const handleClearFilters = () => {
    setSearch("");
    setCategory("all");
    setProvince("");
    setDistrict("");
    setBloodGroup("");
    setUrgency("all");
    setStatus("all");
    setSort("newest");
    setSelectedOpportunityId(null);
    setMobileFiltersOpen(false);
    const params = new URLSearchParams(router.state.location.search);
    params.delete("category");
    router.navigate({ search: params.toString() });
  };

  const currentDistricts = province ? provinceDistricts[province] ?? [] : [];

  const detailActionLabel = selectedOpportunity?.actionLabel ?? "View";

  return (
    <div className="explore-page">
      <SiteNav />
      <main className="explore-shell">
        <section className="explore-hero">
          <p className="eyebrow">EXPLORE HELP.COM</p>
          <h1>Find where your help is needed.</h1>
          <p className="explore-supporting-text">
            Discover donation requests, blood needs, and volunteer opportunities from communities and organizations across Nepal.
          </p>
        </section>

        <section className="explore-body" ref={workspaceRef}>
          <div className="explore-mobile-actions">
            <div className="explore-mobile-toggle">
              <button type="button" className={searchMode === "map" ? "active" : ""} onClick={() => setSearchMode("map")}>Map</button>
              <button type="button" className={searchMode === "list" ? "active" : ""} onClick={() => setSearchMode("list")}>List</button>
            </div>
            <button type="button" className="explore-filter-button" onClick={() => setMobileFiltersOpen(true)}>
              Filters
            </button>
          </div>

          {mobileFiltersOpen ? <div className="explore-drawer-backdrop" onClick={() => setMobileFiltersOpen(false)} /> : null}

          <aside className={`explore-sidebar ${mobileFiltersOpen ? "mobile-open" : ""}`} ref={leftPanelRef}>
            <div className="explore-sidebar-inner">
              <div className="explore-sidebar-header">
                <div>
                  <p className="eyebrow">FILTERS</p>
                  <h2>Refine your search</h2>
                </div>
                <button type="button" className="explore-filter-close" onClick={() => setMobileFiltersOpen(false)}>
                  Close
                </button>
              </div>

              <div className="explore-filter-panel">
                <div className="explore-filter-section">
                  <h3>Search</h3>
                  <div className="explore-search explore-search-sidebar">
                    <Search className="explore-search-icon" />
                    <input
                      ref={searchInputRef}
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search blood, food, volunteers, Kathmandu..."
                      aria-label="Search opportunities"
                    />
                    {search ? (
                      <button
                        type="button"
                        onClick={() => setSearch("")}
                        aria-label="Clear search"
                        className="explore-search-clear"
                      >
                        <X className="size-4" />
                      </button>
                    ) : null}
                  </div>
                </div>

                <div className="explore-filter-section">
                  <h3>Category</h3>
                  <div className="explore-filter-grid explore-category-grid">
                    {categoryButtons.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className={`explore-filter-chip ${item.id === category ? "active" : ""}`}
                        onClick={() => handleCategoryChange(item.id)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="explore-filter-section">
                  <h3>Location</h3>
                  <label>
                    <span>Province</span>
                    <select value={province} onChange={(event) => {
                      setProvince(event.target.value);
                      setDistrict("");
                    }}>
                      <option value="">All provinces</option>
                      {Object.keys(provinceDistricts).map((provinceName) => (
                        <option key={provinceName} value={provinceName}>
                          {provinceName}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    <span>District</span>
                    <select
                      value={district}
                      onChange={(event) => setDistrict(event.target.value)}
                      disabled={!province}
                    >
                      <option value="">All districts</option>
                      {currentDistricts.map((districtName) => (
                        <option key={districtName} value={districtName}>
                          {districtName}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                {category === "blood" ? (
                  <div className="explore-filter-section">
                    <h3>Blood group</h3>
                    <div className="explore-filter-grid">
                      {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
                        <button
                          key={group}
                          type="button"
                          className={`explore-filter-chip ${group === bloodGroup ? "active" : ""}`}
                          onClick={() => setBloodGroup(group)}
                        >
                          {group}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="explore-filter-section">
                  <h3>Urgency</h3>
                  <div className="explore-filter-grid">
                    {[
                      { id: "all", label: "All" },
                      { id: "urgent", label: "Urgent" },
                      { id: "normal", label: "Normal" },
                    ].map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        className={`explore-filter-chip ${option.id === urgency ? "active" : ""}`}
                        onClick={() => setUrgency(option.id)}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="explore-filter-section">
                  <h3>Status</h3>
                  <div className="explore-filter-grid">
                    {[
                      { id: "all", label: "All" },
                      { id: "open", label: "Open" },
                      { id: "available", label: "Available" },
                      { id: "completed", label: "Completed" },
                    ].map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        className={`explore-filter-chip ${option.id === status ? "active" : ""}`}
                        onClick={() => setStatus(option.id)}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button type="button" className="explore-clear-filters-sidebar" onClick={handleClearFilters}>
                  Clear filters
                </button>
              </div>
            </div>
          </aside>

          <main className="explore-results-panel" ref={centerPanelRef}>
            <div className="explore-results-header">
              <div>
                <p className="eyebrow">OPPORTUNITIES</p>
                <h2>{filteredOpportunities.length} {filteredOpportunities.length === 1 ? "opportunity" : "opportunities"}</h2>
              </div>
              <div className="explore-results-controls">
                <label>
                  Sort by
                  <select value={sort} onChange={(event) => setSort(event.target.value)}>
                    <option value="newest">Newest</option>
                    <option value="urgent">Urgent first</option>
                    <option value="nearest">Nearest</option>
                  </select>
                </label>
              </div>
            </div>

            {filteredOpportunities.length === 0 ? (
              <div className="explore-empty-state">
                <h3>No opportunities found.</h3>
                <p>Try changing your search or filters.</p>
                <AnimatedButton asChild>
                  <button type="button" onClick={handleClearFilters}>Clear filters</button>
                </AnimatedButton>
              </div>
            ) : (
              <div className={`explore-results-grid ${searchMode === "map" ? "mobile-hidden" : ""}`}>
                {filteredOpportunities.map((item) => (
                  <article
                    key={item.id}
                    className={`explore-card ${item.id === selectedOpportunity?.id ? "selected" : ""}`}
                    onClick={() => {
                      setSelectedOpportunityId(item.id);
                      setDetailOpen(true);
                    }}
                  >
                    <div className="explore-card-header">
                      <span className="explore-card-category">{categoryLabels[item.category].toUpperCase()}</span>
                      <span className={`explore-card-urgency ${item.urgency === "urgent" ? "urgent" : "normal"}`}>
                        {item.urgency.toUpperCase()}
                      </span>
                    </div>
                    <h3>{item.title}</h3>
                    <p className="explore-card-meta">
                      {item.bloodGroup ? `${item.bloodGroup} · ` : ""}
                      {item.location.city}, {item.location.province}
                    </p>
                    <p className="explore-card-body">{item.description}</p>
                    <div className="explore-card-details">
                      <span>{item.location.district ? `${item.location.district}, ` : ""}{item.location.province}</span>
                      <span>{item.organization}</span>
                    </div>
                    <div className="explore-card-footer">
                      <span>{item.status === "open" ? "Open" : item.status === "available" ? "Available" : "Completed"}</span>
                      <span className="explore-card-cta">View →</span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </main>

          <aside className={`explore-map-panel ${searchMode === "list" ? "mobile-hidden" : ""}`} ref={rightPanelRef}>
            <div className="explore-map-shell">
              <div className="explore-map-header">
                <div>
                  <p className="eyebrow">MAP</p>
                  <h2>Active locations</h2>
                </div>
                <div className="explore-map-key">
                  <span></span>
                  <span>{filteredOpportunities.length} markers</span>
                </div>
              </div>
              <div className="explore-map" ref={mapContainerRef} />
            </div>
          </aside>
        </section>
      </main>

      <SiteFooter />



      <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedOpportunity?.title ?? "Opportunity details"}</DialogTitle>
            <DialogDescription>{selectedOpportunity?.location.city}, {selectedOpportunity?.location.province}</DialogDescription>
          </DialogHeader>
          {selectedOpportunity ? (
            <div className="explore-detail-content">
              <div className="explore-detail-meta">
                <span>{categoryLabels[selectedOpportunity.category]}</span>
                <span>{selectedOpportunity.status.toUpperCase()}</span>
                {selectedOpportunity.bloodGroup ? <span>{selectedOpportunity.bloodGroup}</span> : null}
              </div>
              <p>{selectedOpportunity.description}</p>
              <div className="explore-detail-grid">
                <div>
                  <h4>Organization</h4>
                  <p>{selectedOpportunity.organization}</p>
                </div>
                <div>
                  <h4>Location</h4>
                  <p>{selectedOpportunity.location.city}, {selectedOpportunity.location.district}, {selectedOpportunity.location.province}</p>
                </div>
                <div>
                  <h4>Urgency</h4>
                  <p>{selectedOpportunity.urgency}</p>
                </div>
                <div>
                  <h4>Status</h4>
                  <p>{selectedOpportunity.status}</p>
                </div>
                <div>
                  <h4>Posted</h4>
                  <p>{new Date(selectedOpportunity.postedAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          ) : null}
          <DialogFooter>
            <AnimatedButton asChild>
              <button className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground">{detailActionLabel}</button>
            </AnimatedButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
