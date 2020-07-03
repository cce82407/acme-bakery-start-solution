import axios from "axios";
import routes from "../../utils/api";
import { LOAD_CHEFS } from "../actions/index";

//this is the action creator
function loadChefs(chefs) {
  return {
    type: LOAD_CHEFS,
    payload: {
      chefs: chefs,
    },
  };
}

//this is the thunk that uses the action creator
export default function () {
  return async (dispatch) =>
    await axios
      .get(routes.LOAD_CHEFS)
      .then((res) =>
        dispatch(loadChefs(res.data)).catch((e) => console.log(e))
      );
}
