import { useEffect, useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import SkeletonCard, { SKELETON_COUNT } from "./SkeletonCard";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "top-rated", label: "Top Rated Restaurants" },
  { id: "near-you", label: "Near You" },
];

const applyFilter = (filterId, restaurants) => {
  switch (filterId) {
    case "top-rated":
      return restaurants.filter((res) => res.rating > 4.1);
    case "near-you":
      return restaurants
        .filter((res) => res.distanceKm < 2.5)
        .sort((a, b) => a.distanceKm - b.distanceKm);
    case "all":
    default:
      return restaurants;
  }
};

const searchRestaurants = (searchQuery, restaurants) => {
  const query = searchQuery.trim().toLowerCase();
  if (!query) return restaurants;

  return restaurants.filter(
    (res) =>
      res.name.toLowerCase().includes(query) ||
      res.cuisines.join(" ").toLowerCase().includes(query) ||
      res.locality?.toLowerCase().includes(query),
  );
};

const FilterGroup = ({ activeFilter, onSelect }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {FILTERS.map((filter) => (
        <button
          key={filter.id}
          className={`filter ${activeFilter === filter.id ? "active" : ""}`}
          onClick={() => onSelect(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

const MainContent = () => {
  // whenever a state variable updates, react triggers a reconciliation cycle => re-renders the component
  const [restaurants, setRestaurants] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.14630&lng=79.08490&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );

      const json = await data?.json();

      const gridWidget = json?.data?.cards
        ?.map((c) => c?.card?.card)
        ?.find((card) => card?.id === "restaurant_grid_listing_v2");

      const restaurantList =
        gridWidget?.gridElements?.infoWithStyle?.restaurants ?? [];

      // console.log(restaurantList);

      setRestaurants(
        restaurantList
          .map((r) => r?.info)
          .filter((info) => info?.id && info?.name)
          .map((info) => ({
            id: info.id,
            name: info.name,
            cloudinaryImageId: info.cloudinaryImageId,

            rating: info.avgRating,
            totalRatingsString: info.totalRatingsString,
            slaString: info.sla?.slaString,

            cuisines: info.cuisines ?? [],
            costForTwo: (info.costForTwo ?? "").replace(/[^\d]/g, ""),

            locality: info.locality ?? info.areaName,
            distanceKm: info.sla?.lastMileTravel,
            banner: [
              "Flat 10% off on pre-booking",
              "Up to 10% off with bank offers",
            ],
          })),
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilter = (filterId) => {
    setActiveFilter(filterId);
  };

  const visibleRestaurants = searchRestaurants(
    searchQuery,
    applyFilter(activeFilter, restaurants),
  );

  return (
    <section>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "10px",
        }}
      >
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <FilterGroup activeFilter={activeFilter} onSelect={handleFilter} />
      </div>
      <div className="scroll-container">
        {isLoading ? (
          Array.from({ length: SKELETON_COUNT }, (_, idx) => (
            <SkeletonCard key={idx} />
          ))
        ) : visibleRestaurants.length > 0 ? (
          visibleRestaurants.map((res) => <Card key={res.id} res={res} />)
        ) : (
          <p className="empty-state">
            {searchQuery.trim()
              ? `No restaurants match "${searchQuery.trim()}".`
              : "No restaurants found. Try a different filter."}
          </p>
        )}
      </div>
    </section>
  );
};

export default MainContent;
