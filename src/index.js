import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/reset.css";

const rootVh=window.innerHeight;
document.getElementById('root').style.height=rootVh+'px';
const optionData = {
  c01: false,
  c02: false,
  c04: false,
  c06: false,
  c07: false,
  c11: false,
  c12: false,
  child: false,
  card: false,
  parking: false,
  wifi: false,
  private_room: false,
  tatami: false,
  non_smoking: false,
  barrier_free: false,
  lunch: false,
  english: false,
  pet: false,
  range:""
};

ReactDOM.render(
  <BrowserRouter>
    <App options={optionData}/>
  </BrowserRouter>,
  document.getElementById('root')
);