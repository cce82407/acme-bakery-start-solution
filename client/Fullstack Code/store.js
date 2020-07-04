import axios from 'axios';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunks from 'redux-thunk';

const CREATE_CHEF = 'CREATE_CHEF'
const CREATE_RECIPE = 'CREATE_RECIPE'


const chefsReducer = (state = [], action)=> {
  if (action.type === 'CREATE_CHEF'){
    state = action.chefs
  }
  return state;
};


const recipesReducer = (state = [], action)=> {
  if (action.type === 'CREATE_CHEF'){
    state = action.recipes
  }
  return state;
};

const reducer = combineReducers({
  chefs: chefsReducer,
  recipes: recipesReducer
});


const store = createStore(reducer, applyMiddleware(thunks));

export default store;

export {

};