import React, { Component } from "react";

export default class ChefForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange({ target }) {
    const { value } = target;
    this.setState({ name: value });
  }

  handleClick() {
    this.props.onClickHandler(this.state.name);
  }

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
