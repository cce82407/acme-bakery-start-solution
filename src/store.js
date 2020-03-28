import axios from 'axios'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunks from 'redux-thunk'
import { createLogger } from 'redux-logger'

const LOAD_CHEFS = 'LOAD_CHEFS'
const LOAD_CHEF = 'LOAD_CHEF'
const UPDATE_CHEF = 'UPDATE_CHEF'
const DELETE_RECIPE = 'DELETE_RECIPE'
const LOAD_RECIPES = 'LOAD_RECIPES'
const CREATE_CHEF = 'CREATE_CHEF'
const CREATE_RECIPE = 'CREATE_RECIPE'

const chefReducer = (state = {}, action) => {
  if (action.type === LOAD_CHEF) {
    return action.chef
  }
  if (action.type === UPDATE_CHEF) {
    return action.chef
  }
  return state
}

const chefsReducer = (state = [], action) => {
  if (action.type === LOAD_CHEFS) {
    return action.chefs
  }
  if (action.type === CREATE_CHEF) {
    return [action.chef, ...state]
  }
  if (action.type === UPDATE_CHEF) {
    return state.map(chef => {
      if (chef.id === action.chef.id) {
        return action.chef
      }
      return chef
    })
  }
  return state
}


const recipesReducer = (state = [], action) => {
  if (action.type === LOAD_RECIPES) {
    return action.recipes
  }
  if (action.type === CREATE_RECIPE) {
    return [action.recipe, ...state]
  }
  if (action.type === DELETE_RECIPE) {
    return state.filter(recipe => recipe.id !== action.id)
  }
  return state
}

const reducer = combineReducers({
  chefs: chefsReducer,
  recipes: recipesReducer,
  chef: chefReducer
})


const store = createStore(reducer, applyMiddleware(thunks, createLogger({ collapsed: true })))

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
const _loadChef = (chef) => ({
  type: LOAD_CHEF,
  chef,
})

const _updateChef = (chef) => ({
  type: UPDATE_CHEF,
  chef,
})

const _deleteRecipe = (id) => {
  return {
    type: DELETE_RECIPE,
    id,
  }
}

const createChef = (chef) => {
  return async (dispatch) => {
    const response = await axios.post('/api/chefs', chef)
    dispatch(_createChef(response.data))
  }
}

const _createChef = (chef) => {
  return {
    type: CREATE_CHEF,
    chef,
  }
}

const createRecipe = (recipe) => {
  return async (dispatch) => {
    const response = await axios.post('/api/recipes', recipe)
    dispatch(_createRecipe(response.data))
  }
}

const _createRecipe = (recipe) => {
  return {
    type: CREATE_RECIPE,
    recipe
  }
}

const _loadRecipes = (recipes) => ({ type: LOAD_RECIPES, recipes })

//thunks!

const loadChef = (id) => async (dispatch) => {
  const { data: chef } = await axios.get(`/api/chefs/${id}`)
  // const chef = (await axios.get('/api/chefs/')).data
  dispatch(_loadChef(chef))
}

// the push method comes from a react-route wrapped component
const updateChef = (chef, push) => async (dispatch) => {
  const { data: updatedChef } = await axios.put(`/api/chefs/${chef.id}`, chef)
  dispatch(_updateChef(updatedChef))
  // redirect here!
  push('/chefs')
}

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

export { loadChefs, loadRecipes, deleteRecipe, createChef, createRecipe, loadChef, updateChef }
