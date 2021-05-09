import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./css/reset.css";

const rootVh=window.innerHeight;
document.getElementById('root').style.height=rootVh+'px';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);