import React from "react";
import { connect } from "react-redux";


export class Chefs extends React.Component {
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

const connectedChefs = connect(mapStateToProps, mapDispatchToProps)(Chefs);
export default connectedChefs;