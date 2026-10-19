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
      <Nav />
      <Actions />
    </header>
  );
};

export default Header;
