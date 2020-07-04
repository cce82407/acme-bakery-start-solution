import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import configureStore from "./store";
import Chefs from "./containers/Chefs";
import Recipes from "./containers/Recipes";

const store = configureStore();

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <h1>The Acme Bakery</h1>
          <Link to="/chefs" />
          <Link to="/recipes" />
          <Switch>
            <Route path="/chefs">
              <Chefs />
            </Route>
            <Route path="/recipes">
              <Recipes />
            </Route>
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

//this connects our App to the store
