import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import List from "./pages/List";
import Filter from "./pages/Filter";
import Home from "./pages/Home";
import "./css/reset.css";

const vh=window.innerHeight;
console.log(vh);
document.getElementById('root').style.height=vh+'px';

ReactDOM.render(
  <BrowserRouter>
    <Header />

    <Switch>
      <Route path="/list">
          <List />
      </Route>
      <Route path="/filter">
          <Filter />
      </Route>
      <Route path="/">
          <Home />
      </Route>
    </Switch>

  </BrowserRouter>,
  document.getElementById('root')
);