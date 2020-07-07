import React, { Component } from "react";
import { connect } from "react-redux";
import ChefForm from "../components/ChefForm";
import List from "../components/List";
import { createChef, loadChefs } from "../actions/actionCreators";

class Chefs extends Component {
  constructor() {
    super();
    this.state = {
      name: name,
    };
  }
  componentDidMount() {
    const { dispatchLoadChefs } = this.props;

    dispatchLoadChefs();
  }

  render() {
    return (
      <>
        <ChefForm onClickHandler={this.props.dispatchCreateChef} />
        <List items={this.props.chefs} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.chefs);
  return {
    chefs: state.chefs,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchCreateChef: () => dispatch(createChef(ownProps.name)),
    dispatchLoadChefs: () => dispatch(loadChefs),
  };
};

const ConnectedChefs = connect(mapStateToProps, mapDispatchToProps)(Chefs);
export default ConnectedChefs;
