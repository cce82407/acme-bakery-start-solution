import axios from "axios";
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

export default function (recipeName, chef) {
  return async (dispatch) =>
    await axios
      .post("/api/recipes", { recipeName, chef })
      .then((res) =>
        dispatch(createRecipe(...res.data)).catch((e) => console.log(e))
      );
}
