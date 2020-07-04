import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "react-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index ";

//we will use a function to create our store so that we can have a distinct and separate store from all others because it preserves immutability

export default function configureStore() {
  const middleWare = [thunk, logger];
  const store = createStore(rootReducer, applyMiddleware(...middleWare));
}
