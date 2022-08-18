import React from "react";
import "./NavBar.css";

import NavLinks from "./NavLinks";
import NavHeader from "./NavHeader";
import { NavLink } from "react-router-dom";
function NavBar({ color, setColorText, setColor }) {
  const handleColorText = () => {
    setColorText("");
    setColor("");
  };
  return (
    <nav className="main-navbar">
      <NavHeader />
      <NavLink onClick={handleColorText} className="nav-links" to="/">
        By Color
      </NavLink>
      <ul>
        <NavLinks
          color={color}
          setColor={setColor}
          setColorText={setColorText}
        />
      </ul>
    </nav>
  );
}

export default NavBar;
