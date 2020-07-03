import { CREATE_RECIPE } from "../actions/actions/index";

const NEW_RECIPE = {
    newRecipe = ""
};

export default function createRecipeReducer (state = NEW_RECIPE, action) {
  switch (action.type) {
    case CREATE_RECIPE:
      return {
          ...state,
          recipeName: action.payload.recipeName
      };
    default:
      return state;
  }
}
