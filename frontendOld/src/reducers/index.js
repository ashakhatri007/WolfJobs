import { combineReducers } from "redux";
import auth from "./auth";
import search from "./search";
import job from "./job";
import application from "./application";
import utilState from "./utilState";

export default combineReducers({
  auth,
  search,
  utilState,
  job,
  application,
});
