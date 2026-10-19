import { MagnifyingGlassIcon } from "@phosphor-icons/react";

const SearchBar = () => {
  return (
    <div className="search">
      <div className="search-icon">
        <MagnifyingGlassIcon
          width={20}
          height={20}
          style={{ backgroundColor: "white", marginRight: "2px" }}
        />
      </div>
      <input type="search" placeholder="Search..." />
    </div>
  );
};

export default SearchBar;
