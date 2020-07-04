import React from "react";

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