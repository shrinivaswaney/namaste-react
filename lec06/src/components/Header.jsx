import { CaretDownIcon, MapPinIcon } from "@phosphor-icons/react";
import { logo } from "../../images/default";
import Actions from "./Actions";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Fooder Logo" />
        <h1>Fooder</h1>
      </div>

      {/* nav + city picker grouped on the left, like swiggy.com */}
      <div className="header-menu">
        <Nav />
        <button
          className="location"
          type="button"
          aria-label="Select delivery location"
        >
          <MapPinIcon className="location-pin" size={16} weight="fill" />
          <span>Nagpur, Maharashtra</span>
          <CaretDownIcon className="location-caret" size={10} weight="bold" />
        </button>
      </div>

      <Actions />
    </header>
  );
};

export default Header;
