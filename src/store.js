import axios from 'axios'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunks from 'redux-thunk'

const LOAD_CHEFS = 'LOAD_CHEFS'
const DELETE_RECIPE = 'DELETE_RECIPE'
const LOAD_RECIPES = 'LOAD_RECIPES'

const chefsReducer = (state = [], action) => {
  if (action.type === LOAD_CHEFS) {
    return action.chefs
  }
  return state
}

const recipesReducer = (state = [], action) => {
  if (action.type === LOAD_RECIPES) {
    return action.recipes
  }
  if (action.type === DELETE_RECIPE) {
    return state.filter(recipe => recipe.id !== action.id)
  }
  return state
}

const reducer = combineReducers({
  chefs: chefsReducer,
  recipes: recipesReducer
})


const store = createStore(reducer, applyMiddleware(thunks))

export default store

//action creators
const _loadChefs = (chefs) => {
  return {
    type: LOAD_CHEFS,
    chefs,
    mango: 'mango',
    thing: true,
  }
}

// action creator
const _deleteRecipe = (id) => {
  return {
    type: DELETE_RECIPE,
    id,
  }
}

const _loadRecipes = (recipes) => ({ type: LOAD_RECIPES, recipes })

//thunks!
const loadChefs = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/chefs')
    const actionToDispatch = _loadChefs(response.data)
    dispatch(actionToDispatch)
  }
}

const loadRecipes = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/recipes')
    dispatch(_loadRecipes(response.data))
  }
}

const deleteRecipe = (id) => {
  return async (dispatch) => {
    await axios.delete(`/api/recipes/${id}`) // delets from backend
    dispatch(_deleteRecipe(id)) // delete from frontend
  }
}

export { loadChefs, loadRecipes, deleteRecipe }

