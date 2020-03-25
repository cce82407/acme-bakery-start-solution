import React from 'react';
import { connect } from 'react-redux';
import RecipeCard from './RecipeCard';

const Recipes = ({ recipes })=> {
  return (
    <ul>
      {
        recipes.map( recipe => {
          return (
            <RecipeCard name={ recipe.name } key={ recipe.id }/>
          );
        })
      }
    </ul>
  );
};

const mapStateToProps = ({ recipes})=> {
  return {
    recipes
  };
};
export default connect(mapStateToProps)(Recipes);
