export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT = "LOGOUT";

export function setAuthedUser(id, name) {
  return {
    type: SET_AUTHED_USER,
    id,
    name,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  }
}


export function handleSetAuthedUser(user) {
  return (dispatch, getState) => {

    dispatch(setAuthedUser(user))
  };
}

export function handleLogout() {
  return (dispatch, getState) => {

    dispatch(logout())
  };
}