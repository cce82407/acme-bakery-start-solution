import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import { HashRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import store from "./store";
import ConnectedChefs from "./containers/Chefs";
import ConnectedRecipes from "./containers/Recipes";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <HashRouter>
            <h1>The Acme Bakery</h1>
            <Link to="/chefs">chefs</Link>
            <br />
            <Link to="/recipes">recipes</Link>
            <br />
            <Switch>
              <Route path="/recipes">
                <ConnectedRecipes />
              </Route>
              <Route path="/chefs">
                <ConnectedChefs />
              </Route>
              <Redirect to="/chefs" />
            </Switch>
          </HashRouter>
        </Provider>
      </div>
    );
  }
}

//this connects our App to the store
