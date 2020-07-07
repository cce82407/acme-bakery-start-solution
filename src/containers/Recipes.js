import React, { Component } from "react";
import { connect } from "react-redux";
import { loadRecipes, createRecipe } from "../actions/actionCreators";
import RecipeForm from "../components/RecipeForm";
import List from "../components/List";

class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      name: {
        name,
      },
    };
  }

  componentDidMount() {
    const { dispatchLoadRecipes } = this.props;

    dispatchLoadRecipes();
  }

  render() {
    return (
      <>
        <RecipeForm
          onClickHandler={this.props.dispatchCreateRecipe}
          chef={this.props.chef}
          chefOptions={this.props.chefOptions}
        />
        <List items={this.props.recipes} />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    recipes: state.recipes,
    chef: state.selected,
    chefOptions: state.chefs,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchCreateRecipe: () => dispatch(createRecipe(ownProps.name)),
    dispatchLoadRecipes: () => dispatch(loadRecipes),
  };
};

const ConnectedRecipes = connect(mapStateToProps, mapDispatchToProps)(Recipes);
export default ConnectedRecipes;
