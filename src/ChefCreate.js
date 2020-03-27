import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createChef } from './store';

class ChefCreate extends Component{
  constructor(){
    super();
    this.state = {
      name: '',
      error: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  async onSubmit(ev){
    ev.preventDefault();
    try {
      await this.props.save({ name: this.state.name});
    }
    catch(ex){
      this.setState({ error: ex.response.data.message});
    }
  }
  render(){
    const { onSubmit } = this;
    const { name, error } = this.state;
    return (
      <form onSubmit={ onSubmit }>
        {
          error
        }
        <input value={ name } onChange={ ev => this.setState({ name: ev.target.value })}/>
        <button disabled={ !name }>Create</button>
      </form>
    );
  }
};

const mapDispatchToProps = (dispatch)=> {
  return {
    save: (chef)=> dispatch(createChef(chef))
  };
};

const Connected = connect(null, mapDispatchToProps)(ChefCreate);

export default Connected;
