import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
function RGBButton({ color, setColor, colorText, setColorText }) {
  const { path } = useRouteMatch();

  const randomRGB = () => {
    let rounded = Math.round;
    let random = Math.random;
    return `rgba(${rounded(random() * 255)},
    ${rounded(random() * 255)},
    ${rounded(random() * 255)},
    ${random().toFixed(1)})`;
  };

  const handleChangeColor = (event) => {
    setColor(randomRGB())
    const body = event.target.parentNode.parentNode.parentNode.parentNode;
    body.style.backgroundColor = color;
    setColorText(color)
  }
  return (
    <Route path={path}>
      <h3>RGBA Code: {colorText}</h3>
      <button onClick={handleChangeColor}>Flip RGBA</button>
    </Route>
  );
}

export default RGBButton;
