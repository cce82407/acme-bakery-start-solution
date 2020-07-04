import axios from "axios";
import routes from "../../utils/api";
import { CREATE_RECIPE } from "../actions/index";

//this is the action creator
function createRecipe({ id, recipeName }) {
  return {
    type: CREATE_RECIPE,
    payload: {
      id: id,
      recipeName: recipeName,
    },
  };
}

//this is the thunk that uses the action creator
export default function (recipeName, chef) {
  return async (dispatch) =>
    await axios
      .post(routes.CREATE_RECIPE, { recipeName, chef })
      .then((res) =>
        dispatch(createRecipe(...res.data)).catch((e) => console.log(e))
      );
}
