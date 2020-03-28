import React from 'react'
import { connect } from 'react-redux'
import ChefCreate from './ChefCreate'
import { Link } from 'react-router-dom'


const Chefs = ({ processed }) => {
  return (
    <div>
      <ChefCreate />
      <ul>
        {
          processed.map(chef => {
            return (
              <li key={chef.id}>
                <Link to={`/chefs/${chef.id}`}> {chef.name}</Link>
                <ul>
                  {
                    chef.recipes.map(recipe => {
                      return (
                        <li key={recipe.id}>{recipe.name}</li>
                      )
                    })
                  }
                </ul>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = ({ chefs, recipes }) => {
  const processed = chefs.map(chef => {
    return { ...chef, recipes: recipes.filter(recipe => recipe.chefId === chef.id) }
  })
  return {
    processed
  }
}
export default connect(mapStateToProps)(Chefs)
