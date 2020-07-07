import { CREATE_CHEF } from "../actions/actions/index";

const NEW_CHEF = {
  id: null,
  name: "",
};

export default function newChef(state = NEW_CHEF, action) {
  switch (action.type) {
    case CREATE_CHEF:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
