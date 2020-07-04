import React, { Component } from "react";
import { connect } from "react-redux";
import { createChef, createRecipe } from "../actions/actionCreators";

//default form is a chef form, chef is null because we don't have a user id yet and is false because it is defaulted to chef
class Form extends Component {
  constructor() {
    super();
    this.state = {
      isRecipeForm: this.props.isRecipeForm,
      chefOptions: this.props.chefOptions,
      name: "",
      chef: null,
    };
  }
  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ name: value });
  };

  handleClick = () => {
    const fullName = this.state.name.split();
    const firstName = fullName[0];
    let lastName = "";
    if (fullName.length > 1) {
      lastName = fullName.slice(-1);
    }
    const recipeName = this.state.name;
    const chef = this.state.chef;
    const action = this.state.isRecipeForm ? createRecipe : createChef;
    const params = this.state.isRecipeForm
      ? { recipeName, chef }
      : { firstName, lastName };
    dispatch(action(params));
  };

  render() {
    return (
      <>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        {this.state.isRecipeForm ? (
          <ChefDropdown options={this.state.chefOptions} />
        ) : null}
        <button onClick={this.handleClick}>Create</button>
      </>
    );
  }
}
