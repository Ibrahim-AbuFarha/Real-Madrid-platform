import { Link } from "react-router-dom";
import logo from "./images/header_logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

import "./header.css";
function Header() {
  return (
    <nav>
      <div className="header-container">
        <a href="#" className="logo">
          <img src={logo} />
        </a>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Matches</a>
          </li>
          <li>
            <a href="#">Players</a>
          </li>
          <li>
            <a href="#">Club</a>
          </li>
          <li>
            <Link to="/posts">Community</Link>
          </li>
        </ul>
        <span className="burger-menu">
          <GiHamburgerMenu />
        </span>
      </div>
    </nav>
  );
}

export default Header;
