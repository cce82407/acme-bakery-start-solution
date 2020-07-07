import React, { Component } from "react";

class ChefDropdown extends Component {
  constructor() {
    super();
    this.state = {
      chefs: this.props.options,
      selected: null,
    };
  }
  onChange = ({ value }) => {
    this.setState({ selected: value });
  };

  render() {
    return (
      <select onChange={onChange}>
        {this.state.chefs.map((chef) => {
          <options value={chef.value}>{chef.label}</options>;
        })}
      </select>
    );
  }
}
