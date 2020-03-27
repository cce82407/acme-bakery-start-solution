import React from 'react'
import { connect } from 'react-redux'
import { deleteRecipe } from './store'

const RecipeCard = ({ name, id, destroy, chef }) => {
  return (
    <li>
      <h3>{name}</h3>
      <div>Created by { chef && chef.name }</div>
      <button type="button" onClick={() => destroy(id)}>x</button>
    </li>
  )
}


const mapStateToProps = null

const mapDispatchToProps = (dispatch) => {
  return {
    destroy: (id) => {
      console.log('You are deleting:', id)
      dispatch(deleteRecipe(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard)
