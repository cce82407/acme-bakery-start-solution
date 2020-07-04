import { LOAD_CHEFS } from "../actions/actions/index";

const CHEFS = [];

export default function chefs(state = CHEFS, action) {
  switch (action.type) {
    case LOAD_CHEFS:
      return [...state, ...action.payload.chefs];
    default:
      return state;
  }
}
