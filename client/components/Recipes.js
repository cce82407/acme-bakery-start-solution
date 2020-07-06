import React from "react";
import { createChef, createRecipe } from "../actions/actionCreators";

export class Recipes extends React.Component {
    constructor() {
      super();
    } 
  
    render(){
        return (
  
        );
    }
  }

const mapStateToProps = () => {}

const mapDispatchToProps = () => {}

const connectedRecipes = connect(mapStateToProps, mapDispatchToProps)(Recipes);
export default connectedRecipes;