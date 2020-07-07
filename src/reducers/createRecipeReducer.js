import { CREATE_RECIPE } from "../actions/actions/index";

const NEW_RECIPE = {
  id: null,
  recipeName: "",
};

export default function newRecipe(state = NEW_RECIPE, action) {
  switch (action.type) {
    case CREATE_RECIPE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
