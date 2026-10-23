import { CaretDownIcon, UserIcon } from "@phosphor-icons/react";
import { navItems } from "../constants/nav";

const Header = ({ location, locationStatus, onLocationChange }) => {
  const logo = (
    <div className="logo">
      <h1>S</h1>
    </div>
  );

  const label =
    locationStatus === "loading"
      ? "Locating…"
      : (location?.label ?? "Select location");

  const loc = (
    <div className="location">
      <a className="other">Other</a>
      <a className="muted">{label}</a>
      <CaretDownIcon
        size={20}
        style={{ color: "var(--orange)" }}
        onClick={() => console.log("dropdown clicked")}
      />
    </div>
  );

  const navLinks = (
    <nav className="navbar">
      {navItems.map((item) => (
        <a key={item.id} href={item.href}>
          <span>
            <item.icon size={20} weight="bold" />
            <p>{item.label}</p>
          </span>
          <p>{item.sub}</p>
        </a>
      ))}
    </nav>
  );

  return (
    <header>
      {logo}
      {loc}
      {navLinks}
      <button className="singin" onClick={() => console.log("sign in clicked")}>
        <UserIcon size={20} weight="bold" />
        <p>Sign In</p>
      </button>
    </header>
  );
};

export default Header;
