import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import List from "./pages/List";
import Filter from "./pages/Filter";
import Home from "./pages/Home";
import "./css/reset.css";

const rootVh=window.innerHeight;
console.log(rootVh);
document.getElementById('root').style.height=rootVh+'px';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/list">
          <List />
      </Route>
      <Route path="/filter">
          <Filter />
      </Route>
      <Route path="/">
          <Home/>
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);