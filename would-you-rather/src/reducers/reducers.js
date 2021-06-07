import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";

const rootReducer = combineReducers({
  authedUser,
  users,
  questions,
});

export default rootReducer;
