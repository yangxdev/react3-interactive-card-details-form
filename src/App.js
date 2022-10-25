import logo from "./logo.svg";
import "./App.css";
import "./style/fonts.css";
import "./style/vars.css";
import React from "react";
import background from "./image/bg-main-desktop.png";
import cardFront from "./image/bg-card-front.png";
import cardBack from "./image/bg-card-back.png";
import { Form } from "./component/form.js";

function App() {
  return (
    <div className="main">
      <div className="backgrounds">
        <div
          className="background-left"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className="background-right"></div>
      </div>
      <div className="container">
        <div className="left-content">
          <div
            className="card-front"
            style={{ backgroundImage: `url(${cardFront})` }}
          ></div>
          <div
            className="card-back"
            style={{ backgroundImage: `url(${cardBack})` }}
          ></div>
        </div>
        <div className="right-content">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
