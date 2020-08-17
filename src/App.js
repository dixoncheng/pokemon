import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import List from "./components/List";
import Details from "./components/Details";

import store from "./store";
import "./App.css";

const App = () => (
  <Provider store={store}>
    <div className="app">
      <div className="inner">
        <Router>
          <header>
            <h1>
              <Link to="/">My Pokedex</Link>
            </h1>
          </header>
          <Switch>
            <Route path="/details/:name">
              <Details />
            </Route>
            <Route path="/">
              <List />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  </Provider>
);

export default App;
