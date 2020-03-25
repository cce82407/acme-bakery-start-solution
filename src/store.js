import axios from 'axios';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunks from 'redux-thunk';

const LOAD_CHEFS = 'LOAD_CHEFS';
const LOAD_RECIPES = 'LOAD_RECIPES';

const chefsReducer = (state = [], action)=> {
  if(action.type === LOAD_CHEFS){
    return action.chefs;
  }
  return state;
};

const recipesReducer = (state = [], action)=> {
  if(action.type === LOAD_RECIPES){
    return action.recipes;
  }
  return state;
};

const reducer = combineReducers({
  chefs: chefsReducer,
  recipes: recipesReducer
});


const store = createStore(reducer, applyMiddleware(thunks));

export default store;

//action creators
const _loadChefs = (chefs)=> {
  return {
    type: LOAD_CHEFS,
    chefs
  };
};

const _loadRecipes = (recipes)=> ({ type: LOAD_RECIPES, recipes});

//thunks!
const loadChefs = ()=> {
  return async(dispatch)=> {
    const response = await axios.get('/api/chefs');
    dispatch(_loadChefs(response.data));
  };
};

const loadRecipes = ()=> {
  return async(dispatch)=> {
    const response = await axios.get('/api/recipes');
    dispatch(_loadRecipes(response.data));
  };
};

export {
  loadChefs,
  loadRecipes
};
