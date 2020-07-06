import React from "react";
import { connect } from "react-redux";
import Form from "./ChefForm";
import List from "../components/List";
import { createChef } from "../actions/actionCreators";

export class Chefs extends React.Component {
  constructor() {
    super();
    this.state = {
      name: {
        name,
      },
    };
  }

  render() {
    return (
      <>
        <Form onClickHandler={this.props.dispatchCreateChef} />
        <List items={this.props.chefs} />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    chefs: state.chefs,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchCreateChef: () => dispatch(createChef(ownProps.name)),
  };
};

const connectedChefs = connect(mapStateToProps, mapDispatchToProps)(Chefs);
export default connectedChefs;
