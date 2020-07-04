import axios from "axios";
import routes from "../../utils/api";
import { LOAD_RECIPES } from "../actions/index";

//this is the action creator
function loadRecipes(recipes) {
  return {
    type: LOAD_RECIPES,
    payload: [],
  };
}

//this is the thunk that uses the action creator
export default function () {
  return async (dispatch) =>
    await axios
      .get(routes.LOAD_RECIPES)
      .then((res) =>
        dispatch(loadRecipes(res.data)).catch((e) => console.log(e))
      );
}
