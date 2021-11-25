import {
  ACTION_USER_LOGIN_SUCCESS,
  ACTION_USER_LOGIN_LOADING,
  ACTION_USER_LOGIN_ERROR,
  ACTION_USER_REGISTER_SUCCESS,
  ACTION_USER_REGISTER_LOADING,
  ACTION_USER_REGISTER_ERROR,
} from "../action-type/actionType";

let initialState = {
  loginSuccess: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_USER_LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: action.payload,
      };
    default:
      return state;
  }
}
