import axios from "axios";

import { LOAD_CHEFS } from "../actions/index";
function loadChefs(chefs) {
  return {
    type: LOAD_CHEFS,
    payload: [],
  };
}

//this is a function that the thunk calls, so the thunk executes this, then calls dispatch
export default function () {
  return async (dispatch) =>
    await axios
      .get("/api/chefs")
      .then((res) =>
        dispatch(loadChefs(res.data)).catch((e) => console.log(e))
      );
}
