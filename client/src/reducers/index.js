import { combineReducers } from "redux";
import authReducer from "./authReducers";
import blogReducer from "./blogReducers";
import errorReducer from "./errorReducers";

export default combineReducers({
  auth: authReducer,
  blog: blogReducer,
  errors: errorReducer
});