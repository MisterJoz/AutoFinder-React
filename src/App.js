import React from "react";
import logo from "./logo.svg";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const TrucksPage = () => (
  <div>
    <h1>Trucks Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/trucks" component={TrucksPage} />
      </Switch>
    </div>
  );
}

export default App;
