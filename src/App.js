import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import Nav from './Nav';
import { loadChefs, loadRecipes } from './store';

class App extends Component{
  constructor(){
    super();
  }
  componentDidMount(){
    this.props.load();
  }
  render(){
    return (
      <HashRouter>
        <h1>The Acme Bakery</h1>
        <Route component={ Nav } />
        <Route path='/recipes' component={ Recipes } />
      </HashRouter>
    );
  }
};

const mapDispatchToProps = (dispatch)=> {
  return {
    load: ()=> {
      dispatch(loadChefs())
      dispatch(loadRecipes())
    }
  };
};


export default connect(null, mapDispatchToProps)(App);

