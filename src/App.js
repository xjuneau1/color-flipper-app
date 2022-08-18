import "./App.css";

import React, { useState } from "react";
import NavBar from "./navbar/NavBar";
import FlipButton from "./flip-button/FlipButton";
import { Switch, Route } from "react-router-dom";

function App() {
  const [color, setColor] = useState("");
  const [colorText, setColorText] = useState("");
  let hexColor = "#";
  
  return (
    <div className="App">
      <NavBar color={color} setColor={setColor} setColorText={setColorText} />

      <Switch>
        <Route path="/">
          <FlipButton
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

export default App;
