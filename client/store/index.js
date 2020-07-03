import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  createChefReducer,
  createRecipeReducer,
  loadChefsReducer,
  loadRecipesReducer,
} from "../reducers/index";

const reducer = combineReducers({
  createChefReducer,
  createRecipeReducer,
  loadChefsReducer,
  loadRecipesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
