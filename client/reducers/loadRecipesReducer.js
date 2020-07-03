import { LOAD_RECIPES } from "../actions/actions/index";

const RECIPES = [];

export default function loadRecipesReducer(state = RECIPES, action) {
  switch (action.type) {
    case LOAD_RECIPES:
      return [...state, ...action.payload.recipes];
    default:
      return state;
  }
}
