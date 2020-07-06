import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index ";

//we will use a function to create our store so that we can have a distinct and separate store from all others because it preserves immutability

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
