import React from 'react'
import { connect } from 'react-redux'
import { deleteRecipe } from './store'

const RecipeCard = ({ name, id, destroy }) => {
  return (
    <li>
      {name}
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
