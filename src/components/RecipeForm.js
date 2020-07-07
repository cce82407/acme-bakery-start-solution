import React, { Component } from "react";
import ChefDropdown from "./ChefDropdown";

export default class RecipeForm extends Component {
  constructor() {
    super();
    this.state = {
      chefOptions: this.props.chefOptions,
      name: "",
      chef: this.props.chef,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange({ target }) {
    const { value } = target;
    this.setState({ name: value });
  }

  handleClick() {
    const recipeName = this.state.name;
    const chef = this.state.chef;
    this.props.onClickHandler({ recipeName, chef });
  }

  render() {
    return (
      <>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        (
        <ChefDropdown options={this.state.chefOptions} />)
        <button onClick={this.handleClick}>Create</button>
      </>
    );
  }
}
