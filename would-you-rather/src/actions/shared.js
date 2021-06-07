import { getQuestions } from "./questions";
import { getUsers } from "./users";
import { getInitialData } from "../_DATA.js";
import { setAuthedUser } from "./authedUser";

const AUTHED_USER = "johndoe";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
      dispatch(setAuthedUser(AUTHED_USER));
    });
  };
}
