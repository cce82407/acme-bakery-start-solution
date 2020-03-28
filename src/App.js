import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'
import Nav from './Nav'
import Recipes from './Recipes'
import Chefs from './Chefs'
import { loadChefs, loadRecipes } from './store'
import SingleChef from './SingleChef'

class App extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.props.load()
  }
  render() {
    return (
      <HashRouter>
        <h1>The Acme Bakery</h1>
        <Route component={Nav} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/chefs" exact component={Chefs} />
        <Route path="/chefs/:id" component={SingleChef} />
      </HashRouter>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => {
      dispatch(loadRecipes())
      dispatch(loadChefs())
    }
  }
}


export default connect(null, mapDispatchToProps)(App)

