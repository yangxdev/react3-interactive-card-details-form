import logo from "./logo.svg";
import "./App.css";
import "./style/fonts.css";
import "./style/vars.css";
import React from "react";
import background from "./image/bg-main-desktop.png";

function App() {
  return (
    <div className="main">
      <div className="backgrounds">
        <div
          className="background-left"
          style={{ backgroundImage: `url(${background})` }}
        >
          
        </div>
        <div className="background-right"></div>
      </div>
    </div>
  );
}

export default App;
