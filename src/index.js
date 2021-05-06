import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import "./css/reset.css";

const vh=window.innerHeight;
console.log(vh);
document.getElementById('root').style.height=vh+'px';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);