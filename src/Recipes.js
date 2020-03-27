import React from 'react'
import { connect } from 'react-redux'
import RecipeCard from './RecipeCard'
import RecipeCreate from './RecipeCreate';

const Recipes = ({ recipes }) => {
  return (
    <div>
      <RecipeCreate />
      <ul>
        {
          recipes.map(recipe => {
            return (
              <RecipeCard {...recipe} key={recipe.id} />
            )
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = ({ recipes, chefs }) => {
  const processed = recipes.map( recipe => {
    return {...recipe, chef: chefs.find(chef=> chef.id === recipe.chefId) };
  });
  return {
    recipes: processed
  }
}
export default connect(mapStateToProps)(Recipes)
