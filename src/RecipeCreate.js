import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRecipe } from './store';

class RecipeCreate extends Component{
  constructor(){
    super();
    this.state = {
      name: '',
      chefId: '',
      error: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  async onSubmit(ev){
    ev.preventDefault();
    try {
      await this.props.save({ name: this.state.name, chefId: this.state.chefId });
      this.setState({ error: '', chefId: '', name: ''});
    }
    catch(ex){
      console.log(ex);
      this.setState({ error: ex.response.data.message});
    }
  }
  render(){
    const { onSubmit } = this;
    const { chefs } = this.props;
    const { name, error, chefId } = this.state;
    return (
      <form onSubmit={ onSubmit }>
        {
          error
        }
        <input value={ name } onChange={ ev => this.setState({ name: ev.target.value })}/>
        <select value={ chefId } onChange={ ev => this.setState({ chefId: ev.target.value })}>
          <option value=''>-- choose a chef --</option>
          {
            chefs.map( chef => {
              return (
                <option key={ chef.id } value={ chef.id }>{ chef.name }</option>
              );
            })

          }
        </select>
        <button disabled={ !name || !chefId }>Create</button>
      </form>
    );
  }
};

const mapDispatchToProps = (dispatch)=> {
  return {
    save: (recipe)=> dispatch(createRecipe(recipe))
  };
};

const mapStateToProps = ({chefs})=> {
  return {
    chefs
  };
}; 

const Connected = connect(mapStateToProps, mapDispatchToProps)(RecipeCreate);

export default Connected;
