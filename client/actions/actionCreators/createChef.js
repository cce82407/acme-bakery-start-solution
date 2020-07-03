import axios from "axios";
import routes from "../../utils/api";
import { CREATE_CHEF } from "../actions/index";

//this is the action creator
function createChef({ id, firstName, lastName }) {
  return {
    type: CREATE_CHEF,
    payload: {
      id: id,
      firstName: firstName,
      lastName: lastName,
    },
  };
}

//this is the thunk that uses the action creatork
export default function (firstName, lastName) {
  return (dispatch) =>
    axios
      .post(routes.CREATE_CHEF, { firstName, lastName })
      .then((res) =>
        dispatch(createChef(...res.data)).catch((e) => console.log(e))
      );
}
