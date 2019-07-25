import { combineReducers } from "redux";
import checc from "./checc";
import user from "./user";
import errors from "./errors";

export default combineReducers({
  checc,
  user,
  errors
});
