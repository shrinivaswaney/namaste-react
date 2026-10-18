import {
  BellIcon,
  GlobeIcon,
  HouseIcon,
  PhoneCallIcon,
  ShoppingCartIcon,
} from "@phosphor-icons/react";
import { logo } from "../default";

const navlinks = [
  { label: "Home", href: "/", icon: HouseIcon },
  { label: "About Us", href: "/about", icon: GlobeIcon },
  { label: "Contact Us", href: "/contact", icon: PhoneCallIcon },
];

const Nav = () => {
  return (
    <nav className="nav-items">
      <ul>
        {navlinks.map((item, idx) => {
          return (
            <li key={idx}>
              <a href={item.href}>
                <item.icon size={20} />
                <p>{item.label}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const Actions = () => {
  return (
    <div className="actions">
      <button aria-label="Notifications">
        <BellIcon size={20} />
      </button>
      <button aria-label="Shopping Cart">
        <ShoppingCartIcon size={20} />
      </button>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Fooder Logo" />
        <h1>Fooder</h1>
      </div>
      <Nav />
      <Actions />
    </header>
  );
};

export default Header;
