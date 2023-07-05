import { Link } from "react-router-dom";
import logo from "./images/header_logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../sidebar/Sidebar";

import "./header.css";
import { useState } from "react";
function Header() {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  return (
    <>
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
              <Link href="#">News</Link>
            </li>
            <li>
              <Link href="#">Matches</Link>
            </li>
            <li>
              <Link href="#">Players</Link>
            </li>
            <li>
              <Link href="#">Club</Link>
            </li>
            <li>
              <Link to="/posts">Community</Link>
            </li>
          </ul>
          <button
            onClick={() => setIsShowSidebar(!isShowSidebar)}
            className="burger-menu"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
      {isShowSidebar && <Sidebar onCloses={() => setIsShowSidebar(false)} />}
    </>
  );
}

export default Header;
