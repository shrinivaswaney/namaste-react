import { useState } from "react";
import { list } from "../utils/constant";
import Card from "./Card";
import SearchBar from "./SearchBar";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "top-rated", label: "Top Rated Restaurants" },
  { id: "near-you", label: "Near You" },
];

const applyFilter = (filterId) => {
  switch (filterId) {
    case "top-rated":
      return list.filter((res) => res.rating > 4.3);
    case "near-you":
      return [...list]
        .filter((a) => a.distanceKm < 2)
        .sort((a, b) => a.distanceKm - b.distanceKm);
    case "all":
    default:
      return list;
  }
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
  // superpowered state react variable
  const [restaurants, setRestaurants] = useState(list);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilter = (filterId) => {
    setActiveFilter(filterId);
    setRestaurants(applyFilter(filterId));
  };

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
        <FilterGroup activeFilter={activeFilter} onSelect={handleFilter} />
        <SearchBar />
      </div>
      <div className="scroll-container">
        {restaurants.map((res) => (
          <Card key={res.id} res={res} />
        ))}
      </div>
    </section>
  );
};

export default MainContent;
