import axios from "axios";

import { LOAD_RECIPES } from "../actions/index";

function loadRecipes(recipes) { // load recipes will always return an empty array here
  return {
    type: LOAD_RECIPES,
    payload: [],
  };
}

export default function () {
  return async (dispatch) =>
    await axios
      .get("/api/recipes")
      .then((res) =>
        dispatch(loadRecipes(res.data)).catch((e) => console.log(e))
      );
}
