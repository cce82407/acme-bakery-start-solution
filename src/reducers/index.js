import { combineReducers } from "redux";
import newChef from "./createChefReducer";
import newRecipe from "./createRecipeReducer";
import chefs from "./loadChefsReducer";
import recipes from "./loadRecipesReducer";

const rootReducer = combineReducers({
  newChef,
  newRecipe,
  chefs,
  recipes,
});
export default rootReducer;
