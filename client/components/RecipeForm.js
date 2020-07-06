import React from "react";
import { connect } from "react-redux";
import Form from "./ChefForm";
import List from "../components/List";
import { createRecipe } from "../actions/actionCreators";

export default class RecipeForm extends Component {
  constructor() {
    super();
    this.state = {
      chefOptions: this.props.chefOptions,
      name: "",
      chef: this.props.chef,
    };
  }
  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ name: value });
  };

  handleClick = () => {
    this.props.onClickHandler();
    const recipeName = this.state.name;
    const chef = this.state.chef;
    dispatch(createRecipe({ recipeName, chef }));
  };

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
