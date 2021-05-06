import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./css/reset.css";

const vh=window.innerHeight;
console.log(vh);
document.getElementById('root').style.height=vh+'px';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Home />
  </BrowserRouter>,
  document.getElementById('root')
);