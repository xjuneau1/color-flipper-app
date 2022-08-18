import "./FlipButton.css";

import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import RGBButton from "./RGBButton";
import HEXButton from "./HEXButton";

function FlipButton({ color, setColor, colorText, setColorText, hexColor }) {
  const { path } = useRouteMatch();

  const colors = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
  ];

  const handleChangeColor = (event) => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex]);

    const body = event.target.parentNode.parentNode.parentNode.parentNode;
    body.style.backgroundColor = color;
    
    
    setColorText(color);
  };

  return (
    <div className="flip-container">
      <Switch>
      <Route exact path={path}>
        <h3>Current Color:  {colorText.split(/(?=[A-Z])/).join(' ')}</h3>
        <button onClick={handleChangeColor}>Flip Color</button>
      </Route>
      <Route path={`${path}RGBA`}>
        <RGBButton
          color={color}
          setColor={setColor}
          colorText={colorText}
          setColorText={setColorText}
        />
      </Route>
      <Route path={`${path}HEX`}>
        <HEXButton
          color={color}
          setColor={setColor}
          colorText={colorText}
          setColorText={setColorText}
          hexColor={hexColor}
        />
      </Route>
    </Switch>
    </div>
  );
}

export default FlipButton;
