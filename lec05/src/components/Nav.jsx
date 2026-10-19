import { navlinks } from "../utils/constant";

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

export default Nav;
