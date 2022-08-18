import React from "react";
import { NavLink } from "react-router-dom";
import {randomRGB} from "../flip-button/RGBButton"
function NavLinks({color, setColor, hexColor, setColorText}) {
  const navLinks = {
    "Hex": "HEX",
    "RGBA": "RGBA",
  };
  
  const handleColorText = (event) =>{
    setColorText("");
    setColor("");
    
  }
  return (
    <ul>
      {Object.values(navLinks).map((name, index) => (
        <li>
          <NavLink onClick={handleColorText} className='nav-links' key={index} value={name} to={`/${name}`}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
