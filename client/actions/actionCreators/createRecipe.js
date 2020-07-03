import axios from "axios";
import routes from "../../utils/api";
import { CREATE_RECIPE } from "../actions/index";

function createRecipe({ id, recipeName }) {
  return {
    type: CREATE_RECIPE,
    payload: {
      id: id,
      recipeName: recipeName,
    },
  };
}

export default function (recipeName) {
  return async (dispatch) =>
    await axios
      .post(routes.CREATE_RECIPE, { recipeName })
      .then((res) =>
        dispatch(createRecipe(...res.data)).catch((e) => console.log(e))
      );
}
