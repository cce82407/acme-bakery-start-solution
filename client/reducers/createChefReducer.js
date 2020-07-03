import { CREATE_CHEF } from "../actions/actions/index";

const NEW_CHEF = {
    firstName = "",
    lastName = "",
};

export default function createChefReducer (state = NEW_CHEF, action) {
  switch (action.type) {
    case CREATE_CHEF:
      return {
          ...state, 
          firstName: action.payload.firstName, 
          lastName: action.payload.lastname
      };
    default:
      return state;
  }
}
