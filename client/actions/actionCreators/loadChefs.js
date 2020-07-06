import axios from "axios";
import routes from "../../utils/api";
import { LOAD_CHEFS } from "../actions/index";

//this is the action creator
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
      .get(routes.LOAD_CHEFS)
      .then((res) =>
        dispatch(loadChefs(res.data)).catch((e) => console.log(e))
      );
}
