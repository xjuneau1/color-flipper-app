import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

function HEXButtons({ color, setColor, colorText, setColorText, hexColor }) {
  const { path } = useRouteMatch();

  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  
  
  const handleChangeColor = (event) => {
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    setColor(hexColor)
    const body = event.target.parentNode.parentNode.parentNode.parentNode;
    body.style.backgroundColor = color;

    setColorText(color);
  };

  return (
    <Route path={path}>
      <h3>HEX Code: {colorText}</h3>
      <button onClick={handleChangeColor}>Flip HEX</button>
    </Route>
  );
}

export default HEXButtons;
