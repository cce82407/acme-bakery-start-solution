import axios from "axios";
import { CREATE_CHEF } from "../actions/index";

function createChef({ id, name }) {
  return {
    type: CREATE_CHEF,
    payload: {
      id: id,
      name: name,
    },
  };
}

export default function (name) {
  return (dispatch) =>
    axios
      .post("/api/chefs", { name })
      .then((res) =>
        dispatch(createChef(...res.data)).catch((e) => console.log(e))
      );
}
