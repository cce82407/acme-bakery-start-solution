import React, { Component } from "react";
import { createChef } from "../actions/actionCreators";

class ChefForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }
  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ name: value });
  };

  handleClick = () => {
    dispatch(createChef(this.state.name));
  };

  render() {
    return (
      <>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Create</button>
      </>
    );
  }
}
